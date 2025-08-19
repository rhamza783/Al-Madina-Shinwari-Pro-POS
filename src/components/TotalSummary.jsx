import { useState } from 'react';
import { useCartSingleton } from '../hooks/useCart';
import PrintReceipt from './PrintReceipt';
import './print.css'; // ← Import print styles

export default function TotalSummary() {
  const { cart, getTotal } = useCartSingleton();
  const totals = getTotal();

  const [showReceipt, setShowReceipt] = useState(false);

  const handlePrint = () => {
    if (cart.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }
    setShowReceipt(true);
  };

  if (showReceipt) {
    return (
      <PrintReceipt
        cart={cart}
        totals={totals}
        onClose={() => setShowReceipt(false)}
      />
    );
  }

  return (
    <div className="total-summary">
      <div className="summary-row">
        <span>Subtotal:</span>
        <span>Rs {totals.subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Tax (10%):</span>
        <span>Rs {totals.tax.toFixed(2)}</span>
      </div>
      <div className="summary-row total">
        <span>Grand Total:</span>
        <span>Rs {totals.total.toFixed(2)}</span>
      </div>
      <button onClick={handlePrint} className="print-btn">
        🖨️ Print Bill
      </button>
    </div>
  );
}
