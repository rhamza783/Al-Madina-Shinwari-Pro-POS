import React from 'react';
import { useApp } from '../hooks/useApp';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import './OrderView.css';

const OrderView = () => {
  const { currentTable, getCurrentOrder, updateItemQuantity, closeOrder } = useApp();
  const order = getCurrentOrder();

  if (!currentTable) {
    return <div className="order-view empty">Select a table to start an order.</div>;
  }

  return (
    <div className="order-view">
      <h2>Order for {currentTable}</h2>
      <div className="order-items-list">
        {order.items.length === 0 ? (
          <p>No items in this order.</p>
        ) : (
          order.items.map(item => (
            <div key={item.id} className="order-item">
              <div className="item-details">
                <span>{item.name}</span>
                <span className="item-total">PKR {item.price * item.quantity}</span>
              </div>
              <div className="quantity-controls">
                <button onClick={() => updateItemQuantity(item.id, -1)}>
                  {item.quantity === 1 ? <FaTrash /> : <FaMinus />}
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateItemQuantity(item.id, 1)}><FaPlus /></button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="order-summary">
        <h3>Total: PKR {order.total}</h3>
        <button className="close-order-btn" onClick={closeOrder} disabled={order.items.length === 0}>
          Print & Close Order
        </button>
      </div>
    </div>
  );
};
export default OrderView;
