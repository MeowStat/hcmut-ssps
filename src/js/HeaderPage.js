import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/HeaderPage.css";

function HeaderPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">BKPrint</div>
          <nav className="nav-links">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/dashboard" className="nav-link">
              Dashboard
            </a>
            <a href="/print" className="nav-link">
              Print now
            </a>
            <a href="/buy-pages" className="nav-link">
              Buy pages
            </a>
          </nav>
        </div>
        <div className="header-right">
          <div className="user-info">
            <div className="notification-icons">
              <span className="notification-icon">
                🔔<span className="badge">1</span>
              </span>
              <span className="cart-icon">
                🛒<span className="badge">1</span>
              </span>
            </div>
            <div className="user-profile">
              <img
                src={`${process.env.PUBLIC_URL}/hcmut.png`}
                alt="User"
                className="avatar"
              />

              <span className="user-id">2213500</span>
              <span className="status-indicator">Online</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="bottom-nav">
        <div className="bottom-nav-links">
          <a href="/" className="bottom-nav-link">
            <span className="bottom-nav-icon">🏠</span>
            <span>Home</span>
          </a>
          <a href="/dashboard" className="bottom-nav-link">
            <span className="bottom-nav-icon">📊</span>
            <span>Dashboard</span>
          </a>
          <a href="/print" className="bottom-nav-link">
            <span className="bottom-nav-icon">🖨️</span>
            <span>Print</span>
          </a>
          <a href="/buy-pages" className="bottom-nav-link">
            <span className="bottom-nav-icon">🛒</span>
            <span>Buy Pages</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderPage;
