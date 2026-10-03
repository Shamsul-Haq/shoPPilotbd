/**
 * shoPPilot IMS - Internationalization (i18n) Engine
 * Full English to Bengali (বাংলা) & Bengali to English Translation System
 */

// 1. Comprehensive Exact Phrase & Sentence Dictionary
export const EXACT_DICTIONARY = {
  // Navigation & System
  "Dashboard": "ড্যাশবোর্ড",
  "Warehouse Info": "ওয়্যারহাউস তথ্য",
  "Inventory": "ইনভেন্টরি",
  "Products": "পণ্যসমূহ",
  "Sales": "বিক্রয়",
  "Sales Returns": "বিক্রয় ফেরত",
  "Purchases": "ক্রয় (স্টক ইন)",
  "Purchase Returns": "ক্রয় ফেরত",
  "Customers": "গ্রাহকবৃন্দ",
  "Suppliers": "সরবরাহকারীগণ",
  "Cash Book/Exp": "ক্যাশ বুক / খরচ",
  "Reports": "রিপোর্ট ও বিশ্লেষণ",
  "SYSTEM": "সিস্টেম",
  "Settings": "সেটিংস",
  "Data Management": "ডেটা ব্যবস্থাপনা",
  "User Roles": "ব্যবহারকারী ভূমিকা",
  "Supabase Config": "সুপাবেস কনফিগারেশন",
  "Supabase DB": "সুপাবেস ডিবি",
  "Admin Operator": "অ্যাডমিন অপারেটর",
  "Logout": "লগআউট",
  "Sign In": "লগইন করুন",
  "Sign Out": "লগআউট করুন",
  "Theme & Appearance": "থিম ও রূপরেখা",
  "Dark Mode": "ডার্ক মোড",
  "Light Mode": "লাইট মোড",
  "Dark Mode Active": "ডার্ক মোড সক্রিয়",
  "Light Mode Active": "লাইট মোড সক্রিয়",
  "Dark": "ডার্ক",
  "Light": "লাইট",
  "Theme": "থিম",

  // Universal Lookup & Top Bar
  "Universal Lookup": "সার্বজনীন অনুসন্ধান",
  "Universal Document Lookup": "সার্বজনীন নথি অনুসন্ধান",
  "Universal Document Search": "সার্বজনীন নথি অনুসন্ধান",
  "Search by Invoice (INV-...), Memo, Purchase...": "ইনভয়েস (INV-...), মেমো, বা ক্রয় নম্বর লিখুন...",
  "Search by Invoice No, Customer, Memo or Purchase": "ইনভয়েস নম্বর, গ্রাহক, মেমো বা ক্রয় দিয়ে খুঁজুন",
  "Search": "অনুসন্ধান",
  "Powered by Supabase PostgreSQL Database": "সুপাবেস পোস্টগ্রেসকিউএল ডেটাবেস দ্বারা চালিত",
  "Inventory & Retail Management (Supabase)": "ইনভেন্টরি ও রিটেল ম্যানেজমেন্ট (সুপাবেস)",

  // Dashboard KPI Cards
  "Today Sales": "আজকের বিক্রয়",
  "Today Purch.": "আজকের ক্রয়",
  "Today Profit": "আজকের লাভ",
  "Today Trans.": "আজকের লেনদেন",
  "Month Sales": "চলতি মাসের বিক্রয়",
  "Month Purch.": "চলতি মাসের ক্রয়",
  "Month Profit": "চলতি মাসের লাভ",
  "Month Trans.": "চলতি মাসের লেনদেন",
  "Sales vs Purchase Trend": "বিক্রয় বনাম ক্রয় ট্রেন্ড",
  "Category Sales": "ক্যাটাগরি অনুযায়ী বিক্রয়",
  "(This Month)": "(চলতি মাস)",
  "This Month": "চলতি মাস",
  "Last 7 Days": "বিগত ৭ দিন",
  "Last 30 Days": "বিগত ৩০ দিন",
  "Recent Transactions": "সাম্প্রতিক লেনদেনসমূহ",
  "Low Stock Alerts": "কম স্টক সতর্কতা",
  "Stock Alerts": "স্টক সতর্কতা",
  "Quick Actions": "দ্রুত কার্যক্রম",
  "New Sale (POS)": "নতুন বিক্রয় (পিওএস)",
  "Add Purchase": "নতুন ক্রয় যোগ করুন",
  "Stock": "মজুদ",
  "Order": "অর্ডার করুন",

  // POS / Sales
  "Point of Sale": "বিক্রয় কেন্দ্র (POS)",
  "Sales POS": "বিক্রয় পিওএস",
  "Quick Sale": "কুইক সেল",
  "Scan Barcode": "বারকোড স্ক্যান",
  "Barcode Scanner": "বারকোড স্ক্যানার",
  "New Sale": "নতুন বিক্রয়",
  "Customer Name": "গ্রাহকের নাম",
  "Walking Customer": "সাধারণ গ্রাহক (ওয়াকিং)",
  "Walk-in Customer": "সাধারণ গ্রাহক",
  "Select Customer": "গ্রাহক নির্বাচন করুন",
  "Phone Number": "ফোন নম্বর",
  "Search Product...": "পণ্য অনুসন্ধান করুন...",
  "Scan Barcode / SKU / Name": "বারকোড / এসকেইউ / নাম স্ক্যান বা লিখুন",
  "Cart Items": "কার্ট আইটেমসমূহ",
  "Product": "পণ্য",
  "Qty": "পরিমাণ",
  "Quantity": "পরিমাণ",
  "Price": "মূল্য",
  "Rate": "দর",
  "Unit Price": "একক মূল্য",
  "Total": "মোট",
  "Sub Total": "উপ-মোট",
  "Subtotal": "উপ-মোট",
  "Discount": "ছাড় / ডিসকাউন্ট",
  "Discount %": "ছাড় (%)",
  "VAT": "ভ্যাট",
  "VAT / Tax": "ভ্যাট / ট্যাক্স",
  "Tax": "ট্যাক্স",
  "Grand Total": "সর্বমোট টাকা",
  "Payable": "পরিশোধযোগ্য",
  "Paid Amount": "পরিশোধিত টাকা",
  "Paid": "পরিশোধিত",
  "Change": "ফেরত টাকা",
  "Change Due": "ফেরত টাকা",
  "Due Amount": "বাকি টাকা",
  "Due": "বাকি",
  "Payment Method": "পরিশোধ পদ্ধতি",
  "Cash": "নগদ (Cash)",
  "Card": "কার্ড",
  "Bkash": "বিকাশ (bKash)",
  "Nagad": "নগদ (Nagad)",
  "Rocket": "রকেট (Rocket)",
  "Bank": "ব্যাংক",
  "Bank Transfer": "ব্যাংক ট্রান্সফার",
  "Multiple": "একাধিক পদ্ধতি",
  "Complete Sale": "বিক্রয় সম্পন্ন করুন",
  "Process Sale": "বিক্রয় সম্পন্ন করুন",
  "Hold Sale": "হোল্ড করুন",
  "Clear Cart": "কার্ট খালি করুন",
  "Clear": "পরিষ্কার করুন",
  "Print Receipt": "রসিদ প্রিন্ট করুন",
  "Thermal 80mm": "থার্মাল ৮০ মিমি",
  "A4 Invoice": "এ৪ ইনভয়েস",
  "Print POS": "পিওএস প্রিন্ট",
  "ITEM & WAREHOUSE": "আইটেম ও ওয়্যারহাউস",
  "STK": "স্টক",
  "PRICE": "মূল্য",
  "FREE": "ফ্রি",
  "Checkout": "চেকআউট",
  "Payment Mode": "পরিশোধ পদ্ধতি",
  "Credit (Due)": "বাকি (Due)",
  "Top Selling SKUs (Quick Pickup)": "সর্বাধিক বিক্রিত পণ্য (দ্রুত পিকআপ)",
  "Top Selling SKUs": "সর্বাধিক বিক্রিত পণ্য",
  "Recent Sales History": "সাম্প্রতিক বিক্রির ইতিহাস",
  "⚡ Click any SKU to add to cart": "⚡ কার্টে যোগ করতে যেকোনো পণ্যে ক্লিক করুন",
  "Click any SKU to add to cart": "কার্টে যোগ করতে যেকোনো পণ্যে ক্লিক করুন",
  "Loading Top Selling SKUs...": "শীর্ষ বিক্রিত পণ্য লোড হচ্ছে...",
  "Type Product Name or Scan...": "পণ্যের নাম লিখুন বা স্ক্যান করুন...",
  "Memo No...": "মেমো নং...",
  "Customer Management": "গ্রাহক ব্যবস্থাপনা",
  "Client dues, contact books, and bulk payments": "গ্রাহকের বাকি, যোগাযোগ খাতা ও পরিশোধ",
  "Search customer...": "গ্রাহক খুঁজুন...",
  "Total Customers": "সর্বমোট গ্রাহক",
  "Total Outstanding Dues": "মোট বকেয়া পাওনা",
  "Inventory Stock Levels": "ইনভেন্টরি স্টক লেভেল",
  "Monitor real stock balance matrix across warehouses and manage stock transfers": "সকল ওয়্যারহাউসের বাস্তব স্টক পর্যবেক্ষণ ও স্থানান্তর",
  "Stock Balance Matrix": "স্টক ব্যালেন্স মেট্রিক্স",
  "Transfer Stock & History": "স্টক স্থানান্তর ও ইতিহাস",
  "Refresh Stock": "স্টক রিফ্রেশ",
  "Warehouse Value Share": "ওয়্যারহাউস মূল্য অংশীদারিত্ব",
  "Search name or ID...": "নাম বা আইডি দিয়ে খুঁজুন...",

  // Inventory & Products
  "Inventory Management": "ইনভেন্টরি ব্যবস্থাপনা",
  "Product Catalog": "পণ্য তালিকা",
  "All Products": "সকল পণ্য",
  "Add Product": "নতুন পণ্য যোগ করুন",
  "Add New Product": "নতুন পণ্য তৈরি করুন",
  "Edit Product": "পণ্য সম্পাদনা করুন",
  "Product Name": "পণ্যের নাম",
  "Item Code": "আইটেম কোড",
  "SKU": "এসকেইউ",
  "Barcode": "বারকোড",
  "Category": "ক্যাটাগরি",
  "Select Category": "ক্যাটাগরি নির্বাচন করুন",
  "Brand": "ব্র্যান্ড",
  "Select Brand": "ব্র্যান্ড নির্বাচন করুন",
  "Unit": "একক",
  "Select Unit": "একক নির্বাচন করুন",
  "Cost Price": "ক্রয় মূল্য",
  "Buy Price": "ক্রয় দর",
  "Sale Price": "বিক্রয় মূল্য",
  "Selling Price": "বিক্রয় মূল্য",
  "MRP": "সর্বোচ্চ খুচরা মূল্য",
  "Stock Qty": "মজুদ পরিমাণ",
  "Current Stock": "বর্তমান মজুদ",
  "Alert Qty": "সতর্কতা পরিমাণ",
  "Low Stock Level": "কম স্টক লেভেল",
  "Warehouse": "ওয়্যারহাউস",
  "Select Warehouse": "ওয়্যারহাউস নির্বাচন করুন",
  "All Warehouses": "সকল ওয়্যারহাউস",
  "Stock Value": "মজুদ মোট মূল্য",
  "Total Stock": "মোট মজুদ",
  "Description": "বিবরণ",
  "Item ID": "আইটেম আইডি",
  "Item": "আইটেম",
  "In Stock": "মজুদ আছে",
  "Out of Stock": "স্টক নেই",
  "Low": "কম",

  // Warehouse Info
  "Warehouse Directory": "ওয়্যারহাউস তালিকা",
  "Warehouse Name": "ওয়্যারহাউসের নাম",
  "Location": "অবস্থান / ঠিকানা",
  "Capacity": "ধারণক্ষমতা",
  "Contact Person": "যোগাযোগকারী ব্যক্তি",
  "Add Warehouse": "নতুন ওয়্যারহাউস যোগ করুন",
  "Edit Warehouse": "ওয়্যারহাউস সম্পাদনা",
  "Warehouse Stock": "ওয়্যারহাউস মজুদ",

  // Purchases & Stock In
  "Purchase Orders": "ক্রয় অর্ডারসমূহ",
  "Purchase History": "ক্রয়ের ইতিহাস",
  "New Purchase": "নতুন ক্রয়",
  "Supplier": "সরবরাহকারী",
  "Select Supplier": "সরবরাহকারী নির্বাচন করুন",
  "Purchase Date": "ক্রয়ের তারিখ",
  "Invoice / PO No": "ইনভয়েস / পিও নম্বর",
  "PO Number": "পিও নম্বর",
  "Batch No": "ব্যাচ নম্বর",
  "Batch / Lot": "ব্যাচ নম্বর",
  "Expire Date": "মেয়াদোত্তীর্ণ তারিখ",
  "Expiry Date": "মেয়াদ শেষের তারিখ",
  "Received Qty": "প্রাপ্ত পরিমাণ",
  "Submit Purchase": "ক্রয় সংরক্ষণ করুন",
  "Save Purchase": "ক্রয় সংরক্ষণ করুন",
  "Purchase Return": "ক্রয় ফেরত",

  // Returns
  "Return Items": "ফেরত আইটেম",
  "Sales Return": "বিক্রয় ফেরত",
  "Return Invoice": "ফেরত ইনভয়েস",
  "Original Invoice No": "মূল ইনভয়েস নম্বর",
  "Return Reason": "ফেরতের কারণ",
  "Refund Amount": "ফেরত টাকা",
  "Process Return": "ফেরত সম্পন্ন করুন",
  "Return Date": "ফেরতের তারিখ",

  // Customers & Suppliers
  "Customer Directory": "গ্রাহক তালিকা",
  "Supplier Directory": "সরবরাহকারী তালিকা",
  "Add Customer": "নতুন গ্রাহক যোগ করুন",
  "Add New Customer": "নতুন গ্রাহক তৈরি করুন",
  "Edit Customer": "গ্রাহক তথ্য সম্পাদনা",
  "Add Supplier": "নতুন সরবরাহকারী যোগ করুন",
  "Edit Supplier": "সরবরাহকারী সম্পাদনা",
  "Customer Type": "গ্রাহকের ধরন",
  "Retail": "খুচরা",
  "Wholesale": "পাইকারি",
  "Corporate": "কর্পোরেট",
  "Opening Balance": "প্রারম্ভিক ব্যালেন্স",
  "Credit Limit": "ক্রেডিট লিমিট",
  "Total Dues": "মোট বাকি",
  "Address": "ঠিকানা",
  "Email": "ইমেইল",
  "Contact Number": "মোবাইল নম্বর",
  "Company Name": "কোম্পানির নাম",

  // Deposits & Expenses (Cash Book)
  "Cash Book": "ক্যাশ বুক",
  "Cash Book / Expenses": "ক্যাশ বুক / খরচ ব্যবস্থাপনা",
  "Income / Expense": "আয় / ব্যয়",
  "Add Expense": "নতুন খরচ যোগ করুন",
  "Expense Category": "খরচের খাত",
  "Expense List": "খরচের তালিকা",
  "Cash In": "ক্যাশ ইন (জমা)",
  "Cash Out": "ক্যাশ আউট (খরচ)",
  "Payment Details": "পেমেন্ট বিবরণ",
  "Reference / Bill No": "রেফারেন্স / বিল নং",
  "Note": "মন্তব্য / বিবরণ",
  "Add Cash Transaction": "নতুন নগদ লেনদেন যোগ করুন",

  // Reports
  "Business Reports": "ব্যবসার রিপোর্ট ও বিশ্লেষণ",
  "Reports & Analytics": "রিপোর্ট ও অ্যানালিটিক্স",
  "Category & Brand Wise Sales Report": "ক্যাটাগরি ও ব্র্যান্ড ভিত্তিক বিক্রয় রিপোর্ট",
  "Sales Register (Detailed Invoices & Items)": "বিস্তারিত বিক্রয় রেজিস্টার (ইনভয়েস ও আইটেম ভিত্তিক)",
  "Daily Sales Summary Report": "দৈনিক বিক্রয় সারসংক্ষেপ রিপোর্ট",
  "Daily Sales Report": "দৈনিক বিক্রয় রিপোর্ট",
  "Monthly Sales Report": "মাসিক বিক্রয় রিপোর্ট",
  "Sales Summary": "বিক্রয় সারসংক্ষেপ",
  "Purchase Summary": "ক্রয় সারসংক্ষেপ",
  "Profit & Loss Report": "লাভ-ক্ষতির হিসাব",
  "Profit / Loss": "লাভ / ক্ষতি",
  "Net Profit": "নিট লাভ",
  "Gross Profit": "মোট লাভ",
  "Total Sales": "সর্বমোট বিক্রয়",
  "Total Purchases": "সর্বমোট ক্রয়",
  "Total Expenses": "সর্বমোট খরচ",
  "Stock Valuation": "মজুদ সম্পদের মূল্যায়ন",
  "Customer Due Report": "গ্রাহক বাকি রিপোর্ট",
  "Supplier Due Report": "সরবরাহকারী বাকি রিপোর্ট",
  "Date Range": "তারিখের ব্যাপ্তি",
  "From Date": "শুরুর তারিখ",
  "To Date": "শেষের তারিখ",
  "Filter": "ফিল্টার করুন",
  "Apply Filter": "ফিল্টার প্রয়োগ করুন",
  "Reset Filter": "ফিল্টার রিসেট",
  "Export": "এক্সপোর্ট",
  "Export CSV": "সিএসভি এক্সপোর্ট",
  "Export PDF": "পিডিএফ এক্সপোর্ট",
  "Export Excel": "এক্সেল এক্সপোর্ট",
  "Print Report": "রিপোর্ট প্রিন্ট করুন",

  // Settings & System
  "System Settings": "সিস্টেম সেটিংস",
  "Store Profile": "প্রতিষ্ঠানের পরিচিতি",
  "Store Name": "দোকান / প্রতিষ্ঠানের নাম",
  "Store Address": "প্রতিষ্ঠানের ঠিকানা",
  "Phone": "ফোন",
  "Currency": "মুদ্রা",
  "Currency Symbol": "মুদ্রার প্রতীক",
  "Tax / VAT %": "ট্যাক্স / ভ্যাট %",
  "Receipt Header Note": "রসিদ হেডার নোট",
  "Receipt Footer Note": "রসিদ ফুটার নোট",
  "Save Settings": "সেটিংস সংরক্ষণ করুন",
  "Backup & Restore": "ব্যাকআপ ও রিস্টোর",

  // Users & Permissions
  "User Management": "ব্যবহারকারী ব্যবস্থাপনা",
  "Add User": "নতুন ব্যবহারকারী যোগ করুন",
  "Edit User": "ব্যবহারকারী সম্পাদনা",
  "Full Name": "পূর্ণ নাম",
  "Username": "ইউজারনেম",
  "User ID": "ইউজার আইডি",
  "Password": "পাসওয়ার্ড",
  "Role": "ভূমিকা / পদবী",
  "Admin": "অ্যাডমিন (Admin)",
  "Manager": "ম্যানেজার (Manager)",
  "Salesperson": "বিক্রয়কর্মী (Salesperson)",
  "Cashier": "ক্যাশিয়ার (Cashier)",
  "Operator": "অপারেটর (Operator)",
  "Viewer": "দর্শক (Viewer)",
  "Status": "অবস্থা",
  "Active": "সক্রিয়",
  "Inactive": "নিষ্ক্রিয়",
  "Blocked": "স্থগিত",
  "Save User": "ব্যবহারকারী সংরক্ষণ করুন",

  // Common Table Headers & Actions
  "Action": "পদক্ষেপ",
  "Actions": "পদক্ষেপসমূহ",
  "Date": "তারিখ",
  "Time": "সময়",
  "SL": "ক্রমিক",
  "Serial": "ক্রমিক",
  "Invoice No": "ইনভয়েস নং",
  "Invoice": "ইনভয়েস",
  "Memo": "মেমো",
  "Memo No": "মেমো নং",
  "Edit": "সম্পাদনা",
  "Delete": "মুছে ফেলুন",
  "View": "দেখুন",
  "Details": "বিস্তারিত",
  "Print": "প্রিন্ট",
  "Download": "ডাউনলোড",
  "Save": "সংরক্ষণ করুন",
  "Cancel": "বাতিল",
  "Close": "বন্ধ করুন",
  "Confirm": "নিশ্চিত করুন",
  "Yes": "হ্যাঁ",
  "No": "না",
  "Yes, Delete": "হ্যাঁ, মুছে ফেলুন",
  "No, Cancel": "না, বাতিল",
  "OK": "ঠিক আছে",
  "Save Changes": "পরিবর্তন সংরক্ষণ করুন",
  "Update": "আপডেট করুন",
  "Refresh": "রিফ্রেশ করুন",

  // Statuses & Badges
  "Completed": "সম্পন্ন",
  "Pending": "অপেক্ষমাণ",
  "Partial": "আংশিক",
  "Unpaid": "অপরিশোধিত",
  "Returned": "ফেরতকৃত",
  "Success": "সফল",
  "Failed": "ব্যর্থ",
  "Error": "ত্রুটি",
  "Warning": "সতর্কতা",
  "Notice": "বিজ্ঞপ্তি",
  "Information": "তথ্য",

  // Modals & Messages
  "Are you sure you want to end your session?": "আপনি কি নিশ্চিত যে আপনি সেশন সমাপ্ত (লগআউট) করতে চান?",
  "Are you sure you want to delete this item?": "আপনি কি নিশ্চিত যে এই আইটেমটি মুছে ফেলতে চান?",
  "Are you sure?": "আপনি কি নিশ্চিত?",
  "This action cannot be undone.": "এই কাজটি আর ফিরিয়ে আনা যাবে না।",
  "Loading...": "লোড হচ্ছে...",
  "Please wait...": "অনুগ্রহ করে অপেক্ষা করুন...",
  "No records found": "কোন রেকর্ড পাওয়া যায়নি",
  "No data available": "কোন তথ্য পাওয়া যায়নি",
  "Search results": "অনুসন্ধানের ফলাফল",
  "Item ID Label": "আইটেম আইডি",
  "Name Label": "নাম",
  "Status Label": "অবস্থা",

  // Time & Dates
  "Today": "আজ",
  "Yesterday": "গতকাল",
  "Tomorrow": "আগামীকাল",
  "This Year": "চলতি বছর",
  "Days": "দিন",
  "Months": "মাস",
  "Years": "বছর",
  "January": "জানুয়ারি",
  "February": "ফেব্রুয়ারি",
  "March": "মার্চ",
  "April": "এপ্রিল",
  "May": "মে",
  "June": "জুন",
  "July": "জুলাই",
  "August": "আগস্ট",
  "September": "সেপ্টেম্বর",
  "October": "অক্টোবর",
  "November": "নভেম্বর",
  "December": "ডিসেম্বর"
};

