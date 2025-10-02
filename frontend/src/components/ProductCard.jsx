import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <button className="add-to-cart-btn">Add to Cart</button>
      {/* Optional: Add a quick view or wishlist button */}
    </div>
  );
};

export default ProductCard;