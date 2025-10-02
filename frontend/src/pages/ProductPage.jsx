// src/pages/ProductPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../services/api";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Simple Rating Component
const Rating = ({ value, text, color = "#f8e825" }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color }}>
        <i
          className={
            value >= i
              ? "fas fa-star"
              : value >= i - 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
    );
  }
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      {stars} <span style={{ marginLeft: "10px", color: "#6c757d" }}>{text}</span>
    </div>
  );
};

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Product not found or failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    if (id) loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, qty);
      navigate("/cart");
    }
  };

  if (loading)
    return (
      <>
        <Header />
        <h2 style={{ textAlign: "center", padding: "50px" }}>Loading product...</h2>
        <Footer />
      </>
    );

  if (error)
    return (
      <>
        <Header />
        <h2 style={{ textAlign: "center", color: "red", padding: "50px" }}>{error}</h2>
        <Footer />
      </>
    );

  if (!product)
    return (
      <>
        <Header />
        <h2 style={{ textAlign: "center", padding: "50px" }}>Product Not Found</h2>
        <Footer />
      </>
    );

  const inStock = product.countInStock > 0;

  return (
    <>
      <Header />
      <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "8px 15px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          &larr; Go Back
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          {/* Product Image */}
          <div>
            <img
              src={product.image || "https://via.placeholder.com/400x300"}
              alt={product.name}
              style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{product.name}</h1>
            <p style={{ fontStyle: "italic", marginBottom: "10px" }}>{product.category}</p>

            <Rating
              value={product.rating || 0}
              text={`${product.numReviews || 0} reviews`}
            />

            <p style={{ margin: "20px 0" }}>{product.description}</p>

            <div
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <p>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span style={{ color: inStock ? "green" : "red" }}>
                  {inStock ? `In Stock (${product.countInStock})` : "Out of Stock"}
                </span>
              </p>

              {inStock && (
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="qty" style={{ marginRight: "10px" }}>
                    Quantity:
                  </label>
                  <select
                    id="qty"
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                onClick={handleAddToCart}
                disabled={!inStock}
                style={{
                  padding: "12px 25px",
                  backgroundColor: inStock ? "#007bff" : "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: inStock ? "pointer" : "not-allowed",
                }}
              >
                {inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
