import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import "./CategoryPage.css";

import menshoes1 from "../imgs/Men/Shoes/shoe1.jpg";
import menshoes2 from "../imgs/Men/Shoes/shoe2.jpg";
import menshoes3 from "../imgs/Men/Shoes/shoe3.jpg";

const MenShoes = () => {
  const { addToCart } = useCart();

  const shoes = [
    { id: 1, name: "Nike Air Max", price: 120, img: menshoes1 },
    { id: 2, name: "Adidas Ultraboost", price: 140, img: menshoes2 },
    { id: 3, name: "Puma RS-X", price: 110, img: menshoes3 },
  ];

  return (
    <>
      <Header />
      <div className="category-page">
        <h2>Men’s Shoes</h2>
        <div className="product-grid">
          {shoes.map((shoe) => (
            <div className="product-card" key={shoe.id}>
              <img src={shoe.img} alt={shoe.name} className="product-image" />
              <h3>{shoe.name}</h3>
              <p>Rs. {shoe.price}</p>
              <button onClick={() => addToCart(shoe)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenShoes;