// 2. Individual Word and Sub-phrase dictionary for composite phrases & sentences
export const WORD_DICTIONARY = {
  "dashboard": "ড্যাশবোর্ড",
  "warehouse": "ওয়্যারহাউস",
  "inventory": "ইনভেন্টরি",
  "products": "পণ্যসমূহ",
  "product": "পণ্য",
  "items": "আইটেমসমূহ",
  "item": "আইটেম",
  "sales": "বিক্রয়",
  "sale": "বিক্রয়",
  "pos": "পিওএস",
  "purchases": "ক্রয়সমূহ",
  "purchase": "ক্রয়",
  "returns": "ফেরত",
  "return": "ফেরত",
  "customers": "গ্রাহকবৃন্দ",
  "customer": "গ্রাহক",
  "suppliers": "সরবরাহকারীগণ",
  "supplier": "সরবরাহকারী",
  "reports": "রিপোর্ট",
  "report": "রিপোর্ট",
  "settings": "সেটিংস",
  "setting": "সেটিংস",
  "users": "ব্যবহারকারীগণ",
  "user": "ব্যবহারকারী",
  "roles": "ভূমিকা",
  "role": "ভূমিকা",
  "system": "সিস্টেম",
  "logout": "লগআউট",
  "login": "লগইন",
  "signin": "লগইন",
  "today": "আজকের",
  "month": "মাসিক",
  "year": "বার্ষিক",
  "profit": "লাভ",
  "loss": "ক্ষতি",
  "transactions": "লেনদেনসমূহ",
  "transaction": "লেনদেন",
  "trend": "ট্রেন্ড",
  "category": "ক্যাটাগরি",
  "categories": "ক্যাটাগরি সমূহ",
  "brand": "ব্র্যান্ড",
  "brands": "ব্র্যান্ড সমূহ",
  "unit": "একক",
  "units": "একক সমূহ",
  "barcode": "বারকোড",
  "price": "মূল্য",
  "cost": "খরচ / ক্রয় দর",
  "quantity": "পরিমাণ",
  "qty": "পরিমাণ",
  "stock": "মজুদ",
  "total": "মোট",
  "subtotal": "উপ-মোট",
  "discount": "ছাড়",
  "vat": "ভ্যাট",
  "tax": "ট্যাক্স",
  "paid": "পরিশোধিত",
  "due": "বাকি",
  "change": "ফেরত",
  "cash": "নগদ",
  "card": "কার্ড",
  "bank": "ব্যাংক",
  "transfer": "ট্রান্সফার",
  "method": "পদ্ধতি",
  "methods": "পদ্ধতি সমূহ",
  "invoice": "ইনভয়েস",
  "receipt": "রসিদ",
  "memo": "মেমো",
  "order": "অর্ডার",
  "orders": "অর্ডার সমূহ",
  "status": "অবস্থা",
  "active": "সক্রিয়",
  "inactive": "নিষ্ক্রিয়",
  "action": "পদক্ষেপ",
  "actions": "পদক্ষেপসমূহ",
  "add": "যোগ করুন",
  "new": "নতুন",
  "edit": "সম্পাদনা",
  "delete": "মুছে ফেলুন",
  "save": "সংরক্ষণ",
  "cancel": "বাতিল",
  "close": "বন্ধ",
  "print": "প্রিন্ট",
  "search": "অনুসন্ধান",
  "filter": "ফিল্টার",
  "export": "রপ্তানি",
  "import": "আমদানি",
  "view": "দেখুন",
  "details": "বিস্তারিত",
  "name": "নাম",
  "code": "কোড",
  "phone": "ফোন",
  "mobile": "মোবাইল",
  "email": "ইমেইল",
  "address": "ঠিকানা",
  "city": "শহর",
  "date": "তারিখ",
  "time": "সময়",
  "note": "মন্তব্য",
  "notes": "মন্তব্যসমূহ",
  "description": "বিবরণ",
  "overview": "সারসংক্ষেপ",
  "summary": "সারাংশ",
  "history": "ইতিহাস",
  "balance": "ব্যালেন্স",
  "amount": "টাকা",
  "value": "মূল্য",
  "pcs": "পিস",
  "pc": "পিস",
  "kg": "কেজি",
  "gm": "গ্রাম",
  "ltr": "লিটার",
  "box": "বক্স",
  "carton": "কার্টন",
  "packet": "প্যাকেট",
  "doz": "ডজন",
  "yes": "হ্যাঁ",
  "no": "না",
  "ok": "ঠিক আছে",
  "all": "সকল",
  "select": "নির্বাচন করুন",
  "choose": "বাছাই করুন",
  "enter": "লিখুন",
  "type": "ধরন",
  "complete": "সম্পন্ন",
  "hold": "হোল্ড",
  "clear": "পরিষ্কার",
  "notice": "বিজ্ঞপ্তি",
  "alert": "সতর্কতা",
  "warning": "সতর্কতা",
  "error": "ত্রুটি",
  "success": "সফল",
  "welcome": "স্বাগতম",
  "universal": "সার্বজনীন",
  "lookup": "অনুসন্ধান"
};

