import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Product not found.');
        setLoading(false);
      }
    };
    if (id) loadProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const inStock = product.countInStock > 0;

  return (
    <div>
      <Header />
      <div style={{ padding: '40px' }}>
        <button onClick={() => navigate(-1)}>&larr; Go Back</button>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} width="400" />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Status: {inStock ? 'In Stock' : 'Out of Stock'}</p>
        {inStock && (
          <>
            <label>Qty:</label>
            <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>{x + 1}</option>
              ))}
            </select>
            <button onClick={() => { addToCart(product._id, qty); navigate('/cart'); }}>Add to Cart</button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
