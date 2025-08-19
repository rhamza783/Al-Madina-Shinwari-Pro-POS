import { useEffect } from 'react';

export default function PrintReceipt({ cart, totals, onClose }) {
  const { subtotal, tax, total } = totals;
  const now = new Date().toLocaleString();

  // Auto-print when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Close after print (or let user close)
  const handleDone = () => {
    if (onClose) onClose();
  };

  if (!cart || cart.length === 0) {
    return (
      <div id="print-receipt">
        <h3>No items in cart!</h3>
        <button onClick={handleDone}>Close</button>
      </div>
    );
  }

  return (
    <div id="print-receipt">
      <div className="receipt-header">
        <h2>Al-Madina Shinwari</h2>
        <p>Karachi, Pakistan</p>
        <p><strong>Date:</strong> {now}</p>
      </div>

      <hr />

      <div className="receipt-items">
        {cart.map(item => (
          <div key={item.id} className="receipt-item">
            <span>×{item.quantity} {item.name}</span>
            <span>Rs {(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <hr />

      <div className="receipt-totals">
        <div className="total-row">
          <span><strong>Subtotal:</strong></span>
          <span>Rs {subtotal.toFixed(2)}</span>
        </div>
        <div className="total-row">
          <span><strong>Tax (10%):</strong></span>
          <span>Rs {tax.toFixed(2)}</span>
        </div>
        <div className="total-row grand-total">
          <span><strong>Grand Total:</strong></span>
          <span><strong>Rs {total.toFixed(2)}</strong></span>
        </div>
      </div>

      <hr />

      <div className="receipt-footer">
        <p>Thank you for your order! 🌟</p>
        <p>We serve authentic Afghan cuisine.</p>
      </div>

      {/* Optional: Button to close after print */}
      <button onClick={handleDone} style={{ marginTop: '20px' }}>
        Close
      </button>
    </div>
  );
}
