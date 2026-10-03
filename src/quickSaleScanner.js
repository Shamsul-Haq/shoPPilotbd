/**
 * shoPPilot - Barcode Scanner (POS & Quick Sale)
 * Powered by Html5Qrcode with multi-format 1D/2D barcode detection,
 * camera selection, torch control, audio & haptic feedback,
 * and seamless cart integration for both Sales page and Quick Sale.
 */
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';

let html5QrCode = null;
let activeScannerTarget = 'qs'; // 'qs' | 'pos'
let isScannerActive = false;
let isContinuousScan = true;
let isTorchOn = false;
let currentCameraId = null;
let availableCameras = [];
let lastScannedCode = null;
let lastScannedTime = 0;
const DEBOUNCE_MS = 1400; // Ignore repeated scans of same barcode within 1.4s

// Synthesized audio feedback using Web Audio API (crisp, professional retail POS chimes)
function playBeep(success = true) {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;
        if (success) {
            // Pleasant double high chime for POS barcode scan success
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1760, now); // A6
            osc.frequency.setValueAtTime(2093, now + 0.06); // C7
            gain.gain.setValueAtTime(0.18, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
            osc.start(now);
            osc.stop(now + 0.16);
        } else {
            // Low buzz for unrecognized barcode
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(320, now);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
            osc.start(now);
            osc.stop(now + 0.28);
        }
    } catch (e) {}

    // Haptic feedback for mobile devices
    try {
        if (navigator.vibrate) {
            navigator.vibrate(success ? [45] : [60, 50, 90]);
        }
    } catch (e) {}
}

/**
 * Find product matching scanned barcode or ID
 */
function findProductByBarcode(code) {
    if (!code) return null;
    const cleanCode = String(code).trim().toLowerCase();
    const strippedCode = cleanCode.replace(/^0+/, '');

    // Check candidate sources
    const candidateSources = [
        window.qp_master_products || [],
        window.mpp_master_products || [],
        window.allProducts || [],
        window.quickProducts || [],
        window.posAvailableBatches || [],
        window.productMap ? Object.values(window.productMap) : []
    ];

    for (const list of candidateSources) {
        if (!Array.isArray(list) || !list.length) continue;
        const match = list.find(p => {
            if (!p) return false;
            const b = String(p.Barcode || p.barcode || '').trim().toLowerCase();
            const id = String(p.Product_ID || p.product_id || p.id || '').trim().toLowerCase();
            const batch = String(p.batch || p.batch_no || p.Batch_No || '').trim().toLowerCase();
            if ((b && b === cleanCode) || (id && id === cleanCode) || (batch && batch === cleanCode)) return true;
            if (b && strippedCode && b.replace(/^0+/, '') === strippedCode) return true;
            return false;
        });

        if (match) {
            const pId = match.Product_ID || match.product_id || match.id;
            const pName = match.Product_Name || match.product_name || match.name || 'Product';
            const pCost = parseFloat(match.Cost_Price || match.cost_price || match.Unit_Price || match.unit_price || 0) || 0;
            const pPrice = parseFloat(match.Sale_Price || match.sale_price || match.price || match.Unit_Price || match.unit_price || 0) || 0;
            const pUpc = parseInt(match.UPC || match.upc || match.Pack_Size || match.pack_size || match.Carton_Size || 1) || 1;
            const pStock = parseFloat(match.Stock || match.stock || 50) || 50;
            const pBatch = match.batch || match.batch_no || match.Batch_No || 'BT-STOCK';

            return {
                id: pId,
                name: pName,
                batch: pBatch,
                warehouseId: match.Warehouse_ID || match.warehouse_id || match.warehouseId || 'W001',
                warehouseName: match.Warehouse_Name || match.warehouse_name || match.warehouseName || 'MouloviBazar',
                price: pPrice,
                cost: pCost,
                upc: pUpc,
                stock: pStock
            };
        }
    }

    return null;
}

/**
 * Handle successful barcode decode from camera or manual stream
 */
