/**
 * shoPPilot IMS - Dark Mode & Theme Manager
 * Manages light/dark mode preference via CSS variables and persists in localStorage.
 */

const THEME_STORAGE_KEY = 'shoppilot_theme';

export function getTheme() {
    try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === 'dark' || stored === 'light') return stored;
    } catch (e) {}

    // Fallback to system preference if no stored choice
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

export function setTheme(theme, save = true) {
    const isDark = theme === 'dark';
    const root = document.documentElement;
    const body = document.body;

    if (isDark) {
        root.setAttribute('data-theme', 'dark');
        if (body) body.classList.add('dark-mode');
    } else {
        root.removeAttribute('data-theme');
        root.setAttribute('data-theme', 'light');
        if (body) body.classList.remove('dark-mode');
    }

    if (save) {
        try {
            localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch (e) {}
    }

    // Update Chart.js defaults if loaded
    if (typeof window !== 'undefined' && window.Chart) {
        window.Chart.defaults.color = isDark ? '#94a3b8' : '#64748b';
        window.Chart.defaults.borderColor = isDark ? '#334155' : '#f1f5f9';
    }

    // Update all toggle controls in UI
    updateThemeUI(theme);

    // Dispatch event for any custom listeners
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('shoppilot-theme-changed', { detail: { theme } }));
    }
}

export function toggleDarkMode() {
    const current = getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    return next;
}

export function updateThemeUI(theme) {
    const isDark = theme === 'dark';

    // 1. Settings Switch (Checkbox / Toggle)
    const settingsSwitch = document.getElementById('settingsThemeSwitch');
    if (settingsSwitch) {
        settingsSwitch.checked = isDark;
    }

    // 2. Settings Segmented Buttons
    const lightBtn = document.getElementById('themeBtnLight');
    const darkBtn = document.getElementById('themeBtnDark');
    if (lightBtn && darkBtn) {
        if (isDark) {
            darkBtn.classList.add('active');
            lightBtn.classList.remove('active');
        } else {
            lightBtn.classList.add('active');
            darkBtn.classList.remove('active');
        }
    }

    // 3. Status text in settings
    const statusText = document.getElementById('themeStatusText');
    if (statusText) {
        statusText.textContent = isDark ? 'Dark Mode Active' : 'Light Mode Active';
    }

    // 4. Header quick toggle button (if present)
    const headerBtn = document.getElementById('btnThemeToggle');
    const headerIcon = document.getElementById('btnThemeToggleIcon');
    const headerText = document.getElementById('btnThemeToggleText');
    if (headerBtn) {
        if (isDark) {
            if (headerIcon) headerIcon.className = 'fas fa-sun';
            if (headerText) headerText.textContent = 'Light';
            headerBtn.title = 'Switch to Light Mode';
        } else {
            if (headerIcon) headerIcon.className = 'fas fa-moon';
            if (headerText) headerText.textContent = 'Dark';
            headerBtn.title = 'Switch to Dark Mode';
        }
    }

    // 5. Sidebar Logo text styling adjustment
    const sidebarLogo = document.getElementById('sidebarLogoText');
    if (sidebarLogo) {
        sidebarLogo.style.color = isDark ? '#60a5fa' : '#1e293b';
    }

    // 6. Sidebar footer toggle button (if present)
    const sidebarIcon = document.getElementById('sidebarThemeIcon');
    const sidebarText = document.getElementById('sidebarThemeText');
    if (sidebarIcon) {
        sidebarIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        sidebarIcon.style.color = isDark ? '#f59e0b' : '#6366f1';
    }
    if (sidebarText) {
        sidebarText.textContent = isDark ? 'Light' : 'Dark';
    }

    // 6b. Auth / Login view theme toggle button (if present)
    const authThemeIcon = document.getElementById('authThemeIcon');
    const authThemeText = document.getElementById('authThemeText');
    if (authThemeIcon) {
        authThemeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        authThemeIcon.style.color = isDark ? '#f59e0b' : '#6366f1';
    }
    if (authThemeText) {
        authThemeText.textContent = isDark ? 'Light' : 'Dark';
    }

    // 7. Refresh visible Chart.js instances if active
    if (typeof window !== 'undefined') {
        try {
            if (window.whCategoryBarChartInstance) {
                if (window.whCategoryBarChartInstance.options?.scales?.x?.ticks) {
                    window.whCategoryBarChartInstance.options.scales.x.ticks.color = isDark ? '#94a3b8' : '#475569';
                }
                if (window.whCategoryBarChartInstance.options?.scales?.y?.ticks) {
                    window.whCategoryBarChartInstance.options.scales.y.ticks.color = isDark ? '#94a3b8' : '#64748b';
                    window.whCategoryBarChartInstance.options.scales.y.grid.color = isDark ? '#1e293b' : '#f1f5f9';
                }
                window.whCategoryBarChartInstance.update();
            }
            if (window.salesChartInstance) {
                if (window.salesChartInstance.options?.scales?.x?.ticks) {
                    window.salesChartInstance.options.scales.x.ticks.color = isDark ? '#94a3b8' : '#475569';
                }
                if (window.salesChartInstance.options?.scales?.y?.ticks) {
                    window.salesChartInstance.options.scales.y.ticks.color = isDark ? '#94a3b8' : '#64748b';
                }
                if (window.salesChartInstance.options?.scales?.x?.grid) {
                    window.salesChartInstance.options.scales.x.grid.display = false;
                }
                if (window.salesChartInstance.options?.scales?.y?.grid) {
                    window.salesChartInstance.options.scales.y.grid.display = false;
                }
                window.salesChartInstance.update();
            }
            if (window.categoryChart) {
                if (window.categoryChart.options?.scales?.x?.ticks) {
                    window.categoryChart.options.scales.x.ticks.color = isDark ? '#94a3b8' : '#475569';
                }
                if (window.categoryChart.options?.scales?.y?.ticks) {
                    window.categoryChart.options.scales.y.ticks.color = isDark ? '#94a3b8' : '#64748b';
                }
                if (window.categoryChart.options?.scales?.x?.grid) {
                    window.categoryChart.options.scales.x.grid.display = false;
                }
                if (window.categoryChart.options?.scales?.y?.grid) {
                    window.categoryChart.options.scales.y.grid.display = false;
                }
                window.categoryChart.update();
            }
        } catch (err) {}
    }

    // Refresh customer cards if on page
    if (typeof window !== 'undefined' && typeof window.renderCustomerTypeDueCards === 'function') {
        try { window.renderCustomerTypeDueCards(); } catch (e) {}
    }

    // Refresh inventory matrix if on page and loaded
    if (typeof window !== 'undefined' && typeof window.renderInventoryMatrixTable === 'function' && Array.isArray(window.inventoryMatrixData) && window.inventoryMatrixData.length) {
        try { window.renderInventoryMatrixTable(); } catch (e) {}
    }
}

export function initTheme() {
    const theme = getTheme();
    setTheme(theme, false);

    // Once DOM is loaded, sync the UI elements
    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => updateThemeUI(theme));
        } else {
            updateThemeUI(theme);
        }
    }
}

// Auto-run initialization immediately upon script import
initTheme();

// Expose on global window object
if (typeof window !== 'undefined') {
    window.getTheme = getTheme;
    window.setTheme = setTheme;
    window.toggleDarkMode = toggleDarkMode;
    window.initTheme = initTheme;
    window.updateThemeUI = updateThemeUI;
}
