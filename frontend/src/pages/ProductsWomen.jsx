// In frontend/src/pages/ProductsWomen.jsx

import React from 'react';
import ProductCard from '../components/ProductCard'; 
import './styles.css'; // Reuse the existing styles

// --- Mock Data for Women's Collection ---
const womenProducts = [
  // Paths reference the images in the public/images folder
  { id: 201, name: "Classic Leather Sneaker", price: 89.99, image: "/images/shoe2.jpg", category: "Casual" },
  { id: 202, name: "Trail Blazer Boot", price: 155.00, image: "/images/shoe3.jpg", category: "Outdoor" },
  { id: 203, name: "Lightweight Runner Z", price: 119.99, image: "/images/shoe7.jpg", category: "Running" }, // Requires a new image!
  { id: 204, name: "Elegant Slip-On", price: 75.00, image: "/images/shoe8.jpg", category: "Casual" }, // Requires a new image!
];

const Header = () => (
  <header className="main-header">
    <h1 className="logo">👟 **SoleStore**</h1>
    <nav className="nav-links">
      <a href="/">Home</a>
      <a href="/men">Men</a>
      <a href="/women">Women</a>
      <a href="/sale">Sale</a>
      <a href="/cart">Cart (0)</a>
    </nav>
  </header>
);

const ProductsWomen = () => {
  return (
    <div className="homepage">
      <Header />
      <main>
        <hr/>
        <section className="product-listing">
          <h2 className="section-title">✨ **Women's Footwear Collection**</h2>
          <div className="product-grid">
            {womenProducts.map(product => (
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

export default ProductsWomen;