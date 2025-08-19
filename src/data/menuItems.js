export const menuItems = [
    { id: 1, name: 'چکن کڑاہی', category: 'karahi', price: 1800 },
    { id: 2, name: 'مٹن کڑاہی', category: 'karahi', price: 2500 },
    { id: 3, name: 'بیف کڑاہی', category: 'karahi', price: 2000 },
    { id: 4, name: 'تکہ سیخ', category: 'bbq', price: 180 },
    { id: 5, name: 'ملائی بوٹی', category: 'bbq', price: 200 },
    { id: 6, name: 'بیف کباب', category: 'bbq', price: 150 },
    { id: 7, name: 'دال چنا', category: 'regular', price: 200 },
    { id: 8, name: 'مکس سبزی', category: 'regular', price: 180 },
    { id: 9, name: 'کوک', category: 'drinks', price: 100 },
    { id: 10, name: 'پانی کی بوتل', category: 'drinks', price: 50 },
    { id: 11, name: 'بڑا سلاد', category: 'other', price: 100 },
    { id: 12, name: 'رائتہ', category: 'other', price: 80 },
];
export const categories = [
    { id: 'all', name: 'All' },
    { id: 'karahi', name: 'Karahi' },
    { id: 'bbq', name: 'BBQ' },
    { id: 'regular', name: 'Regular' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'other', name: 'Other' },
];
export const tables = [
    ...Array.from({ length: 12 }, (_, i) => ({ id: `Indoor ${i + 1}`, name: `Indoor ${i + 1}`, type: 'Indoor' })),
    ...Array.from({ length: 6 }, (_, i) => ({ id: `Takeaway ${i + 1}`, name: `Takeaway ${i + 1}`, type: 'Takeaway' })),
];
