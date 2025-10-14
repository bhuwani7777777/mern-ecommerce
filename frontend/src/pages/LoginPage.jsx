import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/"); // Redirect to homepage
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-overlay"></div>
      <div className="login-container">
        <img src="/images/logo.png" alt="Logo" className="login-logo" />

        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to your account</p>

        {error && <p className="login-error">{error}</p>}

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-register">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
