import React from "react";
import { useCart } from "../../context/CartContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./WomenCategory.css";

const WomenShoes = () => {
  const { addToCart } = useCart();

  const shoes = [
    { id: 1, name: "Heeled Sandals", price: 1999, img: "/images/women-shoe1.jpg" },
    { id: 2, name: "Casual Sneakers", price: 1499, img: "/images/women-shoe2.jpg" },
    { id: 3, name: "Leather Flats", price: 1299, img: "/images/women-shoe3.jpg" },
  ];

  return (
    <div className="women-category-container">
      <Header />
      <h2 className="page-title">Women's Shoes</h2>
      <div className="product-grid">
        {shoes.map((shoe) => (
          <div className="product-card" key={shoe.id}>
            <img src={shoe.img} alt={shoe.name} className="product-image" />
            <h3>{shoe.name}</h3>
            <p>Rs. {shoe.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WomenShoes;
