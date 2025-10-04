import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import "./NewArrivals.css";

// Sample new arrival products
const newArrivalProducts = [
  {
    _id: "101",
    name: "Nike Air Zoom",
    price: 160,
    image: "https://images.unsplash.com/photo-1618354695372-6186b4a5f2d4?auto=format&fit=crop&w=400&q=80",
  },
  {
    _id: "102",
    name: "Adidas Superstar",
    price: 120,
    image: "https://images.unsplash.com/photo-1585433060503-719f20fa1f1c?auto=format&fit=crop&w=400&q=80",
  },
  {
    _id: "103",
    name: "Casual Hoodie",
    price: 55,
    image: "https://images.unsplash.com/photo-1618354689627-827f7c5f4a6f?auto=format&fit=crop&w=400&q=80",
  },
  {
    _id: "104",
    name: "Denim Jacket",
    price: 90,
    image: "https://images.unsplash.com/photo-1618354690384-9b4dfbb60ed1?auto=format&fit=crop&w=400&q=80",
  },
];

const NewArrivals = () => {
  const { addToCart } = useCart();

  return (
    <div className="new-arrivals-page">
      <Header />

      <section className="hero-banner new-arrivals-banner">
        <div className="hero-content">
          <h1>New Arrivals</h1>
          <p>Check out the latest additions to our collection!</p>
        </div>
      </section>

      <section className="product-section">
        <h2>Latest Products</h2>
        <div className="product-grid">
          {newArrivalProducts.map(product => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewArrivals;
