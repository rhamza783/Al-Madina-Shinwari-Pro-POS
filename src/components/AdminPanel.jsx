import { useState } from 'react';
import menuItems from '../data/menuItems';
import { useAdmin } from '../hooks/useAdmin';

export default function AdminPanel({ onClose }) {
  const { isAdmin } = useAdmin();
  const [newItem, setNewItem] = useState({ name: '', price: '', category: 'mains' });
  const [items, setItems] = useState(menuItems);

  const handleAdd = () => {
    if (!newItem.name || !newItem.price) {
      alert("Please fill name and price");
      return;
    }
    const item = {
      id: Date.now(),
      name: newItem.name,
      price: parseFloat(newItem.price),
      category: newItem.category
    };
    setItems(prev => [...prev, item]);
    setNewItem({ name: '', price: '', category: 'mains' });
    alert("Item added!");
  };

  const handleUpdate = (id, field, value) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, [field]: value } : i));
  };

  if (!isAdmin) return null;

  return (
    <div className="admin-panel">
      <h3>🔐 Admin Panel</h3>
      <button onClick={onClose} className="close-btn">✕</button>

      <h4>Add New Item</h4>
      <input placeholder="Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} />
      <input type="number" placeholder="Price" value={newItem.price} onChange={e => setNewItem({ ...newItem, price: e.target.value })} />
      <select value={newItem.category} onChange={e => setNewItem({ ...newItem, category: e.target.value })}>
        <option value="mains">Mains</option>
        <option value="appetizers">Appetizers</option>
        <option value="drinks">Drinks</option>
        <option value="sides">Sides</option>
      </select>
      <button onClick={handleAdd}>➕ Add Item</button>

      <h4>Manage Items</h4>
      <ul className="item-list">
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <input
              type="number"
              defaultValue={item.price}
              onChange={e => handleUpdate(item.id, 'price', parseFloat(e.target.value))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
