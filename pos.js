// Data Models (No changes needed here)
const menuItems = [
    // --- KARAHI CATEGORY ---
    { id: 1, name: 'چکن کڑاہی فل', category: 'karahi', price: 1800 },
    { id: 2, name: 'چکن کڑاہی ہاف', category: 'karahi', price: 1000 },
    { id: 3, name: 'چکن کڑاہی کوارٹر', category: 'karahi', price: 600 },
    { id: 4, name: 'کڑاہی میکنگ', category: 'karahi', pricePerKg: 1500, customizable: true },
    { id: 5, name: 'چکن وائٹ فل', category: 'karahi', price: 1900 },
    { id: 6, name: 'چکن وائٹ ہاف', category: 'karahi', price: 1100 },
    { id: 7, name: 'چکن وائٹ کوارٹر', category: 'karahi', price: 650 },
    { id: 8, name: 'چکن شنواری', category: 'karahi', price: 1850 },
    { id: 9, name: 'چکن اچاری', category: 'karahi', price: 1850 },
    { id: 10, name: 'بیف کڑاہی فل', category: 'karahi', price: 2000 },
    { id: 11, name: 'بیف کڑاہی ہاف', category: 'karahi', price: 1200 },
    { id: 12, name: 'بیف کڑاہی کوارٹر', category: 'karahi', price: 700 },
    { id: 13, name: 'بیف وائٹ', category: 'karahi', price: 2100 },
    { id: 14, name: 'بیف بونلیس', category: 'karahi', price: 2200 },
    { id: 15, name: 'بیف اچاری', category: 'karahi', price: 2100 },
    { id: 16, name: 'مٹن کڑاہی فل', category: 'karahi', price: 2500 },
    { id: 17, name: 'مٹن کڑاہی ہاف', category: 'karahi', price: 1500 },
    { id: 18, name: 'مٹن کڑاہی کوارٹر', category: 'karahi', price: 900 },
    { id: 19, name: 'مٹن شنواری', category: 'karahi', price: 2600 },
    { id: 20, name: 'مٹن سلیمانی', category: 'karahi', price: 2600 },

    // --- BBQ CATEGORY ---
    { id: 21, name: 'تکہ سیخ', category: 'bbq', price: 180 },
    { id: 22, name: 'تکہ', category: 'bbq', pricePerKg: 900 },
    { id: 23, name: 'ملائی بوٹی سیخ', category: 'bbq', price: 200 },
    { id: 24, name: 'ملائی بوٹی', category: 'bbq', pricePerKg: 950 },
    { id: 25, name: 'کباب سیخ', category: 'bbq', price: 150 },
    { id: 26, name: 'کباب', category: 'bbq', pricePerKg: 850 },
    { id: 27, name: 'لیگ پیس', category: 'bbq', price: 300 },
    { id: 28, name: 'فش', category: 'bbq', pricePerKg: 1200 },

    // --- REGULAR CATEGORY ---
    { id: 29, name: 'دال چنا فل ڈیل', category: 'regular', price: 200 },
    { id: 30, name: 'دال چنا سنگل ڈیل', category: 'regular', price: 120 },
    { id: 31, name: 'ماش فل ڈیل', category: 'regular', price: 250 },
    { id: 32, name: 'ماش سنگل ڈیل', category: 'regular', price: 150 },
    { id: 33, name: 'مکس سبزی فل', category: 'regular', price: 180 },
    { id: 34, name: 'مکس سبزی سنگل', category: 'regular', price: 100 },
    { id: 35, name: 'چیکن قورمہ فل', category: 'regular', price: 350 },
    { id: 36, name: 'چکن قورمہ ہاف', category: 'regular', price: 200 },
    { id: 37, name: 'بیف قورمہ فل', category: 'regular', price: 400 },
    { id: 38, name: 'بیف قورمہ ہاف', category: 'regular', price: 250 },

    // --- OTHER CATEGORY ---
    { id: 39, name: 'مسالا', category: 'other', price: 50, customizable: true },
    { id: 40, name: 'پکوان', category: 'other', price: 100, customizable: true },
    { id: 47, name: 'بڑا رائتہ', category: 'other', price: 80 },
    { id: 48, name: 'چھوٹا رائتہ', category: 'other', price: 50 },
    { id: 49, name: 'چھوٹا سلاد', category: 'other', price: 60 },
    { id: 50, name: 'بڑا سلاد', category: 'other', price: 100 },
    { id: 51, name: 'چائے', category: 'other', price: 70 },

    // --- DRINKS CATEGORY ---
    { id: 41, name: 'کوک 1 لیٹر', category: 'drinks', price: 100 },
    { id: 42, name: 'کوک 1.5 لیٹر', category: 'drinks', price: 150 },
    { id: 43, name: 'کوک 0.5 لیٹر', category: 'drinks', price: 70 },
    { id: 44, name: 'کوک 2 لیٹر', category: 'drinks', price: 180 },
    { id: 45, name: 'کوک 2.25 لیٹر', category: 'drinks', price: 200 },
    { id: 46, name: 'پانی کی بوتل', category: 'drinks', price: 50 },
];

