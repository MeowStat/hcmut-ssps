import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/BuyPage.css";
import HeaderPage from "./HeaderPage";
import ContactInfo from "./ContactInfo";

function BuyPages() {
  const navigate = useNavigate();
  const [a4Count, setA4Count] = useState(0);
  const [a3Count, setA3Count] = useState(0);

  const handleIncrement = (type) => {
    if (type === "A4") setA4Count(a4Count + 1);
    else setA3Count(a3Count + 1);
  };

  const handleDecrement = (type) => {
    if (type === "A4" && a4Count > 0) setA4Count(a4Count - 1);
    else if (type === "A3" && a3Count > 0) setA3Count(a3Count - 1);
  };

  const handleAddToCart = (type) => {
    // TODO: Implement cart functionality
    console.log(`Added ${type} pages to cart`);
  };

  return (
    <div className="buy-pages">
      <HeaderPage />
      <h1>Buy Pages</h1>
      <hr
        style={{
          border: "none",
          borderTop: "1px dashed #000000",
          width: "80%", // Làm cho đường kẻ dài hơn
          marginLeft: "10%", // Để căn chỉnh lại cho cân đối
          height: "0.1px",
        }}
      />
      <div className="pages-container">
        <div className="page-card">
          <h2>A4</h2>
          <p>Price: 100 VND</p>
          <div className="counter">
            <button onClick={() => handleDecrement("A4")}>-</button>
            <input type="number" value={a4Count} readOnly />
            <button onClick={() => handleIncrement("A4")}>+</button>
          </div>
          <button className="add-to-cart" onClick={() => handleAddToCart("A4")}>
            Add to Cart
          </button>
        </div>

        <div className="page-card">
          <h2>A3</h2>
          <p>Price: 200 VND</p>
          <div className="counter">
            <button onClick={() => handleDecrement("A3")}>-</button>
            <input type="number" value={a3Count} readOnly />
            <button onClick={() => handleIncrement("A3")}>+</button>
          </div>
          <button className="add-to-cart" onClick={() => handleAddToCart("A3")}>
            Add to Cart
          </button>
        </div>
      </div>

      <button onClick={() => navigate("/Cart")}>Go to Cart</button>
      <ContactInfo />
    </div>
  );
}

export default BuyPages;
