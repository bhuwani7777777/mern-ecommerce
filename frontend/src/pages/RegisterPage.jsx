import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const passwordStrength = password.length < 6 ? "Weak" : "Strong";

=======
  const navigate = useNavigate();

>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
<<<<<<< HEAD
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
=======
      setError("Please fill in all fields.");
>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
      return;
    }

    try {
<<<<<<< HEAD
      setLoading(true);
      setError("");

=======
>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
      await axios.post("http://localhost:5000/api/register", {
        name,
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
      navigate("/login"); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
    }
  };

  return (
    <div className="register-page">
<<<<<<< HEAD
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

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        </p>
=======
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
>>>>>>> 20808e07e92c273c0a254928993adc25adef9acc
      </div>
    </div>
  );
};

export default RegisterPage;