// DOM Elements (No changes needed here)
const DOMElements = {
    // Header Navigation
    navButtons: document.querySelectorAll('.nav-btn'),
    tablesBtn: document.getElementById('tables-btn'),
    itemsBtn: document.getElementById('items-btn'),
    ordersBtn: document.getElementById('orders-btn'),
    hamburgerBtn: document.getElementById('hamburger-btn'),
    closeMenuBtn: document.getElementById('close-menu-btn'),
    slideOutMenu: document.getElementById('slide-out-menu'),
    orderHistoryLink: document.getElementById('order-history-link'),
    dailyReportLink: document.getElementById('daily-report-link'),

    // Sections
    tablesSection: document.getElementById('tables-section'),
    itemsSection: document.getElementById('items-section'),
    ordersSection: document.getElementById('orders-section'),
    orderHistorySection: document.getElementById('order-history-section'),
    dailyReportSection: document.getElementById('daily-report-section'),

    // Tables Section
    tableButtons: document.querySelectorAll('.table-btn'),

    // Menu Items Section
    searchInput: document.getElementById('search-input'),
    categoryButtons: document.querySelectorAll('.category-btn'),
    menuItemsContainer: document.getElementById('menu-items-container'),

    // Order Details Section
    currentTableDisplay: document.getElementById('current-table-display'),
    orderItemsContainer: document.getElementById('order-items'),
    subtotalDisplay: document.getElementById('subtotal-display'),
    taxAmountInput: document.getElementById('tax-amount-input'),
    taxRateInput: document.getElementById('tax-rate-input'),
    discountAmountInput: document.getElementById('discount-amount-input'),
    discountPercentageInput: document.getElementById('discount-percentage-input'),
    totalDueDisplay: document.getElementById('total-due-display'),
    paymentAmountInput: document.getElementById('payment-amount-input'),
    paymentMethodSelect: document.getElementById('payment-method-select'),
    addPaymentBtn: document.getElementById('add-payment-btn'),
    paymentHistoryContainer: document.getElementById('payment-history'),
    totalReceivedDisplay: document.getElementById('total-received-display'),
    balanceSummaryDisplay: document.getElementById('balance-summary-display'),
    customerNameInput: document.getElementById('customer-name-input'),
    waiterNameInput: document.getElementById('waiter-name-input'),
    cashierNameInput: document.getElementById('cashier-name-input'),
    clearOrderBtn: document.getElementById('clear-order-btn'),
    saveOrderBtn: document.getElementById('save-order-btn'),
    printBillBtn: document.getElementById('print-bill-btn'),
    printText: document.getElementById('print-text'),
    printSpinner: document.getElementById('print-spinner'),
    closeOrderFinalBtn: document.getElementById('close-order-final-btn'),

    // Custom Price Modal
    customPriceModal: document.getElementById('custom-price-modal'),
    modalItemName: document.getElementById('modal-item-name'),
    customPriceInput: document.getElementById('custom-price-input'),
    customQuantityInput: document.getElementById('custom-quantity-input'),
    saveCustomBtn: document.getElementById('save-custom-btn'),
    cancelCustomBtn: document.getElementById('cancel-custom-btn'),
    closeModalBtn: document.querySelector('#custom-price-modal .close-button'),

    // Generic
    toast: document.getElementById('toast'),
    orderHistoryList: document.getElementById('order-history-list'),
    dailyReportContent: document.getElementById('daily-report-content')
};

// Application State (No changes needed here)
const appState = {
    currentOrder: [], // Items for the currently selected table
    currentTable: null, // Name of the currently selected table
    currentCategory: 'karahi', // Filter for menu items, defaulting to 'karahi'
    currentSection: localStorage.getItem('currentSection') || 'tables', // Current active section
    searchQuery: '', // Search query for menu items
    paymentHistory: [], // Payments for the currently selected table
    editingCustomItem: null, // Stores the item being customized { itemId, orderItemIndex, isNewItem }

    // Stored Data (Persisted in localStorage)
    savedOrders: JSON.parse(localStorage.getItem('savedOrders')) || {}, // All active orders
    completedOrders: JSON.parse(localStorage.getItem('completedOrders')) || [], // History of closed orders
    billNumber: parseInt(localStorage.getItem('billNumber')) || 1, // Next bill number
    lastTable: localStorage.getItem('lastTable') || null // Last active table
};

// --- Utility Functions ---

/**
 * Displays a toast notification.
 * @param {string} message - The message to display.
 * @param {number} duration - How long the toast should be visible in ms.
 */
function showToast(message, duration = 3000) {
    if (!DOMElements.toast) {
        console.error('Toast element not found.');
        return;
    }
    DOMElements.toast.textContent = message;
    DOMElements.toast.classList.add('show');
    setTimeout(() => DOMElements.toast.classList.remove('show'), duration);
}

/**
 * Formats a category string for display.
 * @param {string} category - The category string (e.g., 'karahi').
 * @returns {string} The formatted category name.
 */
function formatCategory(category) {
    const categoryNames = {
        'karahi': 'Karahi',
        'bbq': 'BBQ',
        'regular': 'Regular',
        'drinks': 'Drinks',
        'other': 'Other'
    };
    return categoryNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

/**
 * Formats a number for display, removing trailing .00 for integers.
 * @param {number} num - The number to format.
 * @returns {string} The formatted number string.
 */
function formatNumberForDisplay(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return '0';
    }
    // Check if it's a whole number, then display without decimals
    if (num % 1 === 0) {
        return String(num);
    }
    // Otherwise, display with two decimal places
    return num.toFixed(2);
}

/**
 * Saves the current order state to localStorage.
 */
function saveCurrentOrderState() {
    if (appState.currentTable) {
        appState.savedOrders[appState.currentTable] = {
            order: JSON.parse(JSON.stringify(appState.currentOrder)),
            payments: JSON.parse(JSON.stringify(appState.paymentHistory)),
            customer: DOMElements.customerNameInput.value,
            waiter: DOMElements.waiterNameInput.value,
            cashier: DOMElements.cashierNameInput.value
        };
        localStorage.setItem('savedOrders', JSON.stringify(appState.savedOrders));
    }
}

/**
 * Resets calculation input fields to default values.
 */
function resetCalculationInputs() {
    DOMElements.taxAmountInput.value = '0.00';
    DOMElements.taxRateInput.value = '0';
    DOMElements.discountAmountInput.value = '0.00';
    DOMElements.discountPercentageInput.value = '0';
    DOMElements.paymentAmountInput.value = '0.00';
    DOMElements.paymentMethodSelect.value = 'Cash'; // Corrected default value
}

/**
 * Updates the totals display based on order and payment data.
 */
function updateTotals() {
    const subtotal = appState.currentOrder.reduce((sum, item) => sum + item.totalPrice, 0);
    DOMElements.subtotalDisplay.textContent = `PKR ${subtotal.toFixed(2)}`;

    const taxRate = parseFloat(DOMElements.taxRateInput.value) || 0;
    const taxAmount = (subtotal * (taxRate / 100)); // Calculate based on rate
    if (DOMElements.taxAmountInput.value === '' || parseFloat(DOMElements.taxAmountInput.value) === 0) {
        DOMElements.taxAmountInput.value = taxAmount.toFixed(2);
    }
    const finalTaxAmount = parseFloat(DOMElements.taxAmountInput.value);

    const discountPercentage = parseFloat(DOMElements.discountPercentageInput.value) || 0;
    const discountAmount = (subtotal * (discountPercentage / 100)); // Calculate based on percentage
    if (DOMElements.discountAmountInput.value === '' || parseFloat(DOMElements.discountAmountInput.value) === 0) {
        DOMElements.discountAmountInput.value = discountAmount.toFixed(2);
    }
    const finalDiscountAmount = parseFloat(DOMElements.discountAmountInput.value);

    const totalDue = subtotal + finalTaxAmount - finalDiscountAmount;
    DOMElements.totalDueDisplay.textContent = `PKR ${totalDue.toFixed(2)}`;

    const totalReceived = appState.paymentHistory.reduce((sum, p) => sum + p.amount, 0);
    DOMElements.totalReceivedDisplay.textContent = `PKR ${totalReceived.toFixed(2)}`;

    const balance = totalDue - totalReceived;
    DOMElements.balanceSummaryDisplay.textContent = `Balance: PKR ${balance.toFixed(2)}`;
    DOMElements.balanceSummaryDisplay.classList.remove('positive', 'negative');
    DOMElements.balanceSummaryDisplay.classList.add(balance <= 0 ? 'positive' : 'negative'); // Corrected logic for positive/negative balance
}

