import React from 'react';
import { FaTh, FaUtensils, FaClipboardList } from 'react-icons/fa';
import './BottomNavBar.css';

const BottomNavBar = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'tables', icon: <FaTh />, label: 'Tables' },
    { id: 'menu', icon: <FaUtensils />, label: 'Menu' },
    { id: 'order', icon: <FaClipboardList />, label: 'Order' },
  ];

  return (
    <nav className="bottom-nav-bar">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`nav-item ${activeView === item.id ? 'active' : ''}`}
          onClick={() => setActiveView(item.id)}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};
export default BottomNavBar;
