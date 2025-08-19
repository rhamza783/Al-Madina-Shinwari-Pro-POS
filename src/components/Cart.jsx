import { useCartSingleton } from '../hooks/useCart';
import CartItem from './CartItem';

export default function Cart() {
  const { cart } = useCartSingleton();

  if (cart.length === 0) {
    return <p className="empty-cart">🛒 Your cart is empty</p>;
  }

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
