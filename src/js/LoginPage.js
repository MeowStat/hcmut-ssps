import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css";
import "../css/ContactInfo.css";
const LoginPage = () => {
  const navigate = useNavigate();
  const handleStudentLogin = () => {
    navigate("/");
  };
  const handleSPSOLogin = () => {
    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <h1>HCMUT</h1>
          <h2>Student Smart Printing Service</h2>
        </div>

        <div className="login-box">
          <h3>Log in using your account on:</h3>

          <div className="login-options">
            <button className="login-button hcmut">
              <img
                src="/hcmut.png"
                alt="HCMUT"
                style={{ width: "20px", height: "20px" }}
              />
              HCMUT account
            </button>

            <button className="login-button spso">SPSO</button>
          </div>

          <div className="cookies-notice">
            <button className="cookie-button">Cookies notice</button>
          </div>
        </div>
      </div>
      {/* <div className="illustration">
        <img src="/image1.jpg" alt="Login illustration" />
      </div>*/}
    </div>
  );
};

export default LoginPage;
