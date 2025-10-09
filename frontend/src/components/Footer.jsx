import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>© 2025 E-Shop. All rights reserved.</p>
        <nav className="footer-nav">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
