// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart, FaBell } from "react-icons/fa";

const Header = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [notification, setNotification] = useState(null);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) setActiveDropdown(null);
    else setActiveDropdown(menu);
  };

  // Notification for added items
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      setNotification(`${cartItems.length} item(s) in your cart`);
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [cartItems]);

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="OGcollection Logo" className="logo-img" />
        </Link>
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* Men Dropdown */}
        <div className="nav-item" onClick={() => toggleDropdown("men")}>
          <span className="nav-link">Men ▾</span>
          <ul className={`dropdown-menu ${activeDropdown === "men" ? "show" : ""}`}>
            <li><Link to="/men-shirts">Shirts</Link></li>
            <li><Link to="/men-pants">Pants</Link></li>
            <li><Link to="/men-shoes">Shoes</Link></li>
          </ul>
        </div>

        {/* Women Dropdown */}
        <div className="nav-item" onClick={() => toggleDropdown("women")}>
          <span className="nav-link">Women ▾</span>
          <ul className={`dropdown-menu ${activeDropdown === "women" ? "show" : ""}`}>
            <li><Link to="/women-dresses">Dresses</Link></li>
            <li><Link to="/women-tops">Tops</Link></li>
            <li><Link to="/women-shoes">Shoes</Link></li>
          </ul>
        </div>

        <Link to="/new-arrivals" className="nav-link">New Arrivals</Link>

        {/* Cart */}
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          {cartItems && cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>

        {notification && (
          <div className="cart-notification">
            <FaBell /> {notification}
          </div>
        )}

        <Link to="/login" className="nav-link">Login</Link>
      </nav>

      {/* Hamburger */}
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
