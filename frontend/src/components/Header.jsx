import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // track which dropdown is open

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="OGcollection Logo" className="logo-img" />
        </Link>
      </div>

      {/* Desktop / Mobile Menu */}
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

        <Link to="/new-arrivals">New Arrivals</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </nav>

      {/* Hamburger Mobile Toggle */}
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