// 3. Pre-sorted array of phrase patterns (longest first) for high accuracy sentence replacement
const SORTED_PHRASES = Object.keys(EXACT_DICTIONARY).sort((a, b) => b.length - a.length);
const SORTED_WORDS = Object.keys(WORD_DICTIONARY).sort((a, b) => b.length - a.length);

// Bidirectional reverse dictionary (Bengali -> English)
export const REVERSE_DICTIONARY = {};
Object.entries(EXACT_DICTIONARY).forEach(([en, bn]) => {
  REVERSE_DICTIONARY[bn] = en;
});

// Current language state
let currentLanguage = typeof localStorage !== 'undefined' ? (localStorage.getItem('shoppilot_language') || 'en') : 'en';
let isObserverPaused = false;
let mutationObserver = null;

/**
 * Translate a single English text string into Bengali
 */
export function translateTextToBn(text) {
  if (!text || typeof text !== 'string') return text;
  const trimmed = text.trim();
  if (!trimmed) return text;

  // Direct exact phrase match
  if (EXACT_DICTIONARY[trimmed]) {
    return text.replace(trimmed, EXACT_DICTIONARY[trimmed]);
  }

  // Case-insensitive exact match
  const lowerTrimmed = trimmed.toLowerCase();
  for (const enKey of SORTED_PHRASES) {
    if (enKey.toLowerCase() === lowerTrimmed) {
      return text.replace(trimmed, EXACT_DICTIONARY[enKey]);
    }
  }

  // Sentence / sub-phrase replacement
  let translated = text;

  // Replace multi-word phrases first
  for (const phrase of SORTED_PHRASES) {
    if (phrase.includes(' ') && translated.includes(phrase)) {
      const bnPhrase = EXACT_DICTIONARY[phrase];
      translated = translated.split(phrase).join(bnPhrase);
    }
  }

  // Replace single words with word boundaries
  for (const word of SORTED_WORDS) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    if (regex.test(translated)) {
      translated = translated.replace(regex, (match) => {
        const bnWord = WORD_DICTIONARY[word.toLowerCase()] || EXACT_DICTIONARY[match];
        return bnWord || match;
      });
    }
  }

  return translated;
}