// --- Section Management ---

/**
 * Activates a specific section and updates navigation buttons.
 * @param {string} sectionId - The ID of the section to show ('tables', 'items', 'orders', 'order-history', 'daily-report').
 */
function showSection(sectionId) {
    if (sectionId) {
        appState.currentSection = sectionId;
        localStorage.setItem('currentSection', sectionId);

        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        DOMElements.navButtons.forEach(btn => btn.classList.remove('active'));

        switch (sectionId) {
            case 'tables':
                DOMElements.tablesSection.classList.add('active');
                DOMElements.tablesBtn.classList.add('active');
                updateTableStatus(); // Ensure table status is updated when viewing tables
                break;
            case 'items':
                if (!appState.currentTable) {
                    showToast('Please select a table first.');
                    showSection('tables');
                    return;
                }
                DOMElements.itemsSection.classList.add('active');
                DOMElements.itemsBtn.classList.add('active');
                // Ensure the active category button is set
                const currentCategoryBtn = document.querySelector(`.category-btn[data-category="${appState.currentCategory}"]`);
                if (currentCategoryBtn) {
                    DOMElements.categoryButtons.forEach(btn => btn.classList.remove('active'));
                    currentCategoryBtn.classList.add('active');
                }
                renderMenuItems();
                renderOrder(); // Render order details alongside menu for easier access
                break;
            case 'orders':
                if (!appState.currentTable) {
                    showToast('Please select a table first.');
                    showSection('tables');
                    return;
                }
                DOMElements.ordersSection.classList.add('active');
                DOMElements.ordersBtn.classList.add('active');
                renderOrder();
                break;
            case 'order-history':
                DOMElements.orderHistorySection.classList.add('active');
                renderOrderHistory();
                break;
            case 'daily-report':
                DOMElements.dailyReportSection.classList.add('active');
                renderDailyReport();
                break;
            default:
                console.warn('Unknown section ID:', sectionId);
                showSection('tables');
        }
    }
    DOMElements.slideOutMenu.classList.remove('active');
}

// --- Table Management ---

/**
 * Updates the visual status (empty/occupied) of table buttons.
 */
function updateTableStatus() {
    DOMElements.tableButtons.forEach(button => {
        const table = button.dataset.table;
        const hasOrder = appState.savedOrders[table] && appState.savedOrders[table].order && appState.savedOrders[table].order.length > 0;
        button.classList.remove('empty', 'occupied', 'active');
        button.classList.add(hasOrder ? 'occupied' : 'empty');
        if (table === appState.currentTable) {
            button.classList.add('active');
        }
    });
}

/**
 * Selects a table and loads its saved order and payment data.
 * @param {string} tableName - The name of the table to select.
 */
