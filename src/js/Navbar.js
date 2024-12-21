import React from 'react';
import '../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const notificationCount = 1;
  const bagCount = 1;
  const userId = "2213500";
  const userStatus = "Online";

  return (
    <nav className="navbar">
      <div className="logo-nav">BKPrint</div>
      <ul className="nav-links">
        <li><Link to="/homepage">Home</Link></li>
        <li><Link to="/welcome">Dashboard</Link></li>
        <li><Link to="/UploadFile">Print now</Link></li>
        <li><Link to="/BuyPages">Buy pages</Link></li>
      </ul>
      <div className="user-info">
        <div className="icon hover-effect">
          <FontAwesomeIcon icon={faBell} className="icon-animate" />
          <span className="icon-badge">{notificationCount}</span>
        </div>
        <div className="icon hover-effect">
          <FontAwesomeIcon icon={faShoppingBag} className="icon-animate" />
          <span className="icon-badge">{bagCount}</span>
        </div>
        <img className="avatar" src="/ava.jpg" alt="User Avatar" />
        <div className="user-details">
          <span className="user-id">{userId}</span>
          <span className="status">{userStatus}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;