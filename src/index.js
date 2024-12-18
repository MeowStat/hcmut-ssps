/*
/* File: index.js
/* Author: TiDz
/* Contact: nguyentinvs123@gmail.com
 * Created on Wed Dec 18 2024
 *
 * Description: 
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 TiDz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions: unconditional.
 *
 * Useage: 
 */


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
import CheckOutCart from "./js/CheckOutCart";
import Cart from "./js/Cart";
import SPSOApp from "./SPSOApp";
//SPSO IMPORT BEGIN
import Dashboard from "./SPSOApp/dashboard";
import Config from "./SPSOApp/configuration";
import FileConfig from "./SPSOApp/configuration/FileConfig";
import ManagePrinter from "./js/ManagePrinter";
import PrinterDetails from "./js/PrinterDetails";
import EditPrinterDetails from "./js/EditPrinterDetails";
import NewPrinter from "./js/NewPrinter";
//END


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
        <Route path="/CheckoutCart" element={<CheckOutCart />} />
        <Route path="/SPSO" element={<SPSOApp/>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="config" element={<Config />} />
          <Route path="config/fileconfig" element={<FileConfig />} />
          <Route path="printer" element={<ManagePrinter />} />
          <Route path="printer/:id" element={<PrinterDetails />} />
          <Route path="printer/edit/:id" element={<EditPrinterDetails />} />
          <Route path="printer/new" element={<NewPrinter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
