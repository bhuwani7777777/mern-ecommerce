import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import "./RegisterPage.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const passwordStrength = password.length < 6 ? "Weak" : "Strong";

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
=======
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
>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
      return;
    }

    try {
<<<<<<< HEAD
      setLoading(true);
      setError("");

      await axios.post("http://localhost:5000/api/register", {
        name,
=======
      const res = await axios.post("http://localhost:5000/api/login", {
>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
        email,
        password,
      });

<<<<<<< HEAD
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
=======
      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/"); // Redirect to homepage
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
    }
  };

  return (
<<<<<<< HEAD
    <div className="register-page">
      <div className="register-card">
        <img src="/images/logo.png" alt="Logo" className="register-logo" />

        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">
          Join us and start your premium experience
        </p>

        {error && <p className="register-error">{error}</p>}

        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

=======
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
>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
          />

          <div
            className={`password-strength ${
              passwordStrength === "Strong" ? "strong" : "weak"
            }`}
          >
            Password strength: {passwordStrength}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="register-login">
          Already have an account? <Link to="/login">Login</Link>
=======
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-register">
          Don't have an account? <Link to="/register">Register</Link>
>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
        </p>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default RegisterPage;
=======
export default LoginPage;
>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