/**
 * Restore Bengali text back to original English
 */
export function translateTextToEn(text, originalEn) {
  if (originalEn) return originalEn;
  if (!text || typeof text !== 'string') return text;
  const trimmed = text.trim();
  if (REVERSE_DICTIONARY[trimmed]) {
    return text.replace(trimmed, REVERSE_DICTIONARY[trimmed]);
  }
  return text;
}

/**
 * Translate a DOM TextNode
 */
function translateNodeToBn(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.nodeValue;
    if (!text || !text.trim()) return;
    
    // Skip if inside script, style, or code elements
    const parent = node.parentElement;
    if (!parent) return;
    const tagName = parent.tagName ? parent.tagName.toUpperCase() : '';
    if (tagName === 'SCRIPT' || tagName === 'STYLE' || tagName === 'CODE' || tagName === 'PRE' || tagName === 'NOSCRIPT') {
      return;
    }

    // Skip if explicitly marked not to translate
    if (parent.hasAttribute && (parent.hasAttribute('data-no-translate') || parent.classList.contains('no-translate'))) {
      return;
    }

    // Save original English text
    if (!node.__origEnText) {
      node.__origEnText = text;
    }

    const translated = translateTextToBn(node.__origEnText);
    if (translated !== text) {
      node.nodeValue = translated;
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node;

    // Translate placeholder attribute
    if (el.hasAttribute('placeholder')) {
      const orig = el.getAttribute('data-en-placeholder') || el.getAttribute('placeholder');
      if (!el.hasAttribute('data-en-placeholder')) {
        el.setAttribute('data-en-placeholder', orig);
      }
      el.setAttribute('placeholder', translateTextToBn(orig));
    }

    // Translate title attribute
    if (el.hasAttribute('title')) {
      const orig = el.getAttribute('data-en-title') || el.getAttribute('title');
      if (!el.hasAttribute('data-en-title')) {
        el.setAttribute('data-en-title', orig);
      }
      el.setAttribute('title', translateTextToBn(orig));
    }

    // Translate button / submit input values
    if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit' || el.type === 'reset')) {
      const orig = el.getAttribute('data-en-val') || el.value;
      if (!el.hasAttribute('data-en-val')) {
        el.setAttribute('data-en-val', orig);
      }
      el.value = translateTextToBn(orig);
    }

    // Recursively walk child nodes
    const children = Array.from(el.childNodes);
    for (const child of children) {
      translateNodeToBn(child);
    }
  }
}

