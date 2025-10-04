import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import "./ProductMen.css";

const HeroSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section men-hero">
      <img src={images[currentIndex]} alt="Men Collection" className="hero-img" />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Men’s Collection</h1>
          <p>Upgrade your wardrobe with classic, stylish, and modern men’s fashion essentials.</p>
        </div>
      </div>
    </section>
  );
};

// Sample products for men
const sampleProducts = [
  { _id: "1", name: "Nike Air Max", price: 150, category: "men", subcategory: "shoes", image: "https://images.unsplash.com/photo-1600185366146-d9f7ebf4e4f7?auto=format&fit=crop&w=400&q=80" },
  { _id: "2", name: "Casual Shirt", price: 60, category: "men", subcategory: "shirts", image: "https://images.unsplash.com/photo-1585155779626-4c5b29aa47b5?auto=format&fit=crop&w=400&q=80" },
  { _id: "3", name: "Formal Pants", price: 80, category: "men", subcategory: "pants", image: "https://images.unsplash.com/photo-1602810312623-3dcf44bb7e3e?auto=format&fit=crop&w=400&q=80" },
  { _id: "4", name: "Sports Sneakers", price: 120, category: "men", subcategory: "shoes", image: "https://images.unsplash.com/photo-1596464716121-03c0f28d4d0e?auto=format&fit=crop&w=400&q=80" }
];

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-details">
        <h4>{product.name}</h4>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-cart-btn" onClick={() => addToCart({ ...product, qty: 1 })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductMen = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1556909218-52d4a53d9a04?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1521335629791-ce4aec67ddbd?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1600185366146-d9f7ebf4e4f7?auto=format&fit=crop&w=1400&q=80"
  ];

  const [filter, setFilter] = useState("all");
  const filteredProducts = filter === "all"
    ? sampleProducts
    : sampleProducts.filter(p => p.subcategory.toLowerCase() === filter);

  return (
    <div className="homepage">
      <Header />
      <HeroSlider images={heroImages} />

      <section className="filters">
        {["all", "shirts", "pants", "shoes"].map(cat => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </section>

      <section className="product-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {filteredProducts.map(p => <ProductCard key={p._id} product={p} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductMen;
