import { useCartSingleton } from '../hooks/useCart';
import { printReceipt } from '../utils/printReceipt';

export default function TotalSummary() {
  const { cart, getTotal } = useCartSingleton();
  const totals = getTotal();

  const handlePrint = () => {
    if (cart.length === 0) {
      alert("🛒 Cart is empty!");
      return;
    }
    printReceipt(cart, totals);
  };

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
