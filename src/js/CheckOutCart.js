import React from "react";
import "../css/CheckOutCart.css";

function CheckOutCart() {
  const cartItems = [
    {
      id: 1,
      paper: "A4",
      amount: 40,
      price: 100,
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.amount,
      0
    );
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Checkout</h1>
      <table className="checkout-table">
        <thead>
          <tr>
            <th></th>
            <th>Paper</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.paper}</td>
              <td>{item.amount}</td>
              <td>VND {item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-section">
        <h2>
          Total: <span className="total-amount">VND {calculateTotal()}</span>
        </h2>
      </div>

      <div className="payment-buttons">
        <button className="payment-btn bkpay-btn">
          Purchase with <span className="payment-brand">BK</span>Pay
        </button>
        <button className="payment-btn momo-btn">Purchase with MoMo</button>
      </div>
    </div>
  );
}

export default CheckOutCart;