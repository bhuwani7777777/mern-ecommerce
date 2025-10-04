import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cartItems } = useCart();
  const [openDropdown, setOpenDropdown] = useState(null); // "men" or "women" or null

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="../images/logo.png" alt="OGcollection Logo" className="logo-img" />
          </Link>
        </div>

        <nav className="nav-links">
          <div className="dropdown" onClick={() => toggleDropdown("men")}>
            <span>Men ▾</span>
            <div className={`dropdown-content ${openDropdown === "men" ? "show" : ""}`}>
              <NavLink to="/men/shirts">Shirts</NavLink>
              <NavLink to="/men/pants">Pants</NavLink>
              <NavLink to="/men/shoes">Shoes</NavLink>
            </div>
          </div>

          <div className="dropdown" onClick={() => toggleDropdown("women")}>
            <span>Women ▾</span>
            <div className={`dropdown-content ${openDropdown === "women" ? "show" : ""}`}>
              <NavLink to="/women/dresses">Dresses</NavLink>
              <NavLink to="/women/tops">Tops</NavLink>
              <NavLink to="/women/shoes">Shoes</NavLink>
            </div>
          </div>

          <NavLink to="/new-arrivals" className="nav-link">New Arrivals</NavLink>
        

          <NavLink to="/cart" className="nav-link cart-link">
            Cart <span className="cart-count">{cartItems.length}</span>
          </NavLink>

          <NavLink to="/login" className="nav-link login-btn">Login</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
