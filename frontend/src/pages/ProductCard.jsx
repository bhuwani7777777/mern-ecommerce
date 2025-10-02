// In frontend/src/components/ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* The 'product.image' is now the resolved URL from the import in HomePage.jsx */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
      />
      
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;