import React, { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { menuItems as initialMenuItems, categories, tables } from '../data/menuItems';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [savedOrders, setSavedOrders] = useLocalStorage('savedOrders', {});
  const [completedOrders, setCompletedOrders] = useLocalStorage('completedOrders', []);
  const [currentTable, setCurrentTable] = useLocalStorage('currentTable', null);
  const [menuItems, setMenuItems] = useLocalStorage('menuItems', initialMenuItems);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const selectTable = (tableId) => {
    setCurrentTable(tableId);
    if (!savedOrders[tableId]) {
      setSavedOrders(prev => ({ ...prev, [tableId]: { items: [], total: 0 } }));
    }
  };
  
  const getCurrentOrder = () => savedOrders[currentTable] || { items: [], total: 0 };

  const calculateOrderTotal = (items) => items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addItemToOrder = (item) => {
    if (!currentTable) return alert("Please select a table first.");
    setSavedOrders(prev => {
      const newOrders = { ...prev };
      const order = newOrders[currentTable];
      const existingItem = order.items.find(i => i.id === item.id);
      if (existingItem) existingItem.quantity++;
      else order.items.push({ ...item, quantity: 1 });
      order.total = calculateOrderTotal(order.items);
      return newOrders;
    });
  };

  const updateItemQuantity = (itemId, delta) => {
    setSavedOrders(prev => {
        const newOrders = { ...prev };
        const order = newOrders[currentTable];
        const item = order.items.find(i => i.id === itemId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) order.items = order.items.filter(i => i.id !== itemId);
        }
        order.total = calculateOrderTotal(order.items);
        return newOrders;
    });
  };

  const closeOrder = () => {
    if (!currentTable) return;
    const orderToComplete = {
        ...savedOrders[currentTable],
        tableId: currentTable,
        completedAt: new Date().toISOString(),
        billNumber: (completedOrders.length + 1).toString().padStart(4, '0')
    };
    setCompletedOrders(prev => [...prev, orderToComplete]);
    setSavedOrders(prev => {
        const { [currentTable]: _, ...rest } = prev;
        return rest;
    });
    setCurrentTable(null);
  };

  const value = {
    theme, toggleTheme, savedOrders, completedOrders, currentTable, selectTable,
    menuItems, categories, tables, addItemToOrder, updateItemQuantity,
    getCurrentOrder, closeOrder, isAdmin, setIsAdmin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
