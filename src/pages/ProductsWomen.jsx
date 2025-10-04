import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import "./ProductWomen.css";

// Hero Slider Component
const HeroSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section women-hero">
      <img src={images[currentIndex]} alt="Women Collection" className="hero-img" />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Women’s Collection</h1>
          <p>Discover the latest trends in women's fashion with premium quality and timeless designs.</p>
        </div>
      </div>
    </section>
  );
};

// Sample products
const sampleProducts = [
  {
    _id: "1",
    name: "Elegant Dress",
    price: 120,
    category: "women",
    subcategory: "dresses",
    image: "https://images.unsplash.com/photo-1520975911103-276c7dcba56e?auto=format&fit=crop&w=400&q=80"
  },
  {
    _id: "2",
    name: "Fashion Sneakers",
    price: 90,
    category: "women",
    subcategory: "shoes",
    image: "https://images.unsplash.com/photo-1600185366146-d9f7ebf4e4f7?auto=format&fit=crop&w=400&q=80"
  },
  {
    _id: "3",
    name: "Stylish Top",
    price: 50,
    category: "women",
    subcategory: "tops",
    image: "https://images.unsplash.com/photo-1585155779626-4c5b29aa47b5?auto=format&fit=crop&w=400&q=80"
  },
  {
    _id: "4",
    name: "Casual Bag",
    price: 70,
    category: "women",
    subcategory: "bags",
    image: "https://images.unsplash.com/photo-1611599534893-4f6cc3b03f80?auto=format&fit=crop&w=400&q=80"
  }
];

// Product Card
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

const ProductWomen = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1520975911103-276c7dcba56e?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1611599534893-4f6cc3b03f80?auto=format&fit=crop&w=1400&q=80"
  ];

  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? sampleProducts
      : sampleProducts.filter(p => p.subcategory.toLowerCase() === filter);

  return (
    <div className="homepage">
      <Header />

      <HeroSlider images={heroImages} />

      {/* Filters */}
      <section className="filters">
        {["all", "dresses", "tops", "shoes", "bags"].map(cat => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </section>

      {/* Product Grid */}
      <section className="product-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {filteredProducts.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductWomen;
