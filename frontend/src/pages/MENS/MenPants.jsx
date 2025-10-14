import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import "./CategoryPage.css";

import menpants1 from "../imgs/Men/Pants/pant1.jpg";
import menpants2 from "../imgs/Men/Pants/pant2.jpg";
import menpants3 from "../imgs/Men/Pants/pant3.jpeg";

const MenPants = () => {
  const { addToCart } = useCart();

  const pants = [
    { id: 1, name: "Slim Fit Jeans", price: 1699, img: menpants1 },
    { id: 2, name: "Casual Chinos", price: 1599, img: menpants2 },
    { id: 3, name: "Classic Black Trousers", price: 1799, img: menpants3 },
  ];

  return (
    <>
      <Header />
      <div className="category-page">
        <h2>Men’s Pants</h2>
        <div className="product-grid">
          {pants.map((pant) => (
            <div className="product-card" key={pant.id}>
              <img src={pant.img} alt={pant.name} className="product-image" />
              <h3>{pant.name}</h3>
              <p>Rs. {pant.price}</p>
              <button onClick={() => addToCart(pant)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenPants;
