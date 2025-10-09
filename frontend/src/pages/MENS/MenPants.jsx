import React from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./CategoryPage.css";

const MenPants = () => {
  const pants = [
    {
      _id: "p1",
      name: "Slim Fit Jeans",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1586449480478-4d4cbf1b3213?w=400",
    },
    {
      _id: "p2",
      name: "Casual Chinos",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1600181952914-05c4270e2c8b?w=400",
    },
    {
      _id: "p3",
      name: "Classic Black Trousers",
      price: 75.99,
      image: "https://images.unsplash.com/photo-1593032465174-5a4bff2e6a91?w=400",
    },
  ];

  return (
    <>
      <Header />
      <div className="category-page">
        <h2>Men’s Pants</h2>
        <div className="product-grid">
          {pants.map((item) => (
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

export default MenPants;
