import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import "./HomePage.css";

const HeroSection = () => {
  const scrollToProducts = () =>
    document.getElementById('product-grid-section').scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h2>Shop the Future of E-Commerce in one and only OG Collection</h2>
          <p>Curated products, trending styles, and unbeatable deals.</p>
          <button className="hero-btn" onClick={scrollToProducts}>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

// 🔹 Image Slider Component (Shoes)
const ImageSlider = () => {
  const images = [
    "/images/shoe1.jpg",
    "/images/shoe2.jpg",
    "/images/shoe3.jpg",
    "/images/shoe4.jpg",
    "/images/shoe5.jpg"
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 4000); // auto slide every 4 sec
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`shoe-${i}`} />
        ))}
      </div>
      <div className="nav left" onClick={prevSlide}>&#10094;</div>
      <div className="nav right" onClick={nextSlide}>&#10095;</div>

      {/* Dots navigation */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products.');
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="homepage">
      <Header />
      <HeroSection />

      {/* Featured Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card men">Men's Fashion</div>
          <div className="category-card women">Women's Fashion</div>
          <div className="category-card accessories">Accessories</div>
        </div>
      </section>

      {/* 🔹 Product Section with Shoe Slider */}
      <section id="product-grid-section" className="product-section">
        <h2 className="section-title">New Arrivals & Bestsellers</h2>

        {/* Shoe Image Slider */}
        <ImageSlider />

        {loading && <p className="loading-text">Loading products...</p>}
        {error && <p className="error-text">{error}</p>}
        <div className="product-grid">
          {!loading && !error && products.map(p => <ProductCard key={p._id} product={p} />)}
        </div>
      </section>

      {/* CTA Section */}
      <section className="homepage-cta">
        <h2>Subscribe for Exclusive Offers</h2>
        <p>Get notified about new arrivals, deals, and discounts directly to your inbox.</p>
        <button className="cta-btn">Subscribe Now</button>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
