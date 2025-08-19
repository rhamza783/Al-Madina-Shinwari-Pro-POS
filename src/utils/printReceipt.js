export const printReceipt = (cart, totals) => {
  const { subtotal, tax, total } = totals;
  const now = new Date().toLocaleString();

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Receipt</title>
        <style>
          body { font-family: 'Courier New', monospace; padding: 20px; max-width: 300px; margin: 0 auto; text-align: center; }
          .header { font-size: 1.4em; font-weight: bold; margin-bottom: 5px; }
          .subheader { font-size: 0.9em; color: #555; margin-bottom: 10px; }
          .divider { border-top: 1px dashed #000; margin: 10px 0; }
          .item-row { display: flex; justify-content: space-between; margin: 3px 0; font-size: 0.9em; }
          .total-row { font-weight: bold; margin-top: 10px; }
          .footer { margin-top: 15px; font-style: italic; color: #777; }
        </style>
      </head>
      <body onload="window.print(); window.close();">
        <h2 class="header">Al-Madina Shinwari</h2>
        <p class="subheader">Karachi, Pakistan</p>
        <p>${now}</p>
        <hr class="divider">
        ${cart.map(item => `
          <div class="item-row">
            <span>×${item.quantity} ${item.name}</span>
            <span>Rs ${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        `).join('')}
        <div class="divider"></div>
        <div class="item-row"><span>Subtotal:</span><span>Rs ${subtotal.toFixed(2)}</span></div>
        <div class="item-row"><span>Tax (10%):</span><span>Rs ${tax.toFixed(2)}</span></div>
        <div class="item-row total-row"><span>Total:</span><span>Rs ${total.toFixed(2)}</span></div>
        <div class="footer">Thank you! Come again 🌟</div>
      </body>
    </html>
  `);
  printWindow.document.close();
};