function onBarcodeScanned(decodedText, decodedResult) {
    const now = Date.now();
    const cleanText = String(decodedText).trim();

    // Debounce duplicate scans
    if (cleanText === lastScannedCode && (now - lastScannedTime) < DEBOUNCE_MS) {
        return;
    }

    lastScannedCode = cleanText;
    lastScannedTime = now;

    // Find product
    const product = findProductByBarcode(cleanText);

    if (product) {
        playBeep(true);

        if (activeScannerTarget === 'pos') {
            triggerScanVisualSuccess(product, cleanText, 'pos');
            if (typeof window.addBatchToPosCart === 'function') {
                window.addBatchToPosCart(product);
            }
            if (!isContinuousScan) {
                setTimeout(() => window.closePosBarcodeScanner(), 500);
            }
        } else if (activeScannerTarget === 'qp') {
            triggerScanVisualSuccess(product, cleanText, 'qp');
            if (typeof window.qp_selectProduct === 'function') {
                window.qp_selectProduct(product.id);
            }
            const inp = document.getElementById('qp_search_input');
            if (inp) inp.value = '';
            const dd = document.getElementById('qp_results');
            if (dd) dd.style.display = 'none';
            const tip = document.getElementById('qp_barcode_tip');
            if (tip) {
                tip.textContent = `✓ Added: ${product.name || product.id}`;
                tip.style.color = '#10b981';
                setTimeout(() => { if (tip) tip.textContent = ''; }, 3000);
            }
            if (!isContinuousScan) {
                setTimeout(() => window.closeQpBarcodeScanner(), 500);
            }
        } else if (activeScannerTarget === 'mpp') {
            triggerScanVisualSuccess(product, cleanText, 'mpp');
            if (typeof window.mpp_selectProduct === 'function') {
                window.mpp_selectProduct(product.id);
            }
            const bInp = document.getElementById('mpp_barcode_input');
            if (bInp) bInp.value = cleanText;
            if (!isContinuousScan) {
                setTimeout(() => window.closeMppBarcodeScanner(), 500);
            }
        } else {
            triggerScanVisualSuccess(product, cleanText, 'qs');
            if (typeof window.addQuickCartItem === 'function') {
                window.addQuickCartItem(
                    product.id,
                    product.name,
                    product.batch || 'BT-20260830-001',
                    product.price,
                    product.upc || 1,
                    product.stock || 100
                );
            }
            if (!isContinuousScan) {
                setTimeout(() => window.closeQsBarcodeScanner(), 500);
            }
        }
    } else {
        playBeep(false);
        triggerScanVisualNotFound(cleanText, activeScannerTarget);
    }
}

/**
 * UI Feedback: Laser flash & success toast
 */
function triggerScanVisualSuccess(product, code, target = 'qs') {
    const laserId = target === 'pos' ? 'pos_scanner_laser' : 'qs_scanner_laser';
    const toastId = target === 'pos' ? 'pos_scanner_toast' : 'qs_scanner_toast';

    const laser = document.getElementById(laserId);
    if (laser) {
        laser.classList.add('scanner-laser-success');
        setTimeout(() => laser.classList.remove('scanner-laser-success'), 600);
    }

    const toast = document.getElementById(toastId);
    if (toast) {
        toast.className = 'qs-scanner-toast qs-toast-success';
        toast.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px;">
                <span class="qs-toast-icon"><i class="fas fa-check-circle"></i></span>
                <div style="flex:1; overflow:hidden;">
                    <strong style="display:block; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${escapeHtml(product.name || product.id)}</strong>
                    <div style="font-size:0.75rem; opacity:0.9;">Code: ${escapeHtml(code)} &bull; ৳${product.price} &bull; Added to Cart!</div>
                </div>
            </div>`;
        toast.style.display = 'block';
        setTimeout(() => {
            if (toast) toast.style.display = 'none';
        }, 2200);
    }
}

/**
 * UI Feedback: Warning toast for unrecognized barcode
 */
function triggerScanVisualNotFound(code, target = 'qs') {
    const toastId = target === 'pos' ? 'pos_scanner_toast' : 'qs_scanner_toast';
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.className = 'qs-scanner-toast qs-toast-warning';
        toast.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px;">
                <span class="qs-toast-icon" style="color:#f59e0b;"><i class="fas fa-exclamation-triangle"></i></span>
                <div style="flex:1; overflow:hidden;">
                    <strong>Unrecognized Barcode</strong>
                    <div style="font-size:0.75rem;">"${escapeHtml(code)}" is not in inventory.</div>
                </div>
            </div>`;
        toast.style.display = 'block';
        setTimeout(() => {
            if (toast) toast.style.display = 'none';
        }, 3000);
    }
}

