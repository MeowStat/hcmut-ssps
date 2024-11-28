import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/UploadFile.css";
import "./css/ChoosePrinter.css";
import "./css/Checkout.css";
import ChoosePrinter from "./js/ChoosePrinter";
import Homepage from './js/homepage';
import reportWebVitals from "./js/reportWebVitals";
import Checkout from './js/Checkout'; 
import App from './App';
import Login from './js/Login';
import UploadFile from "./js/UploadFile";
import Welcome from './js/welcome';
import BuyPages from "./js/BuyPages";
import Cart from "./js/Cart";
import CheckoutCart from "./js/CheckoutCart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/UploadFile" element={<UploadFile />} />
        <Route path="/ChoosePrinter" element={<ChoosePrinter />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/BuyPages" element={<BuyPages />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CheckoutCart" element={<CheckoutCart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
