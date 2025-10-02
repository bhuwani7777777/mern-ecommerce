import React from 'react';
import ProductCard from './ProductCard'; 
// Assuming you have components for Header, Footer, and HeroBanner
// You would import them here:
// import Header from './Header';
// import Footer from './Footer';
import './styles.css';


// --- Mock Data ---
// In a real application, you would fetch this data from an API.
const featuredProducts = [
  { id: 1, name: "Air Zoom Runner", price: 129.99, image: "/images/shoe1.jpg", category: "Running" },
  { id: 2, name: "Classic Leather Sneaker", price: 89.99, image: "/images/shoe2.jpg", category: "Casual" },
  { id: 3, name: "Trail Blazer Boot", price: 155.00, image: "/images/shoe3.jpg", category: "Outdoor" },
  { id: 4, name: "Basket-Pro High-Top", price: 110.50, image: "/images/shoe4.jpg", category: "Basketball" },
];
// -----------------


const HomePage = () => {

  // --- Mock Components for Structure (Replace with actual imports) ---
  const Header = () => (
    <header className="main-header">
      <h1 className="logo">👟 OG Collection</h1>
      <nav className="nav-links">
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/sale">Sale</a>
        <a href="/cart">Cart (0)</a>
      </nav>
    </header>
  );

  const HeroBanner = () => (
    <section className="hero-banner">
      <div className="hero-content">
        <h2>Step Into Style. **New Arrivals** **Up to 40% Off!**</h2>
        <p>Explore the freshest collection of running, casual, and formal footwear.</p>
        <a href="/shop" className="shop-now-btn">Shop Now **→**</a>
      </div>
      {/*  */}
    </section>
  );
  // -------------------------------------------------------------------


  return (
    <div className="homepage">
      <Header />

      <main>
        <HeroBanner />

        <hr/>

        {/* Featured Products Section */}
        <section className="featured-products">
          <h2 className="section-title">🔥 **Featured Sneakers**</h2>
          <div className="product-grid">
            {featuredProducts.map(product => (
              // Pass the product data to the reusable ProductCard
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <hr/>

        {/* **Call to Action Section (e.g., newsletter signup)** */}
        <section className="cta-section">
          <h3>Never Miss a Drop</h3>
          <p>Sign up for our newsletter to get exclusive deals and early access.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      {/* You'd typically include a Footer component here */}
      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} SoleStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;