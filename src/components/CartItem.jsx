import { useCartSingleton } from '../hooks/useCart';

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCartSingleton();
  return (
    <div className="cart-item">
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">Rs {item.price}</span>
      </div>
      <div className="quantity-controls">
        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>
      <button onClick={() => removeItem(item.id)} className="remove-btn">×</button>
    </div>
  );
}
