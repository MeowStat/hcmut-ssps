import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/UploadFile.css";
import "./css/ChoosePrinter.css";
import "./css/Checkout.css";
import "./css/BuyPage.css";
import "./css/Cart.css";
import "./css/CheckOutCart.css";
import UploadFile from "./js/UploadFile";
import ChoosePrinter from "./js/ChoosePrinter";
import reportWebVitals from "./js/reportWebVitals";
import Checkout from './js/Checkout'; 
import BuyPages from './js/BuyPages';
import Cart from './js/Cart';
import CheckOutCart from './js/CheckOutCart';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<UploadFile />} />
        <Route path="/ChoosePrinter" element={<ChoosePrinter />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<BuyPages />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CheckOutCart" element={<CheckOutCart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
