import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import cart context

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
          MERN Shop
        </Link>
      </div>
      <nav>
        <Link to="/cart" style={styles.link}>
          Cart ({cartCount})
        </Link>
        <Link to="/login" style={{ ...styles.link, marginLeft: '15px' }}>
          Login
        </Link>
      </nav>
    </header>
  );
};

// Basic inline styles for clarity (you would typically use a separate CSS file)
const styles = {
  header: {
    background: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
};

export default Header;