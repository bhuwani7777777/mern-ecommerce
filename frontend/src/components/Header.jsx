import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <img src="../images/logo.png" alt="OGcollection Logo" className="logo-img" />
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
