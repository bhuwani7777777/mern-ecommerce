import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // TODO: Replace with your backend authentication call
    if (email === "test@example.com" && password === "password") {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/"); // Redirect to homepage after login
    } else {
      setError("Invalid email or password.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      backgroundColor: "#f4f4f4",
      padding: "20px",
    },
    formBox: {
      width: "100%",
      maxWidth: "400px",
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "1.8em",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1em",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#ff4500",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "1em",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "10px",
    },
    error: {
      color: "red",
      textAlign: "center",
      marginBottom: "10px",
    },
    link: {
      display: "block",
      marginTop: "15px",
      textAlign: "center",
      fontSize: "0.9em",
      color: "#555",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.title}>Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <a href="/register" style={styles.link}>
          Don’t have an account? Register
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