/**
 * Restore a DOM TextNode back to English
 */
function restoreNodeToEn(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.__origEnText !== undefined) {
      node.nodeValue = node.__origEnText;
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node;

    if (el.hasAttribute('data-en-placeholder')) {
      el.setAttribute('placeholder', el.getAttribute('data-en-placeholder'));
    }

    if (el.hasAttribute('data-en-title')) {
      el.setAttribute('title', el.getAttribute('data-en-title'));
    }

    if (el.hasAttribute('data-en-val')) {
      el.value = el.getAttribute('data-en-val');
    }

    const children = Array.from(el.childNodes);
    for (const child of children) {
      restoreNodeToEn(child);
    }
  }
}

/**
 * Translate the entire document tree to Bengali
 */
export function applyBengaliTranslations() {
  isObserverPaused = true;
  document.body.classList.add('lang-bn');
  document.body.classList.remove('lang-en');
  document.documentElement.lang = 'bn';

  translateNodeToBn(document.body);
  updateLanguageToggleButtons('bn');
  isObserverPaused = false;
}

/**
 * Restore the entire document tree to English
 */
export function applyEnglishTranslations() {
  isObserverPaused = true;
  document.body.classList.add('lang-en');
  document.body.classList.remove('lang-bn');
  document.documentElement.lang = 'en';

  restoreNodeToEn(document.body);
  updateLanguageToggleButtons('en');
  isObserverPaused = false;
}

