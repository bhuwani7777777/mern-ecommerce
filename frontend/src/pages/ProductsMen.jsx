// In frontend/src/pages/ProductsMen.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; 
import './styles.css'; 

// --- Mock Data for Men's Collection ---
const menProducts = [
  { id: 101, name: "Air Zoom Runner", price: 129.99, image: "/images/shoe1.jpg", category: "Running" },
  { id: 102, name: "Basket-Pro High-Top", price: 110.50, image: "/images/shoe4.jpg", category: "Basketball" },
  { id: 103, name: "Urban Commuter Boot", price: 145.00, image: "/images/shoe5.jpg", category: "Casual" }, 
  { id: 104, name: "Performance Trainer X", price: 95.00, image: "/images/shoe6.jpg", category: "Training" }, 
  { id: 105, name: "Classic Leather Sneaker", price: 89.99, image: "/images/shoe2.jpg", category: "Casual" },
];

const Header = () => (
  <header className="main-header">
    <h1 className="logo">👟 **SoleStore**</h1>
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/sale">Sale</Link>
      <Link to="/cart">Cart (0)</Link>
    </nav>
  </header>
);

const ProductsMen = () => {
  return (
    <div className="homepage">
      <Header />
      <main>
        <hr/>
        <section className="product-listing">
          <h2 className="section-title">👟 **Men's Footwear Collection**</h2>
          <div className="product-grid">
            {menProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <hr/>
      </main>
      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} SoleStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductsMen;