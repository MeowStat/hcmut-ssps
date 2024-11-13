import React from 'react';
import '../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const notificationCount = 1;
  const bagCount = 1;
  const userId = "2213500";
  const userStatus = "Online";

  return (
    <nav className="navbar">
      <div className="logo">BKPrint</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Print now</a></li>
        <li><a href="#">Buy pages</a></li>
      </ul>
      <div className="user-info">
        <div className="icon">
          <FontAwesomeIcon icon={faBell} />
          <span className="icon-badge">{notificationCount}</span>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faShoppingBag} />
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