import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import"./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Mock authentication
    if (email === "test@example.com" && password === "password") {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/"); // Redirect to homepage
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p className="auth-link">
  Don’t have an account? <Link to="/register">Register here</Link>
</p>

      </div>
    </div>
  );
};

export default LoginPage;
