// src/js/Login.js
import React from 'react';
import '../css/Login.css';
import SPSOApp from "../SPSOApp";

import Footer from './Footer';
const Login = () => {
  const handleSPSOClick = () => {
    window.location.replace('SPSO/');
  };
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="login-container">
          <h1 className="title">HCMUT</h1>
          <h2 className="subtitle">Student Smart Printing Service</h2>
          <div className="login-box">
            <h3>Log in using your account on:</h3>
            <button className="login-button" onClick={() => window.location.href = 'hcmut-sso/index.html'}>HCMUT account</button>
            <button className="login-button" onClick={handleSPSOClick}>SPSO</button>
            <button className="cookie-notice">Cookies notice</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;