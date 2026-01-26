import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/api";
import "./HomePage.css";
import ChatBot from "../components/Chatbot";

/* ================= HERO SECTION ================= */
const HeroSection = () => {
  const scrollToProducts = () => {
    document
      .getElementById("product-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>OG Collection</h1>
          <p>Premium fashion. Smart shopping. Modern lifestyle.</p>
          <button onClick={scrollToProducts}>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

/* ================= IMAGE SLIDER ================= */
const ImageSlider = () => {
  const images = [
    "/images/shoe1.jpg",
    "/images/shoe2.jpg",
    "/images/shoe3.jpg",
    "/images/shoe4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt={`slider-${i}`} />
        ))}
      </div>

      <div className="nav left" onClick={prevSlide}>
        &#10094;
      </div>
      <div className="nav right" onClick={nextSlide}>
        &#10095;
      </div>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

/* ================= HOME PAGE ================= */
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="homepage">
      <Header />
      <HeroSection />

      {/* ================= SEARCH BOX ================= */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ================= CATEGORIES ================= */}
      <section className="categories">
        <div className="category-card men">Men</div>
        <div className="category-card women">Women</div>
        <div className="category-card accessories">Accessories</div>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section id="product-section" className="products">
        <h2>New Arrivals & Bestsellers</h2>

        {/* Slider */}
        <ImageSlider />

        {loading && <p className="loading">Loading products...</p>}
        {error && <p className="error">{error}</p>}

        <div className="product-grid">
          {!loading && filteredProducts.length === 0 && (
            <p className="no-result">No products found</p>
          )}

          {!loading &&
            filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Get Exclusive Offers</h2>
        <p>Subscribe to receive latest deals & updates</p>
        <button>Subscribe Now</button>
      </section>

      <Footer />

      {/* ================= CHATBOT ================= */}
      <ChatBot />
    </div>
  );
};

export default HomePage;
