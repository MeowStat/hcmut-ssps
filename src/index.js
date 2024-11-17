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

import Welcome from './js/welcome';

import LoginPage from './js/LoginPage';
import SPSOMenu from "./js/SPSOMenu";
import SPSOApp from "./js/SPSOApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/UploadFile" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ChoosePrinter" element={<ChoosePrinter />} />
        <Route path="/Checkout" element={<Checkout />} />
        {/* <Route path="/Checkout" element={<Checkout />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
