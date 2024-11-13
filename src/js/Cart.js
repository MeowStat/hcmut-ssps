import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Cart.css";
import ContactInfo from "./ContactInfo";
import HeaderPage from "./HeaderPage";
function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Page A4",
      price: 100,
      quantity: 40,
      selected: false,
    },
    // Có thể thêm các items khác
  ]);

  const handleQuantityChange = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleCheckboxChange = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };
  const calculateTotal = () => {
    return cartItems
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleCheckout = () => {
    // Xử lý checkout ở đây
    navigate("/CheckOutCart");
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="cart-container">
      <HeaderPage />
      <h1 className="cart-header">Shopping Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Price (VND)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  className="checkbox-item"
                  checked={item.selected}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <div className="quantity-control">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="quantity-input"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-footer">
        <div className="cart-summary">
          <input
            type="checkbox"
            className="checkbox-item"
            checked={cartItems.every((item) => item.selected)}
            onChange={() => {
              const allSelected = cartItems.every((item) => item.selected);
              setCartItems(
                cartItems.map((item) => ({
                  ...item,
                  selected: !allSelected,
                }))
              );
            }}
          />
          <span>All</span>
          <div className="total">
            Total: <span className="total-amount">VND {calculateTotal()}</span>
          </div>
        </div>
        <button className="back-btn" onClick={handleBack}>
          Back
        </button>
        <button className="checkout-btn" onClick={handleCheckout}>
          Check Out Now
        </button>
      </div>
      <ContactInfo />
    </div>
  );
}

export default Cart;
