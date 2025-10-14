import React from "react";
import { useCart } from "../../context/CartContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./WomenCategory.css";

// Import images from src folder
import dress1 from "../imgs/Womens/Dresses/dress1.jpg";
import dress2 from "../imgs/Womens/Dresses/dress2.jpg";
import dress3 from "../imgs/Womens/Dresses/dress3.jpg";

const WomenDresses = () => {
  const { addToCart } = useCart();

  const dresses = [
    { id: 1, name: "Floral Summer Dress", price: 1999, img: dress1 },
    { id: 2, name: "Evening Gown", price: 2999, img: dress2 },
    { id: 3, name: "Casual Dress", price: 1499, img: dress3 },
  ];

  return (
    <div className="women-category-container">
      <Header />
      <h2 className="page-title">Women's Dresses</h2>
      <div className="product-grid">
        {dresses.map((dress) => (
          <div className="product-card" key={dress.id}>
            <img src={dress.img} alt={dress.name} className="product-image" />
            <h3>{dress.name}</h3>
            <p>Rs. {dress.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(dress)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WomenDresses;
