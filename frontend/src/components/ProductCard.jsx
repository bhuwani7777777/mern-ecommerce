import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image || 'https://placehold.co/200x200'}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <Link to={`/product/${product._id}`} className="add-to-cart-btn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
