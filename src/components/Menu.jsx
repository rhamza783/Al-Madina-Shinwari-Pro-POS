import { useState } from 'react';
import menuItems from '../data/menuItems';
import categories from '../data/categories';
import MenuItem from './MenuItem';
import { useAdmin } from '../hooks/useAdmin';

export default function Menu({ searchTerm, activeCategory, showAdmin }) {
  const { isAdmin } = useAdmin();
  const [editedItems, setEditedItems] = useState({});

  const handlePriceChange = (id, price) => {
    setEditedItems(prev => ({ ...prev, [id]: parseFloat(price) || 0 }));
  };

  const finalItems = menuItems
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

  return (
    <div className="menu-grid">
      {finalItems.map(item => (
        <div className="menu-item" key={item.id} onClick={() => !isAdmin && addToCart(item)}>
          <h3>{item.name}</h3>
          {isAdmin ? (
            <input
              type="number"
              defaultValue={item.price}
              onChange={e => handlePriceChange(item.id, e.target.value)}
              className="admin-price-input"
            />
          ) : (
            <p className="price">Rs {item.price}</p>
          )}
          {!isAdmin ? (
            <button className="add-btn">Add to Cart</button>
          ) : (
            <button
              className="save-btn"
              onClick={() => {
                if (editedItems[item.id]) {
                  // Simulate save (would update context/state in real app)
                  alert(`Price updated for ${item.name}: Rs ${editedItems[item.id]}`);
                }
              }}
            >
              Save
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