/**
 * Start camera barcode scanner for target ('qs', 'pos', 'qp', or 'mpp')
 */
async function startCameraScanner(target = 'qs') {
    activeScannerTarget = target;
    const readerId = `${target}_reader`;
    const panelId = `${target}_camera_scanner_panel`;
    const statusId = `${target}_scanner_status_text`;
    const errorBoxId = `${target}_scanner_error_box`;
    const camSelectId = `${target}_camera_select`;
    const toggleBtnId = target === 'pos' ? 'posBarcodeBtn' : (target === 'mpp' ? 'mppBarcodeBtn' : (target === 'qp' ? 'qpBarcodeHdrBtn' : 'qsBarcodeHdrBtn'));

    const panel = document.getElementById(panelId);
    if (!panel) return;
    panel.style.display = 'block';
    isScannerActive = true;

    const toggleBtn = document.getElementById(toggleBtnId);
    if (toggleBtn) toggleBtn.classList.add('active');

    const statusEl = document.getElementById(statusId);
    if (statusEl) statusEl.textContent = 'Initializing device camera...';

    const errorBox = document.getElementById(errorBoxId);
    if (errorBox) errorBox.style.display = 'none';

    // Verify browser support for MediaDevices
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        isScannerActive = false;
        if (statusEl) {
            statusEl.innerHTML = `<span style="color:#f59e0b;"><i class="fas fa-video-slash"></i> Camera API not supported in this browser</span>`;
        }
        showCameraErrorHelp({ name: 'NotSupportedError', message: 'Camera API is not supported in this browser or iframe environment.' }, target);
        return;
    }

    // Stop existing scanner instance if switching
    if (html5QrCode) {
        try {
            if (html5QrCode.isScanning) {
                await html5QrCode.stop();
            }
        } catch (_) {}
        html5QrCode = null;
    }

    const formatsToSupport = [
        Html5QrcodeSupportedFormats.EAN_13,
        Html5QrcodeSupportedFormats.EAN_8,
        Html5QrcodeSupportedFormats.CODE_128,
        Html5QrcodeSupportedFormats.CODE_39,
        Html5QrcodeSupportedFormats.UPC_A,
        Html5QrcodeSupportedFormats.UPC_E,
        Html5QrcodeSupportedFormats.ITF,
        Html5QrcodeSupportedFormats.QR_CODE,
        Html5QrcodeSupportedFormats.DATA_MATRIX
    ];

    try {
        html5QrCode = new Html5Qrcode(readerId, {
            formatsToSupport,
            verbose: false
        });

        // Enumerate video devices
        try {
            availableCameras = await Html5Qrcode.getCameras();
            renderCameraSelectOptions(availableCameras, camSelectId);
        } catch (e) {
            console.warn('Could not enumerate cameras:', e?.message || e);
        }

        const config = {
            fps: 15,
            qrbox: { width: 260, height: 160 },
            aspectRatio: 1.333334
        };

        const cameraConfig = currentCameraId ? { deviceId: { exact: currentCameraId } } : { facingMode: "environment" };

        await html5QrCode.start(
            cameraConfig,
            config,
            (decodedText, decodedResult) => onBarcodeScanned(decodedText, decodedResult),
            () => {}
        );

        if (statusEl) statusEl.textContent = 'Ready! Align barcode within frame or scan with barcode gun';
        checkTorchSupport(target);

    } catch (err) {
        isScannerActive = false;
        const errMsg = String(err?.message || err || '');
        const isPermissionDenied = err?.name === 'NotAllowedError' || errMsg.toLowerCase().includes('permission denied') || errMsg.toLowerCase().includes('not allowed');

        if (isPermissionDenied) {
            console.warn('Camera access permission was denied by user or browser policy:', errMsg);
        } else {
            console.warn('Camera startup unavailable:', errMsg);
        }

        if (statusEl) {
            statusEl.innerHTML = isPermissionDenied
                ? `<span style="color:#ef4444;"><i class="fas fa-lock"></i> Camera permission blocked. Please allow camera or use manual input below.</span>`
                : `<span style="color:#ef4444;"><i class="fas fa-exclamation-circle"></i> Camera access error: ${escapeHtml(err?.message || 'Permission denied or not available')}</span>`;
        }
        showCameraErrorHelp(err, target);
    }
}

