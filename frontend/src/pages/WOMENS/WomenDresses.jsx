import React from "react";
import { useCart } from "../../context/CartContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./WomenCategory.css"; // You can create a shared CSS for women pages

const WomenDresses = () => {
  const { addToCart } = useCart();

  const dresses = [
    { id: 1, name: "Floral Summer Dress", price: 1999, img: "/images/women-dress1.jpg" },
    { id: 2, name: "Evening Gown", price: 2999, img: "/images/women-dress2.jpg" },
    { id: 3, name: "Casual Dress", price: 1499, img: "/images/women-dress3.jpg" },
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
            <button onClick={() => addToCart(dress)} className="add-to-cart">
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
