// src/pages/MENS/MenShirts.jsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import "../../pages/ProductMen.css"; // Use existing CSS or create MenShirts.css

const MenShirts = () => {
  const { addToCart } = useCart();

  const shirts = [
    { id: 1, name: "Casual Cotton Shirt", price: 1499, img: "/images/men-shirt1.jpg" },
    { id: 2, name: "Formal White Shirt", price: 1799, img: "/images/men-shirt2.jpg" },
    { id: 3, name: "Denim Blue Shirt", price: 1999, img: "/images/men-shirt3.jpg" },
  ];

  return (
    <div className="men-shirts-page">
      <Header />

      <section className="hero-banner men-banner">
        <div className="hero-content">
          <h1>Men's Shirts</h1>
          <p>Stylish shirts for every occasion — casual, formal, and trendy.</p>
        </div>
      </section>

      <section className="product-section">
        <div className="product-grid">
          {shirts.map((shirt) => (
            <div className="product-card" key={shirt.id}>
              <img src={shirt.img} alt={shirt.name} className="product-image" />
              <h3 className="product-name">{shirt.name}</h3>
              <p className="product-price">Rs. {shirt.price}</p>
              <button className="add-to-cart" onClick={() => addToCart({ 
                _id: shirt.id, 
                name: shirt.name, 
                price: shirt.price, 
                image: shirt.img 
              })}>
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

export default MenShirts;