/**
 * Render camera dropdown options
 */
function renderCameraSelectOptions(cameras, selectId) {
    const select = document.getElementById(selectId);
    if (!select || !cameras || cameras.length === 0) return;

    select.innerHTML = cameras.map((cam, idx) => `
        <option value="${escapeHtml(cam.id)}">${escapeHtml(cam.label || `Camera ${idx + 1}`)}</option>
    `).join('');

    select.style.display = cameras.length > 1 ? 'inline-block' : 'none';
}

/**
 * Stop and close scanner
 */
async function stopCameraScanner(target = 'qs') {
    const panelId = `${target}_camera_scanner_panel`;
    const toggleBtnId = target === 'pos' ? 'posBarcodeBtn' : (target === 'mpp' ? 'mppBarcodeBtn' : (target === 'qp' ? 'qpBarcodeHdrBtn' : 'qsBarcodeHdrBtn'));

    const panel = document.getElementById(panelId);
    if (panel) panel.style.display = 'none';

    const toggleBtn = document.getElementById(toggleBtnId);
    if (toggleBtn) toggleBtn.classList.remove('active');

    isScannerActive = false;
    isTorchOn = false;

    if (html5QrCode) {
        try {
            if (html5QrCode.isScanning) {
                await html5QrCode.stop();
            }
        } catch (e) {
            console.warn('Error stopping scanner:', e);
        }
    }
}

/**
 * Check if the active video track supports torch/flashlight
 */
function checkTorchSupport(target = 'qs') {
    const torchBtnId = `${target}_scanner_torch_btn`;
    const torchBtn = document.getElementById(torchBtnId);
    if (!torchBtn) return;
    try {
        const stream = html5QrCode.getRunningTrackCameraCapabilities();
        if (stream && stream.torchFeature && stream.torchFeature().isSupported()) {
            torchBtn.style.display = 'inline-flex';
        } else {
            torchBtn.style.display = 'none';
        }
    } catch (e) {
        torchBtn.style.display = 'none';
    }
}

/**
 * Toggle flashlight
 */
function toggleTorch(iconId = 'qs_torch_icon') {
    if (!html5QrCode || !isScannerActive) return;
    try {
        const capabilities = html5QrCode.getRunningTrackCameraCapabilities();
        if (capabilities && capabilities.torchFeature && capabilities.torchFeature().isSupported()) {
            isTorchOn = !isTorchOn;
            capabilities.torchFeature().apply(isTorchOn);
            const icon = document.getElementById(iconId);
            if (icon) {
                icon.className = isTorchOn ? 'fas fa-lightbulb' : 'far fa-lightbulb';
            }
        }
    } catch (e) {
        console.warn('Torch toggle failed:', e);
    }
}

