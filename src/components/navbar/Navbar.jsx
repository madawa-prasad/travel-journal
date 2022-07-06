import React from 'react';
import webIcon from '../../images/webIcon.png';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={webIcon} alt="" className="web-icon" />
      <span className="navbar-text">my travel journal</span>
    </nav>
  );
};

export default Navbar;
