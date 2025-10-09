import React from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./CategoryPage.css";

const MenShoes = () => {
  const shoes = [
    {
      _id: "sh1",
      name: "Nike Air Max",
      price: 120,
      image: "https://images.unsplash.com/photo-1618354690384-9b4dfbb60ed1?w=400",
    },
    {
      _id: "sh2",
      name: "Adidas Ultraboost",
      price: 140,
      image: "https://images.unsplash.com/photo-1585433060503-719f20fa1f1c?w=400",
    },
    {
      _id: "sh3",
      name: "Puma RS-X",
      price: 110,
      image: "https://images.unsplash.com/photo-1618354689627-827f7c5f4a6f?w=400",
    },
  ];

  return (
    <>
      <Header />
      <div className="category-page">
        <h2>Men’s Shoes</h2>
        <div className="product-grid">
          {shoes.map((item) => (
            <div className="product-card" key={item._id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenShoes;
