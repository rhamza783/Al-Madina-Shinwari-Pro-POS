import { useCartSingleton } from '../hooks/useCart';

export default function MenuItem({ item }) {
  const { addToCart } = useCartSingleton();
  return (
    <div className="menu-item" onClick={() => addToCart(item)}>
      <h3>{item.name}</h3>
      <p className="price">Rs {item.price}</p>
      <button className="add-btn">Add</button>
    </div>
  );
}
