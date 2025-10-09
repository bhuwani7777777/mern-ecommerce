import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import '../pages/ProductPage.css'; // Import CSS file

const ProductWomen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.filter(p => p.category.toLowerCase() === 'women'));
        setLoading(false);
      } catch (err) {
        setError('Failed to load products.');
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.subcategory?.toLowerCase() === filter);

  return (
    <div className="homepage">
      <Header />

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Women's Collection</h1>
          <p>Discover the latest trends in women's fashion with premium quality and timeless designs.</p>
          <button className="shop-btn">Shop Now</button>
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
          className={filter === 'dresses' ? 'active' : ''} 
          onClick={() => setFilter('dresses')}
        >
          Dresses
        </button>
        <button 
          className={filter === 'tops' ? 'active' : ''} 
          onClick={() => setFilter('tops')}
        >
          Tops
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
          {!loading && filteredProducts.map(p => <ProductCard key={p._id} product={p} />)}
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <h2>Exclusive Women's Picks</h2>
        <p>Handpicked styles that redefine fashion and elegance.</p>
        <div className="featured-cards">
          <div className="featured-item">✨ Premium Dresses</div>
          <div className="featured-item">👠 Luxury Shoes</div>
          <div className="featured-item">👜 Stylish Bags</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductWomen;
