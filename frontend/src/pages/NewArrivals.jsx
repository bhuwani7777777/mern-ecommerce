import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import "./NewArrivals.css";

const newArrivalProducts = [
  {
    _id: "101",
    name: "Nike Air Zoom",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80", // Nike Air Zoom shoe
  },
  {
    _id: "102",
    name: "Adidas Superstar",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=80", // Adidas Superstar shoe
  },
{
  _id: "103",
  name: "Casual Hoodie",
  price: 55,
  image:
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80", // Grey casual hoodie
},
{
  _id: "104",
  name: "Denim Jacket",
  price: 90,
  image:
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=500&q=80", // Stylish blue denim jacket
},

];

const NewArrivals = () => {
  const { addToCart } = useCart();

  return (
    <div className="new-arrivals-page">
      <Header />

      {/* Hero Banner */}
      <section className="hero-banner new-arrivals-banner">
        <div className="hero-content">
          <h1>✨ New Arrivals</h1>
          <p>Check out the latest additions to our collection!</p>
          <button className="explore-btn">Shop Now</button>
        </div>
      </section>

      {/* Products */}
      <section className="product-section">
        <h2 className="section-title">Latest Products</h2>
        <div className="product-grid">
          {newArrivalProducts.map((product) => (
            <div key={product._id} className="product-card">
              <div className="product-img-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
              </div>
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                🛒 Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured CTA */}
      <section className="featured-cta">
        <h2>🔥 Limited Stock Available!</h2>
        <p>Don’t miss out on these exclusive arrivals — shop while they last!</p>
        <button className="shop-btn">Browse Collection</button>
      </section>

      <Footer />
    </div>
  );
};

export default NewArrivals;
