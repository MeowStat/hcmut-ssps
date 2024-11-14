import React from 'react';
import { Clock, Lock, Banknote } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Change this import
import '../css/homepage.css';

export default function PrintingService() {
  const navigate = useNavigate(); // Use navigate instead of router

  // Update navigation function
  const handlePrintClick = () => {
    navigate('/welcome');
  };
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-content">
          <h1 className="brand-title">HCMUT</h1>
          <h2 className="hero-heading">
            Trusted Smart Printing Serives for Students
          </h2>
          <p className="hero-text">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Suscipit enim
            nullam a diam quam et hendrerit tempus. Anisi nostra velit, justo
            aliquet molestie erat rutrum.
          </p>
          <button className="print-button" onClick={handlePrintClick}>
            <span>Print now</span>
          </button>
        </div>
        <div className="hero-image-container">
          <img
            src="/print_image.png"
            alt="Student using printer"
            className="hero-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container">
        <h3 className="features-subtitle">Why choose us?</h3>
        <h2 className="features-title">Realizing your work</h2>
        <h2 className="features-title">Become Real Products</h2>
        <p className="features-text">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Suscipit enim
          nullam a diam quam et hendrerit tempus. Anisi nostra velit, justo
          aliquet molestie erat rutrum.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Clock className="icon" />
            </div>
            <h3 className="feature-title">Less Waiting Time</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Lock className="icon" />
            </div>
            <h3 className="feature-title">
              More Security
            </h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Banknote className="icon" />
            </div>
            <h3 className="feature-title">
              Best Pricing
            </h3>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content container">
          <h2 className="footer-title">
            POWERING THE BEST PRINTING SERVICES
          </h2>
          <div className="logo-container">
            <div className="logo-wrapper">
              <img
                src="/path-to-bk-logo.png"
                alt="BK Logo"
                className="logo"
              />
            </div>
            <div className="logo-wrapper">
              <img
                src="/path-to-hp-logo.png"
                alt="HP Logo"
                className="logo"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
