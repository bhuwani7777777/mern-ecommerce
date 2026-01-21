import React from "react";
import { useCart } from "../../context/CartContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./WomenCategory.css";

// Import images from src folder
import top1 from "../imgs/Womens/Tops/tops1.jpeg";
import top2 from "../imgs/Womens/Tops/tops2.jpg";
import top3 from "../imgs/Womens/Tops/tops3.jpg";

const WomenTops = () => {
  const { addToCart } = useCart();

  const tops = [
    { id: 1, name: "Casual Cotton Top", price: 799, img: top1 },
    { id: 2, name: "Silk Blouse", price: 1299, img: top2 },
    { id: 3, name: "Graphic Tee", price: 699, img: top3 },
  ];

  return (
    <div className="women-category-container">
      <Header />
      <h2 className="page-title">Women's Tops</h2>
      <div className="product-grid">
        {tops.map((top) => (
          <div className="product-card" key={top.id}>
            <img src={top.img} alt={top.name} className="product-image" />
            <h3>{top.name}</h3>
            <p>Rs. {top.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(top)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WomenTops;
