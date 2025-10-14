import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });

      navigate("/login"); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-overlay"></div>
      <div className="register-wrapper">
        {/* Left Form Section */}
        <div className="register-container">
          <img src="/images/logo.png" alt="Logo" className="register-logo" />

          <h2 className="register-title">Create Account</h2>
          <p className="register-subtitle">Join us and start shopping!</p>

          {error && <p className="register-error">{error}</p>}

          <form className="register-form" onSubmit={handleRegister}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="register-btn">
              Register
            </button>
          </form>

          <p className="register-login">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>

        {/* Right Description Section */}
        <div className="register-info">
          <h2>Welcome to OG Collection</h2>
          <p>
            OG Collection is your go-to online store for premium fashion and lifestyle products.
            Explore our unique selection of clothing, shoes, and accessories tailored for
            trendsetters like you.
          </p>
          <ul>
            <li>Exclusive Men & Women Collections</li>
            <li>High-Quality Fashion Items</li>
            <li>Fast Delivery & Easy Returns</li>
            <li>Secure Payments</li>
          </ul>
          <img
            src="/images/logo.png"
            alt="OG Collection"
            className="register-side-img"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
