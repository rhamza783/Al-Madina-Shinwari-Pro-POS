import React from 'react';
import { useApp } from '../hooks/useApp';
import './MenuView.css';
import { FaPlus } from 'react-icons/fa';

const MenuView = () => {
  const { menuItems, addItemToOrder } = useApp();

  return (
    <div className="menu-view">
      <h2>Menu</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item-card">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>PKR {item.price}</p>
            </div>
            <button className="add-btn" onClick={() => addItemToOrder(item)}>
              <FaPlus />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MenuView;