function showCameraErrorHelp(err, target = 'qs') {
    const errorBoxId = target === 'pos' ? 'pos_scanner_error_box' : 'qs_scanner_error_box';
    const manualInputId = target === 'pos' ? 'pos_manual_barcode_input' : 'qs_manual_barcode_input';
    const retryFn = target === 'pos' ? 'openPosBarcodeScanner()' : 'openQsBarcodeScanner()';
    const closeFn = target === 'pos' ? 'closePosBarcodeScanner()' : 'closeQsBarcodeScanner()';

    const errorBox = document.getElementById(errorBoxId);
    if (!errorBox) return;

    const errMsg = String(err?.message || err || '');
    const isPermissionDenied = err?.name === 'NotAllowedError' || errMsg.toLowerCase().includes('permission denied') || errMsg.toLowerCase().includes('not allowed');
    const isNotFound = err?.name === 'NotFoundError' || errMsg.toLowerCase().includes('not found') || errMsg.toLowerCase().includes('no device');

    let title = 'Camera Unavailable';
    let detail = 'Unable to access device camera. You can type barcodes or SKUs directly in the manual input below.';

    if (isPermissionDenied) {
        title = 'Camera Permission Blocked';
        detail = 'Camera access was denied by your browser or iframe security settings. Please allow camera permissions for this site, or enter the product barcode manually below.';
    } else if (isNotFound) {
        title = 'No Camera Detected';
        detail = 'No video camera was found on your device. You can connect a USB/Bluetooth barcode scanner or use the manual barcode tester below.';
    }

    errorBox.style.display = 'block';
    errorBox.innerHTML = `
        <div style="display:flex; align-items:flex-start; gap:10px; background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.2); border-radius:8px; padding:10px 12px; margin-bottom:10px;">
            <i class="fas ${isPermissionDenied ? 'fa-video-slash' : 'fa-exclamation-triangle'}" style="color:#ef4444; font-size:1.1rem; margin-top:2px;"></i>
            <div style="flex:1;">
                <div style="font-weight:700; color:#b91c1c; font-size:0.85rem; margin-bottom:3px;">${title}</div>
                <div style="font-size:0.78rem; color:#475569; line-height:1.4; margin-bottom:8px;">${escapeHtml(detail)}</div>
                <div style="display:flex; gap:6px; flex-wrap:wrap;">
                    <button type="button" class="btn btn-sm btn-outline-primary" onclick="${retryFn}" style="font-size:0.75rem; padding:3px 10px;">
                        <i class="fas fa-redo"></i> Retry Camera
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" onclick="document.getElementById('${manualInputId}')?.focus()" style="font-size:0.75rem; padding:3px 10px;">
                        <i class="fas fa-keyboard"></i> Type Barcode Manually
                    </button>
                    <button type="button" class="btn btn-sm btn-light" onclick="${closeFn}" style="font-size:0.75rem; padding:3px 10px;">
                        Close Scanner
                    </button>
                </div>
            </div>
        </div>`;

    const manualInput = document.getElementById(manualInputId);
    if (manualInput) {
        setTimeout(() => manualInput.focus(), 150);
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/* ========================================================
   QUICK SALE SCANNER API
   ======================================================== */
window.openQsBarcodeScanner = () => startCameraScanner('qs');
window.closeQsBarcodeScanner = () => stopCameraScanner('qs');
window.toggleQsBarcodeScanner = () => {
    if (isScannerActive && activeScannerTarget === 'qs') {
        window.closeQsBarcodeScanner();
    } else {
        window.openQsBarcodeScanner();
    }
};
window.switchQsCamera = async function(newCamId) {
    if (!html5QrCode || !isScannerActive) return;
    try {
        currentCameraId = newCamId;
        await html5QrCode.stop();
        window.openQsBarcodeScanner();
    } catch (e) {
        console.warn('Error switching camera:', e);
    }
};
window.toggleQsTorch = () => toggleTorch('qs_torch_icon');
window.toggleQsContinuousScan = function() {
    isContinuousScan = !isContinuousScan;
    const btn = document.getElementById('qs_continuous_btn');
    if (btn) btn.classList.toggle('active', isContinuousScan);
};
window.scanQsBarcodeManually = function() {
    const input = document.getElementById('qs_manual_barcode_input');
    if (!input || !input.value.trim()) return;
    activeScannerTarget = 'qs';
    onBarcodeScanned(input.value.trim(), null);
    input.value = '';
};
window.testQsScanBarcode = function(code) {
    activeScannerTarget = 'qs';
    onBarcodeScanned(code, null);
};

/* ========================================================
   SALES (POS) BARCODE SCANNER API
   ======================================================== */
window.openPosBarcodeScanner = () => startCameraScanner('pos');
window.closePosBarcodeScanner = () => stopCameraScanner('pos');
window.togglePosBarcodeScanner = () => {
    if (isScannerActive && activeScannerTarget === 'pos') {
        window.closePosBarcodeScanner();
    } else {
        window.openPosBarcodeScanner();
    }
};
window.switchPosCamera = async function(newCamId) {
    if (!html5QrCode || !isScannerActive) return;
    try {
        currentCameraId = newCamId;
        await html5QrCode.stop();
        window.openPosBarcodeScanner();
    } catch (e) {
        console.warn('Error switching camera:', e);
    }
};
window.togglePosTorch = () => toggleTorch('pos_torch_icon');
window.togglePosContinuousScan = function() {
    isContinuousScan = !isContinuousScan;
    const btn = document.getElementById('pos_continuous_btn');
    if (btn) btn.classList.toggle('active', isContinuousScan);
};
window.scanPosBarcodeManually = function() {
    const input = document.getElementById('pos_manual_barcode_input');
    if (!input || !input.value.trim()) return;
    activeScannerTarget = 'pos';
    onBarcodeScanned(input.value.trim(), null);
    input.value = '';
};
window.testPosScanBarcode = function(code) {
    activeScannerTarget = 'pos';
    onBarcodeScanned(code, null);
};

/* ========================================================
   QUICK PURCHASE SCANNER API
   ======================================================== */
window.openQpBarcodeScanner = () => startCameraScanner('qp');
window.closeQpBarcodeScanner = () => stopCameraScanner('qp');
window.toggleQpBarcodeScanner = () => {
    if (isScannerActive && activeScannerTarget === 'qp') {
        window.closeQpBarcodeScanner();
    } else {
        window.openQpBarcodeScanner();
    }
};
window.switchQpCamera = async function(newCamId) {
    if (!html5QrCode || !isScannerActive) return;
    try {
        currentCameraId = newCamId;
        await html5QrCode.stop();
        window.openQpBarcodeScanner();
    } catch (e) {
        console.warn('Error switching camera:', e);
    }
};
window.toggleQpTorch = () => toggleTorch('qp_torch_icon');
window.toggleQpContinuousScan = function() {
    isContinuousScan = !isContinuousScan;
    const btn = document.getElementById('qp_continuous_btn');
    if (btn) btn.classList.toggle('active', isContinuousScan);
};
window.scanQpBarcodeManually = function() {
    const input = document.getElementById('qp_manual_barcode_input') || document.getElementById('qp_search_input');
    if (!input || !input.value.trim()) return;
    activeScannerTarget = 'qp';
    onBarcodeScanned(input.value.trim(), null);
    input.value = '';
};

/* ========================================================
   PURCHASES INBOUND (MULTI-PURCHASE) BARCODE SCANNER API
   ======================================================== */
window.openMppBarcodeScanner = () => startCameraScanner('mpp');
window.closeMppBarcodeScanner = () => stopCameraScanner('mpp');
window.toggleMppBarcodeScanner = () => {
    if (isScannerActive && activeScannerTarget === 'mpp') {
        window.closeMppBarcodeScanner();
    } else {
        window.openMppBarcodeScanner();
    }
};
window.switchMppCamera = async function(newCamId) {
    if (!html5QrCode || !isScannerActive) return;
    try {
        currentCameraId = newCamId;
        await html5QrCode.stop();
        window.openMppBarcodeScanner();
    } catch (e) {
        console.warn('Error switching camera:', e);
    }
};
window.toggleMppTorch = () => toggleTorch('mpp_torch_icon');
window.toggleMppContinuousScan = function() {
    isContinuousScan = !isContinuousScan;
    const btn = document.getElementById('mpp_continuous_btn');
    if (btn) btn.classList.toggle('active', isContinuousScan);
};
window.scanMppBarcodeManually = function() {
    const input = document.getElementById('mpp_manual_barcode_input') || document.getElementById('mpp_barcode_input');
    if (!input || !input.value.trim()) return;
    activeScannerTarget = 'mpp';
    onBarcodeScanned(input.value.trim(), null);
};