function selectTable(tableName) {
    if (!tableName) {
        showToast('Invalid table selection.');
        console.error('selectTable called with invalid tableName:', tableName);
        return;
    }

    console.log(`Selecting table: ${tableName}`);

    // Update active state for table buttons
    DOMElements.tableButtons.forEach(btn => btn.classList.remove('active'));
    const selectedBtn = document.querySelector(`.table-btn[data-table="${tableName}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    } else {
        console.warn(`Table button not found for: ${tableName}`);
    }

    appState.currentTable = tableName;
    DOMElements.currentTableDisplay.textContent = `(${appState.currentTable})`;

    // Load or initialize order data for the selected table
    if (!appState.savedOrders[tableName]) {
        appState.savedOrders[tableName] = {
            order: [],
            payments: [],
            customer: '',
            waiter: '',
            cashier: ''
        };
    }

    appState.currentOrder = JSON.parse(JSON.stringify(appState.savedOrders[tableName].order));
    appState.paymentHistory = JSON.parse(JSON.stringify(appState.savedOrders[tableName].payments));

    DOMElements.customerNameInput.value = appState.savedOrders[tableName].customer || 'Walk-in';
    DOMElements.waiterNameInput.value = appState.savedOrders[tableName].waiter || 'Waiter';
    DOMElements.cashierNameInput.value = appState.savedOrders[tableName].cashier || 'POS System';

    resetCalculationInputs();
    localStorage.setItem('lastTable', appState.currentTable);
    renderOrder();
    showSection('items'); // Always go to items section after selecting table
    showToast(`Table ${appState.currentTable} selected. Add items.`);
}

/**
 * Helper function to handle table selection events.
 */
function selectTableHandler() {
    selectTable(this.dataset.table);
}

// --- Menu Item Rendering ---

/**
 * Renders menu items based on current category and search query.
 */
function renderMenuItems() {
    DOMElements.menuItemsContainer.innerHTML = '';

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = item.category === appState.currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(appState.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    console.log(`Rendering for category: ${appState.currentCategory}, search: "${appState.searchQuery}"`);
    console.log("Filtered Items:", filteredItems);

    if (filteredItems.length === 0) {
        DOMElements.menuItemsContainer.innerHTML = '<p class="empty-message">No items found for this category.</p>';
        return;
    }

    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.dataset.id = item.id;
        menuItemElement.dataset.category = item.category;

        let controlsHtml = '';
        let displayPriceHtml = '';

        if (item.customizable || item.hasOwnProperty('pricePerKg')) {
            menuItemElement.classList.add('customizable-item');
            if (item.customizable) {
                controlsHtml = `
                    <button class="add-btn custom-item-btn" data-id="${item.id}" data-type="custom">Customize & Add</button>
                `;
                // Use formatNumberForDisplay for base price
                displayPriceHtml = `PKR ${item.pricePerKg ? formatNumberForDisplay(item.pricePerKg) + '/KG' : formatNumberForDisplay(item.price)}`;
            } else if (item.hasOwnProperty('pricePerKg')) {
                controlsHtml = `
                    <div class="karahi-quantity-selector">
                        <select class="karahi-qty-preset" data-id="${item.id}">
                            <option value="0.25">0.25 KG</option>
                            <option value="0.5" selected>0.5 KG</option>
                            <option value="0.75">0.75 KG</option>
                            <option value="1">1 KG</option>
                            <option value="custom">Custom</option>
                        </select>
                    </div>
                    <button class="add-btn" data-id="${item.id}" data-type="perkg">Add</button>
                `;
                displayPriceHtml = `PKR ${formatNumberForDisplay(item.pricePerKg)}/KG`;
            }
        } else if (item.hasOwnProperty('price')) {
            controlsHtml = `
                <div class="quantity-controls">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="1" min="1" step="1" data-id="${item.id}">
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <button class="add-btn" data-id="${item.id}" data-type="quantity">Add</button>
            `;
            displayPriceHtml = `PKR ${formatNumberForDisplay(item.price)}`;
        } else {
            console.warn(`Item ${item.name} (ID: ${item.id}) is missing price information.`);
            controlsHtml = '<p>Price info missing</p>';
            displayPriceHtml = 'N/A';
        }

        menuItemElement.innerHTML = `
            <div class="item-name urdu-text">${item.name}</div>
            <div class="item-category">${formatCategory(item.category)}</div>
            <div class="item-price" data-id="${item.id}">
                ${displayPriceHtml}
            </div>
            <div class="item-controls">${controlsHtml}</div>
        `;

        // Add click handler to the entire menu item (excluding controls)
        menuItemElement.addEventListener('click', (e) => {
            if (e.target.closest('.item-controls')) return;
            
            const defaultPrice = item.price || item.pricePerKg || 0;
            const defaultQuantity = (item.hasOwnProperty('pricePerKg') || item.customizable) ? 0.5 : 1; // Default to 0.5 KG for perKg items, 1 for others
            // When clicking a menu item directly, it's a new item, so orderItemIndex is null
            showCustomPriceModal(item.id, null, defaultPrice, defaultQuantity);
        });

        DOMElements.menuItemsContainer.appendChild(menuItemElement);
    });

    addMenuItemEventListeners();
}

/**
 * Attaches all necessary event listeners to menu item controls after they are rendered.
 */
function addMenuItemEventListeners() {
    DOMElements.menuItemsContainer.querySelectorAll('.karahi-qty-preset').forEach(select => {
        select.removeEventListener('change', handleKarahiPresetChange);
        select.addEventListener('change', handleKarahiPresetChange);
    });
    DOMElements.menuItemsContainer.querySelectorAll('.quantity-btn').forEach(button => {
        button.removeEventListener('click', handleMenuItemQuantityChange);
        button.addEventListener('click', handleMenuItemQuantityChange);
    });
    DOMElements.menuItemsContainer.querySelectorAll('.add-btn').forEach(button => {
        button.removeEventListener('click', handleAddItemToOrder);
        button.addEventListener('click', handleAddItemToOrder);
    });
}

/**
 * Handles change event for Karahi/PerKg preset quantity select.
 */
function handleKarahiPresetChange(e) {
    const itemId = parseInt(e.currentTarget.dataset.id);
    const selectedValue = e.target.value;
    const itemDef = menuItems.find(mi => mi.id === itemId);

    if (!itemDef) return;

    if (selectedValue === 'custom') {
        showCustomPriceModal(itemId, null, itemDef.pricePerKg || 0, 1); // Pass null for orderItemIndex as it's a new addition
        e.target.value = "0.5"; // Reset dropdown
    } else {
        const itemPriceElement = DOMElements.menuItemsContainer.querySelector(`.item-price[data-id="${itemId}"]`);
        const calculatedPrice = itemDef.pricePerKg * parseFloat(selectedValue);
        itemPriceElement.textContent = `PKR ${formatNumberForDisplay(calculatedPrice)}`;
    }
}

/**
 * Handles quantity button clicks for non-karahi/non-perkg menu items.
 */
function handleMenuItemQuantityChange(e) {
    const itemId = parseInt(e.currentTarget.dataset.id);
    const quantityInput = e.currentTarget.closest('.quantity-controls').querySelector('.quantity-input');
    let quantity = parseInt(quantityInput.value) || 1;

    if (e.currentTarget.classList.contains('plus')) {
        quantity++;
    } else if (e.currentTarget.classList.contains('minus') && quantity > 1) {
        quantity--;
    }
    quantityInput.value = quantity;
}

/**
 * Adds an item to the current order.
 */
function handleAddItemToOrder(e) {
    if (!appState.currentTable) {
        showToast('Please select a table first.');
        showSection('tables');
        return;
    }

    const itemId = parseInt(e.currentTarget.dataset.id);
    const itemAddType = e.currentTarget.dataset.type;
    const menuItem = menuItems.find(item => item.id === itemId);

    if (!menuItem) {
        showToast('Menu item not found.');
        return;
    }

    if (itemAddType === 'custom') {
        // Default to 0.5 KG for customizable items if they have pricePerKg, otherwise 1
        const defaultQuantityForCustom = (menuItem.hasOwnProperty('pricePerKg') || menuItem.customizable) ? 0.5 : 1;
        showCustomPriceModal(itemId, null, menuItem.price || menuItem.pricePerKg || 0, defaultQuantityForCustom); // New custom item
        return;
    }

    let quantityToAdd = 1;
    let itemCalculatedPrice = 0;
    let unitType = '';
    let pricePerUnit = 0;

    if (itemAddType === 'perkg') {
        const presetSelect = e.currentTarget.closest('.menu-item').querySelector(`.karahi-qty-preset`);
        const presetValue = presetSelect ? presetSelect.value : '0.5';

        if (presetValue === 'custom') {
            showToast('Please use the "Customize & Add" button or select a preset quantity.');
            return;
        } else {
            quantityToAdd = parseFloat(presetValue);
        }
        pricePerUnit = menuItem.pricePerKg;
        itemCalculatedPrice = quantityToAdd * pricePerUnit;
        unitType = 'KG';
    } else {
        const quantityInput = e.currentTarget.closest('.menu-item').querySelector('.quantity-input');
        quantityToAdd = parseInt(quantityInput.value) || 1;
        pricePerUnit = menuItem.price;
        itemCalculatedPrice = quantityToAdd * pricePerUnit;
        unitType = 'Qty';
    }

    addItemToCurrentOrder(itemId, menuItem.name, menuItem.category, pricePerUnit, quantityToAdd, itemCalculatedPrice, unitType, false);
    showToast(`${menuItem.name} added to order`);
}

/**
 * Adds or updates an item in the current order.
 */
function addItemToCurrentOrder(id, name, category, pricePerUnit, quantity, totalPrice, unit, isCustom = false) {
    // For non-custom items, attempt to find an existing item to merge
    const existingItemIndex = appState.currentOrder.findIndex(item => 
        item.id === id && item.unit === unit && !item.isCustom // Only merge if existing item is NOT custom
    );

    if (existingItemIndex >= 0 && !isCustom) { // Only merge if not a newly added custom item
        appState.currentOrder[existingItemIndex].quantity = parseFloat((appState.currentOrder[existingItemIndex].quantity + quantity).toFixed(2));
        appState.currentOrder[existingItemIndex].totalPrice = parseFloat((appState.currentOrder[existingItemIndex].totalPrice + totalPrice).toFixed(2));
    } else {
        appState.currentOrder.push({
            id: id,
            name: name,
            category: category,
            pricePerUnit: pricePerUnit,
            quantity: quantity,
            totalPrice: totalPrice,
            unit: unit,
            isCustom: isCustom // Mark as custom if it was added via the customization modal
        });
    }

    saveCurrentOrderState();
    renderOrder();
}

// --- Custom Price/Quantity Modal Functions ---

/**
 * Displays the custom price/quantity modal.
 * @param {number} itemId - The ID of the menu item.
 * @param {number|null} orderItemIndex - The index of the item in currentOrder if editing an existing item, otherwise null.
 * @param {number} defaultPrice - The default price to show.
 * @param {number} defaultQuantity - The default quantity to show.
 */
function showCustomPriceModal(itemId, orderItemIndex, defaultPrice, defaultQuantity) {
    const itemDef = menuItems.find(item => item.id === itemId);
    if (!itemDef) {
        showToast('Error: Item not found for customization.');
        return;
    }

    DOMElements.modalItemName.textContent = itemDef.name;
    
    // If editing an existing item, populate with its current values
    if (orderItemIndex !== null && appState.currentOrder[orderItemIndex]) {
        const existingItem = appState.currentOrder[orderItemIndex];
        DOMElements.customPriceInput.value = formatNumberForDisplay(existingItem.pricePerUnit);
        DOMElements.customQuantityInput.value = formatNumberForDisplay(existingItem.quantity);
    } else {
        DOMElements.customPriceInput.value = formatNumberForDisplay(defaultPrice);
        DOMElements.customQuantityInput.value = formatNumberForDisplay(defaultQuantity);
    }

    // Determine if it's a KG-based item (can have decimals) or a regular quantity item (integers)
    const isPerKgOrCustomizable = itemDef.hasOwnProperty('pricePerKg') || itemDef.customizable;

    // Adjust quantity input step based on item type
    if (isPerKgOrCustomizable) {
        DOMElements.customQuantityInput.step = '0.01'; // Allows decimals for KG
        DOMElements.customQuantityInput.placeholder = 'Enter KG (e.g., 0.5, 1.25)';
    } else {
        DOMElements.customQuantityInput.step = '1'; // Only integers for quantity
        DOMElements.customQuantityInput.placeholder = 'Enter quantity (e.g., 1, 2)';
    }
    
    // Always keep price input with decimals for flexibility
    DOMElements.customPriceInput.step = '0.01'; 
    DOMElements.customPriceInput.placeholder = 'Enter price (e.g., 1500 or 150.50)';

    appState.editingCustomItem = { 
        itemId: itemId, 
        orderItemIndex: orderItemIndex, // Store index for editing existing items
        isPerKg: isPerKgOrCustomizable // Store this flag for logic in handleSaveCustomItem
    };
    DOMElements.customPriceModal.classList.add('active');

    // Auto-select quantity input content and focus it when modal opens
    DOMElements.customQuantityInput.focus();
    DOMElements.customQuantityInput.select();
}

/**
 * Hides the custom price/quantity modal.
 */
function closeCustomPriceModal() {
    DOMElements.customPriceModal.classList.remove('active');
    appState.editingCustomItem = null;
}

/**
 * Handles saving custom price/quantity from the modal.
 */
function handleSaveCustomItem() {
    const itemId = appState.editingCustomItem ? appState.editingCustomItem.itemId : null;
    const orderItemIndex = appState.editingCustomItem ? appState.editingCustomItem.orderItemIndex : null;
    const isPerKgContext = appState.editingCustomItem ? appState.editingCustomItem.isPerKg : false;

    if (!itemId) {
        showToast('Error: No item selected for customization.');
        return;
    }

    const customPrice = parseFloat(DOMElements.customPriceInput.value);
    let customQuantity = parseFloat(DOMElements.customQuantityInput.value);

    if (isNaN(customPrice) || customPrice < 0) {
        showToast('Please enter a valid custom price.');
        return;
    }
    if (isNaN(customQuantity) || customQuantity <= 0) {
        showToast('Please enter a valid custom quantity.');
        return;
    }

    const itemDef = menuItems.find(item => item.id === itemId);
    if (!itemDef) {
        showToast('Error: Item definition not found.');
        return;
    }

    const unitType = isPerKgContext ? 'KG' : 'Qty';
    const totalPrice = customPrice * customQuantity;

    if (orderItemIndex !== null) {
        // Editing an existing item in the order
        appState.currentOrder[orderItemIndex].pricePerUnit = customPrice;
        appState.currentOrder[orderItemIndex].quantity = customQuantity;
        appState.currentOrder[orderItemIndex].totalPrice = totalPrice;
        appState.currentOrder[orderItemIndex].unit = unitType;
        appState.currentOrder[orderItemIndex].isCustom = true; // Mark as custom if modified
        showToast(`${itemDef.name} updated with custom price/quantity.`);
    } else {
        // Adding a new custom item to the order
        addItemToCurrentOrder(itemId, itemDef.name, itemDef.category, customPrice, customQuantity, totalPrice, unitType, true);
        showToast(`${itemDef.name} added with custom price/quantity.`);
    }
    
    closeCustomPriceModal();
}

// --- Order Details Rendering and Logic ---

/**
 * Renders the current order items in the order details section.
 */
function renderOrder() {
    DOMElements.orderItemsContainer.innerHTML = '';

    if (appState.currentOrder.length === 0) {
        DOMElements.orderItemsContainer.innerHTML = '<p class="empty-message">No items added.</p>';
    } else {
        appState.currentOrder.forEach((item, index) => {
            const orderItemElement = document.createElement('div');
            orderItemElement.className = 'order-item';
            orderItemElement.dataset.index = index;
            
            // Format quantity display
            const formattedQuantity = item.unit === 'KG' ? `${formatNumberForDisplay(item.quantity)} KG` : formatNumberForDisplay(item.quantity);

            orderItemElement.innerHTML = `
                <div class="order-item-name urdu-text" data-index="${index}">${item.name} ${item.isCustom ? '(Custom)' : ''}</div>
                <div class="order-item-qty">
                    <button class="qty-btn minus" data-index="${index}" data-unit="${item.unit}">-</button>
                    ${formattedQuantity}
                    <button class="qty-btn plus" data-index="${index}" data-unit="${item.unit}">+</button>
                </div>
                <div class="order-item-price">PKR ${item.totalPrice.toFixed(2)}</div>
            `;
            DOMElements.orderItemsContainer.appendChild(orderItemElement);
        });

        // Add event listeners for item name clicks to open modal
        DOMElements.orderItemsContainer.querySelectorAll('.order-item-name').forEach(nameElement => {
            nameElement.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                if (appState.currentOrder[index]) {
                    const item = appState.currentOrder[index];
                    showCustomPriceModal(item.id, index, item.pricePerUnit, item.quantity);
                }
            });
        });

        const addMoreBtn = document.createElement('button');
        addMoreBtn.className = 'btn secondary';
        addMoreBtn.id = 'add-more-btn';
        addMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Add More Items';
        DOMElements.orderItemsContainer.appendChild(addMoreBtn);
        addMoreBtn.addEventListener('click', () => showSection('items'));

        DOMElements.orderItemsContainer.querySelectorAll('.qty-btn').forEach(button => {
            button.removeEventListener('click', handleOrderItemQuantityChange);
            button.addEventListener('click', handleOrderItemQuantityChange);
        });
    }

    renderPaymentHistory();
    updateTotals();
    saveCurrentOrderState(); // Save state after rendering order
}

/**
 * Handles quantity changes for items within the order details.
 */
function handleOrderItemQuantityChange(e) {
    const itemIndex = parseInt(e.currentTarget.dataset.index);
    const isMinus = e.currentTarget.classList.contains('minus');
    const unitType = e.currentTarget.dataset.unit;

    if (itemIndex >= 0 && itemIndex < appState.currentOrder.length) {
        const itemInOrder = appState.currentOrder[itemIndex];
        
        let effectivePricePerUnit;
        if (itemInOrder.isCustom) {
            effectivePricePerUnit = itemInOrder.pricePerUnit;
        } else {
            const menuItemDef = menuItems.find(mi => mi.id === itemInOrder.id);
            effectivePricePerUnit = menuItemDef ? (menuItemDef.pricePerKg || menuItemDef.price) : itemInOrder.pricePerUnit; // Fallback
        }

        if (isMinus) {
            if (unitType === 'KG') {
                itemInOrder.quantity = parseFloat((itemInOrder.quantity - 0.25).toFixed(2));
                if (itemInOrder.quantity < 0.01) { // Remove if quantity becomes negligible
                    appState.currentOrder.splice(itemIndex, 1);
                    showToast('Item removed from order');
                } else {
                    showToast('Quantity decreased');
                }
            } else { // For 'Qty'
                itemInOrder.quantity--;
                if (itemInOrder.quantity < 1) {
                    appState.currentOrder.splice(itemIndex, 1);
                    showToast('Item removed from order');
                } else {
                    showToast('Quantity decreased');
                }
            }
        } else { // Plus button
            if (unitType === 'KG') {
                itemInOrder.quantity = parseFloat((itemInOrder.quantity + 0.25).toFixed(2));
            } else { // For 'Qty'
                itemInOrder.quantity++;
            }
            showToast('Quantity increased');
        }

        // Recalculate total price for the item
        itemInOrder.totalPrice = parseFloat((itemInOrder.quantity * effectivePricePerUnit).toFixed(2));

        renderOrder(); // Re-render to reflect changes and update totals
    }
}

/**
 * Renders the payment history for the current order.
 */
function renderPaymentHistory() {
    DOMElements.paymentHistoryContainer.innerHTML = '';

    if (appState.paymentHistory.length === 0) {
        DOMElements.paymentHistoryContainer.innerHTML = '<p class="empty-message">No payments added yet.</p>';
    } else {
        appState.paymentHistory.forEach((p, index) => {
            const paymentEntry = document.createElement('div');
            paymentEntry.className = 'payment-entry';
            paymentEntry.innerHTML = `
                <span>${p.method}: PKR ${p.amount.toFixed(2)}</span>
                <button class="remove-payment-btn" data-index="${index}"><i class="fas fa-times"></i></button>
            `;
            DOMElements.paymentHistoryContainer.appendChild(paymentEntry);
        });

        DOMElements.paymentHistoryContainer.querySelectorAll('.remove-payment-btn').forEach(button => {
            button.removeEventListener('click', handleRemovePayment);
            button.addEventListener('click', handleRemovePayment);
        });
    }
}

/**
 * Handles adding a payment to the current order.
 */
function handleAddPayment() {
    const amount = parseFloat(DOMElements.paymentAmountInput.value);
    const method = DOMElements.paymentMethodSelect.value;

    if (isNaN(amount) || amount <= 0) {
        showToast('Please enter a valid payment amount.');
        return;
    }

    appState.paymentHistory.push({ amount: amount, method: method });
    DOMElements.paymentAmountInput.value = '0.00';
    saveCurrentOrderState();
    renderPaymentHistory();
    updateTotals();
    showToast(`Payment of PKR ${amount.toFixed(2)} (${method}) added.`);
}

/**
 * Handles removing a payment from the current order.
 */
function handleRemovePayment(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    if (index >= 0 && index < appState.paymentHistory.length) {
        appState.paymentHistory.splice(index, 1);
        saveCurrentOrderState();
        renderPaymentHistory();
        updateTotals();
        showToast('Payment removed.');
    }
}

/**
 * Clears the current order and resets the table.
 */
function handleClearOrder() {
    if (appState.currentTable && confirm('Are you sure you want to clear this order? This cannot be undone.')) {
        appState.currentOrder = [];
        appState.paymentHistory = [];
        // Reset metadata fields to default placeholders
        DOMElements.customerNameInput.value = 'Walk-in';
        DOMElements.waiterNameInput.value = 'Waiter';
        DOMElements.cashierNameInput.value = 'POS System';
        
        saveCurrentOrderState(); // Save the cleared state
        renderOrder(); // Re-render with no items
        showToast('Order cleared for current table.');
    } else if (!appState.currentTable) {
        showToast('No table selected to clear an order.');
    }
}

/**
 * Saves the current order and updates the state.
 */
function handleSaveOrder() {
    if (appState.currentTable) {
        saveCurrentOrderState();
        showToast('Order saved successfully.');
    } else {
        showToast('No table selected to save an order.');
    }
}

/**
 * Generates a printable bill and simulates printing.
 */
function handlePrintBill() {
    if (!appState.currentTable || appState.currentOrder.length === 0) {
        showToast('No order to print.');
        return;
    }

    DOMElements.printSpinner.style.display = 'inline-block';
    DOMElements.printText.style.display = 'none';

    const subtotal = appState.currentOrder.reduce((sum, item) => sum + item.totalPrice, 0);
    const taxAmount = parseFloat(DOMElements.taxAmountInput.value) || 0;
    const discountAmount = parseFloat(DOMElements.discountAmountInput.value) || 0;
    const totalDue = subtotal + taxAmount - discountAmount;
    const totalReceived = appState.paymentHistory.reduce((sum, p) => sum + p.amount, 0);
    const balance = totalDue - totalReceived;

    const billContent = `
        AL-MADINA SHINWARI POS
        ------------------------------------
        Bill #: ${appState.billNumber}
        Table: ${appState.currentTable}
        Date: ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}
        Customer: ${DOMElements.customerNameInput.value || 'Walk-in'}
        Waiter: ${DOMElements.waiterNameInput.value || 'Waiter'}
        Cashier: ${DOMElements.cashierNameInput.value || 'POS System'}
        ------------------------------------
        Items:
        ${appState.currentOrder.map(item => `${item.name} (${item.unit === 'KG' ? formatNumberForDisplay(item.quantity) + ' KG' : formatNumberForDisplay(item.quantity)}) @ PKR ${item.pricePerUnit.toFixed(2)} = PKR ${item.totalPrice.toFixed(2)}`).join('\n')}
        ------------------------------------
        Subtotal: PKR ${subtotal.toFixed(2)}
        Tax: PKR ${taxAmount.toFixed(2)}
        Discount: PKR ${discountAmount.toFixed(2)}
        ------------------------------------
        Total Due: PKR ${totalDue.toFixed(2)}
        Total Received: PKR ${totalReceived.toFixed(2)}
        Balance: PKR ${balance.toFixed(2)}
        ------------------------------------
        Payments:
        ${appState.paymentHistory.length > 0 ? appState.paymentHistory.map(p => `${p.method}: PKR ${p.amount.toFixed(2)}`).join('\n') : 'No payments recorded'}
        ------------------------------------
        Thank you for your visit!
    `;

    // In a real application, this would send data to a printer API.
    // For this simulation, we'll log to console and alert.
    console.log('--- PRINT BILL ---');
    console.log(billContent);
    alert('Bill generated! Check your browser console for bill content. (In a real app, this would print.)');

    DOMElements.printSpinner.style.display = 'none';
    DOMElements.printText.style.display = 'block';
    showToast('Bill generated and ready to print.');

    // Increment bill number only upon successful "printing"
    appState.billNumber++;
    localStorage.setItem('billNumber', appState.billNumber);
}

/**
 * Closes the current order and moves it to completed orders.
 */
function handleCloseOrderFinal() {
    if (!appState.currentTable) {
        showToast('No table selected to close an order.');
        return;
    }
    if (appState.currentOrder.length === 0) {
        showToast('No items in the order to close.');
        return;
    }

    const totalDue = parseFloat(DOMElements.totalDueDisplay.textContent.replace('PKR ', ''));
    const totalReceived = appState.paymentHistory.reduce((sum, p) => sum + p.amount, 0);
    const balance = totalDue - totalReceived;

    if (balance > 0 && !confirm(`Order has an outstanding balance of PKR ${balance.toFixed(2)}. Do you want to close it anyway?`)) {
        return;
    }

    const completedOrder = {
        billNumber: appState.billNumber, // Use the current bill number
        table: appState.currentTable,
        order: JSON.parse(JSON.stringify(appState.currentOrder)),
        payments: JSON.parse(JSON.stringify(appState.paymentHistory)),
        customer: DOMElements.customerNameInput.value || 'Walk-in',
        waiter: DOMElements.waiterNameInput.value || 'Waiter',
        cashier: DOMElements.cashierNameInput.value || 'POS System',
        timestamp: new Date().toISOString(),
        subtotal: parseFloat(DOMElements.subtotalDisplay.textContent.replace('PKR ', '')),
        tax: parseFloat(DOMElements.taxAmountInput.value),
        discount: parseFloat(DOMElements.discountAmountInput.value),
        totalDue: totalDue,
        totalReceived: totalReceived,
        balance: balance
    };

    appState.completedOrders.push(completedOrder);
    delete appState.savedOrders[appState.currentTable]; // Remove from active orders
    
    // Clear current order data
    appState.currentOrder = [];
    appState.paymentHistory = [];
    
    // Reset inputs
    DOMElements.customerNameInput.value = 'Walk-in';
    DOMElements.waiterNameInput.value = 'Waiter';
    DOMElements.cashierNameInput.value = 'POS System';
    resetCalculationInputs();

    localStorage.setItem('savedOrders', JSON.stringify(appState.savedOrders));
    localStorage.setItem('completedOrders', JSON.stringify(appState.completedOrders));
    
    // Increment bill number for the next order
    appState.billNumber++;
    localStorage.setItem('billNumber', appState.billNumber);

    // Update UI
    updateTableStatus(); // Mark the table as empty
    appState.currentTable = null; // Deselect table
    DOMElements.currentTableDisplay.textContent = '(None)';
    renderOrder(); // Clear the order display
    showSection('tables'); // Go back to tables view
    showToast(`Order ${completedOrder.billNumber} for ${completedOrder.table} closed and saved.`);
}

// --- Order History and Daily Report ---

/**
 * Renders the order history section.
 */
function renderOrderHistory() {
    DOMElements.orderHistoryList.innerHTML = '';
    if (appState.completedOrders.length === 0) {
        DOMElements.orderHistoryList.innerHTML = '<p class="empty-message">No completed orders yet.</p>';
        return;
    }
    // Sort orders by timestamp descending (most recent first)
    const sortedOrders = [...appState.completedOrders].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    sortedOrders.forEach(order => {
        const orderEntry = document.createElement('div');
        orderEntry.className = 'order-history-entry';
        orderEntry.innerHTML = `
            <div class="order-history-header">
                <span><strong>Bill #: ${order.billNumber}</strong> - ${order.table}</span>
                <span>${new Date(order.timestamp).toLocaleString('en-PK', { dateStyle: 'short', timeStyle: 'short', timeZone: 'Asia/Karachi' })}</span>
            </div>
            <div class="order-history-items-list">
                ${order.order.map(item => `<div class="order-history-item"><span>${item.name} (${item.unit === 'KG' ? formatNumberForDisplay(item.quantity) + ' KG' : formatNumberForDisplay(item.quantity)})</span><span>PKR ${item.totalPrice.toFixed(2)}</span></div>`).join('')}
            </div>
            <div class="order-history-totals">
                <strong>Total: PKR ${order.totalDue.toFixed(2)}</strong> | Paid: PKR ${order.totalReceived.toFixed(2)} | Balance: PKR ${order.balance.toFixed(2)}
            </div>
        `;
        DOMElements.orderHistoryList.appendChild(orderEntry);
    });
}

/**
 * Renders the daily report section.
 */
function renderDailyReport() {
    DOMElements.dailyReportContent.innerHTML = '';
    const today = new Date().toISOString().split('T')[0];
    const todayOrders = appState.completedOrders.filter(order => order.timestamp.startsWith(today));

    if (todayOrders.length === 0) {
        DOMElements.dailyReportContent.innerHTML = '<p class="empty-message">No orders for today yet.</p>';
        return;
    }

    const totalRevenue = todayOrders.reduce((sum, order) => sum + order.totalReceived, 0);
    const totalDue = todayOrders.reduce((sum, order) => sum + order.totalDue, 0);
    const totalBalance = todayOrders.reduce((sum, order) => sum + order.balance, 0);
    const totalTaxCollected = todayOrders.reduce((sum, order) => sum + order.tax, 0);
    const totalDiscountGiven = todayOrders.reduce((sum, order) => sum + order.discount, 0);

    // Aggregate sales by category
    const salesByCategory = {};
    todayOrders.forEach(order => {
        order.order.forEach(item => {
            salesByCategory[item.category] = (salesByCategory[item.category] || 0) + item.totalPrice;
        });
    });

    // Aggregate sales by payment method
    const salesByPaymentMethod = {};
    todayOrders.forEach(order => {
        order.payments.forEach(payment => {
            salesByPaymentMethod[payment.method] = (salesByPaymentMethod[payment.method] || 0) + payment.amount;
        });
    });

    let categorySalesHtml = Object.entries(salesByCategory).map(([category, amount]) => 
        `<p>${formatCategory(category)} Sales: PKR ${amount.toFixed(2)}</p>`
    ).join('');

    let paymentMethodSalesHtml = Object.entries(salesByPaymentMethod).map(([method, amount]) => 
        `<p>${method} Payments: PKR ${amount.toFixed(2)}</p>`
    ).join('');

    DOMElements.dailyReportContent.innerHTML = `
        <h3>Daily Report - ${new Date().toLocaleDateString('en-PK', { timeZone: 'Asia/Karachi' })}</h3>
        <p>Total Orders: <strong>${todayOrders.length}</strong></p>
        <p>Gross Sales (Total Due): <strong>PKR ${totalDue.toFixed(2)}</strong></p>
        <p>Total Revenue (Received): <strong>PKR ${totalRevenue.toFixed(2)}</strong></p>
        <p>Outstanding Balance: <strong class="${totalBalance > 0 ? 'negative' : 'positive'}">PKR ${totalBalance.toFixed(2)}</strong></p>
        <p>Total Tax Collected: PKR ${totalTaxCollected.toFixed(2)}</p>
        <p>Total Discount Given: PKR ${totalDiscountGiven.toFixed(2)}</p>
        
        <h4>Sales by Category:</h4>
        ${categorySalesHtml || '<p>No category sales recorded today.</p>'}

        <h4>Payments by Method:</h4>
        ${paymentMethodSalesHtml || '<p>No payments recorded today.</p>'}
    `;
}

// --- Event Listeners ---

// Navigation
DOMElements.navButtons.forEach(button => button.addEventListener('click', () => showSection(button.id.replace('-btn', ''))));
DOMElements.hamburgerBtn.addEventListener('click', () => DOMElements.slideOutMenu.classList.add('active'));
DOMElements.closeMenuBtn.addEventListener('click', () => DOMElements.slideOutMenu.classList.remove('active'));
DOMElements.orderHistoryLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    showSection('order-history');
});
DOMElements.dailyReportLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    showSection('daily-report');
});

// Table Selection
DOMElements.tableButtons.forEach(button => button.addEventListener('click', selectTableHandler));

// Menu Filters
DOMElements.searchInput.addEventListener('input', (e) => {
    appState.searchQuery = e.target.value;
    renderMenuItems();
});
DOMElements.categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        appState.currentCategory = button.dataset.category;
        DOMElements.categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderMenuItems();
    });
});

// Order Management
DOMElements.addPaymentBtn.addEventListener('click', handleAddPayment);
DOMElements.clearOrderBtn.addEventListener('click', handleClearOrder);
DOMElements.saveOrderBtn.addEventListener('click', handleSaveOrder);
DOMElements.printBillBtn.addEventListener('click', handlePrintBill);
DOMElements.closeOrderFinalBtn.addEventListener('click', handleCloseOrderFinal);

// Custom Modal
DOMElements.saveCustomBtn.addEventListener('click', handleSaveCustomItem);
DOMElements.cancelCustomBtn.addEventListener('click', closeCustomPriceModal);
DOMElements.closeModalBtn.addEventListener('click', closeCustomPriceModal);

// Add event listeners for auto-select on focus for custom price modal inputs
DOMElements.customPriceInput.addEventListener('focus', (e) => e.target.select());
DOMElements.customQuantityInput.addEventListener('focus', (e) => e.target.select());

// Input Change Listeners
DOMElements.taxRateInput.addEventListener('input', updateTotals);
DOMElements.taxAmountInput.addEventListener('input', updateTotals);
DOMElements.discountPercentageInput.addEventListener('input', updateTotals);
DOMElements.discountAmountInput.addEventListener('input', updateTotals);

// Initial Render on Load
document.addEventListener('DOMContentLoaded', () => {
    updateTableStatus();
    showSection(appState.currentSection); // Show the last active section
    if (appState.lastTable) {
        selectTable(appState.lastTable); // Re-select the last active table
    } else {
        // If no last table, ensure table buttons are rendered correctly
        // and current table display is reset if needed
        DOMElements.currentTableDisplay.textContent = '(None)';
    }

    // Ensure category button active state is correctly set on load for items section
    const initialCategoryBtn = document.querySelector(`.category-btn[data-category="${appState.currentCategory}"]`);
    if (initialCategoryBtn) {
        initialCategoryBtn.classList.add('active');
    }
    renderMenuItems(); // Initial render of menu items based on default category/search
});
