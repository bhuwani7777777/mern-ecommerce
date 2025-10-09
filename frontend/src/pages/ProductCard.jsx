import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...product, qty: 1 });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); // hide after 2s
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-details">
        <h4>{product.name}</h4>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {showNotification && <div className="notification">Added to cart!</div>}
      </div>
    </div>
  );
};

export default ProductCard;
