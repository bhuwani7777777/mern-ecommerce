import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import "./CategoryPage.css";

import menshirt1 from "../imgs/Men/Shirts/menshirt1.jpg";
import menshirt2 from "../imgs/Men/Shirts/menshirt2.jpg";
import menshirt3 from "../imgs/Men/Shirts/menshirt3.jpeg";

const MenShirts = () => {
  const { addToCart } = useCart();

  const shirts = [
    { id: 1, name: "Casual Cotton Shirt", price: 1499, img: menshirt1 },
    { id: 2, name: "Formal White Shirt", price: 1799, img: menshirt2 },
    { id: 3, name: "Denim Blue Shirt", price: 1999, img: menshirt3 },
  ];

  return (
    <>
      <Header />
      <div className="category-page">
        <h2>Men’s Shirts</h2>
        <div className="product-grid">
          {shirts.map((shirt) => (
            <div className="product-card" key={shirt.id}>
              <img src={shirt.img} alt={shirt.name} className="product-image" />
              <h3>{shirt.name}</h3>
              <p>Rs. {shirt.price}</p>
              <button onClick={() => addToCart(shirt)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenShirts;