/**
 * Update language toggle button text and visual state
 */
export function updateLanguageToggleButtons(lang) {
  const isBn = (lang === 'bn');
  
  // Update dashboard button
  const dashBtn = document.getElementById('btnLanguageToggle');
  const dashLabel = document.getElementById('langToggleLabel');
  if (dashBtn) {
    if (isBn) {
      dashBtn.style.background = 'linear-gradient(135deg, #4361ee, #3a56d4)';
      dashBtn.style.boxShadow = '0 4px 14px rgba(67, 97, 238, 0.35)';
      if (dashLabel) dashLabel.innerHTML = 'Switch to English <span style="font-size:0.75rem; opacity:0.85; margin-left:4px;">(EN)</span>';
      dashBtn.title = "Click to switch back to English";
    } else {
      dashBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
      dashBtn.style.boxShadow = '0 4px 14px rgba(16, 185, 129, 0.35)';
      if (dashLabel) dashLabel.innerHTML = 'বাংলায় দেখুন <span style="font-size:0.75rem; opacity:0.9; margin-left:4px;">(বাং)</span>';
      dashBtn.title = "Click to switch entire system to Bengali (বাংলা)";
    }
  }

  // Update secondary/sidebar buttons if present
  const sidebarBtns = document.querySelectorAll('.sync-lang-toggle');
  sidebarBtns.forEach(btn => {
    if (isBn) {
      btn.innerHTML = '<i class="fas fa-globe"></i> English';
    } else {
      btn.innerHTML = '<i class="fas fa-language"></i> বাংলা';
    }
  });
}

