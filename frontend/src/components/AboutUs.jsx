import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>E-Shop</strong>, your trusted destination for the latest
          fashion, accessories, and more.  
          Our mission is to provide customers with high-quality products at unbeatable
          prices while ensuring a smooth and enjoyable shopping experience.
        </p>

        <h2>Our Story</h2>
        <p>
          Founded in 2025, E-Shop started as a small online store and has grown into
          a leading platform that connects thousands of shoppers with the latest trends.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Curated, high-quality products</li>
          <li>✔ Affordable prices with exclusive deals</li>
          <li>✔ Fast delivery & easy returns</li>
          <li>✔ 24/7 customer support</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
