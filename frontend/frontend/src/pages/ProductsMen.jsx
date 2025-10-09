import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import '../pages/ProductMen.css'; // Import CSS file

const ProductMen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.filter(p => p.category.toLowerCase() === 'men'));
        setLoading(false);
      } catch (err) {
        setError('Failed to load products.');
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter(p => p.subcategory?.toLowerCase() === filter);

  return (
    <div className="homepage">
      <Header />

      {/* Hero Banner */}
      <section className="hero-banner men-banner">
        <div className="hero-content">
          <h1>Men’s Collection</h1>
          <p>Upgrade your wardrobe with classic, stylish, and modern men’s fashion essentials.</p>
          <button className="shop-btn">Explore Now</button>
        </div>
      </section>

      {/* Filters */}
      <section className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'shirts' ? 'active' : ''}
          onClick={() => setFilter('shirts')}
        >
          Shirts
        </button>
        <button
          className={filter === 'pants' ? 'active' : ''}
          onClick={() => setFilter('pants')}
        >
          Pants
        </button>
        <button
          className={filter === 'shoes' ? 'active' : ''}
          onClick={() => setFilter('shoes')}
        >
          Shoes
        </button>
      </section>

      {/* Product Grid */}
      <section className="product-section">
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        <div className="product-grid">
          {!loading &&
            filteredProducts.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <h2>Top Men’s Picks</h2>
        <p>Curated styles to match every mood and occasion.</p>
        <div className="featured-cards">
          <div className="featured-item">👔 Premium Formal Wear</div>
          <div className="featured-item">👖 Casual Comfort</div>
          <div className="featured-item">👟 Sneakers & Shoes</div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Join Our Men’s Fashion Club</h2>
        <p>Be the first to know about new arrivals, discounts, and exclusive deals.</p>
        <button className="cta-btn">Subscribe Now</button>
      </section>

      <Footer />
    </div>
  );
};

export default ProductMen;