/**
 * Display a modern visual toast notice when switching language
 */
function showLanguageSwitchToast(lang) {
  const existingToast = document.getElementById('spLangSwitchToast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.id = 'spLangSwitchToast';
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 99999;
    padding: 12px 20px;
    background: #1e293b;
    color: #ffffff;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 12px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(20px);
    opacity: 0;
  `;

  if (lang === 'bn') {
    toast.innerHTML = `<i class="fas fa-check-circle" style="color: #10b981; font-size: 1.2rem;"></i> <span>ভাষা বাংলায় পরিবর্তন করা হয়েছে (সব শব্দ ও বাক্য রূপান্তরিত)</span>`;
  } else {
    toast.innerHTML = `<i class="fas fa-check-circle" style="color: #3b82f6; font-size: 1.2rem;"></i> <span>Language switched to English</span>`;
  }

  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 350);
  }, 2800);
}

/**
 * Toggle between English and Bengali
 */
export function toggleAppLanguage() {
  if (currentLanguage === 'en') {
    setAppLanguage('bn');
  } else {
    setAppLanguage('en');
  }
}

/**
 * Set active application language ('en' | 'bn')
 */
export function setAppLanguage(lang) {
  currentLanguage = (lang === 'bn') ? 'bn' : 'en';
  try {
    localStorage.setItem('shoppilot_language', currentLanguage);
  } catch (e) {}

  if (currentLanguage === 'bn') {
    applyBengaliTranslations();
  } else {
    applyEnglishTranslations();
  }

  showLanguageSwitchToast(currentLanguage);
}

/**
 * Get current application language
 */
export function getAppLanguage() {
  return currentLanguage;
}

/**
 * Initialize MutationObserver to translate any dynamically added content
 */
function initDynamicTranslationObserver() {
  if (mutationObserver) return;

  mutationObserver = new MutationObserver((mutations) => {
    if (isObserverPaused || currentLanguage !== 'bn') return;

    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const addedNode of mutation.addedNodes) {
          isObserverPaused = true;
          translateNodeToBn(addedNode);
          isObserverPaused = false;
        }
      } else if (mutation.type === 'characterData') {
        const node = mutation.target;
        if (node.nodeType === Node.TEXT_NODE) {
          if (!node.__origEnText) {
            node.__origEnText = node.nodeValue;
            const translated = translateTextToBn(node.__origEnText);
            if (translated !== node.nodeValue) {
              isObserverPaused = true;
              node.nodeValue = translated;
              isObserverPaused = false;
            }
          }
        }
      }
    }
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
}

/**
 * Initialize i18n system on startup
 */
export function initI18n() {
  // Expose methods globally for HTML onclick handlers
  window.toggleAppLanguage = toggleAppLanguage;
  window.setAppLanguage = setAppLanguage;
  window.getAppLanguage = getAppLanguage;
  window.translateTextToBn = translateTextToBn;

  // Initialize observer
  initDynamicTranslationObserver();

  // If saved language is Bengali, apply translations once DOM is ready
  if (currentLanguage === 'bn') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        applyBengaliTranslations();
      });
    } else {
      setTimeout(() => applyBengaliTranslations(), 50);
    }
  } else {
    updateLanguageToggleButtons('en');
  }
}
