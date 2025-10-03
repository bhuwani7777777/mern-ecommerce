import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductMen from './pages/ProductsMen';
import ProductWomen from './pages/ProductsWomen';
import CartScreen from './pages/CartScreen';
import LoginPage from './pages/LoginPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/men" element={<ProductMen />} />
          <Route path="/women" element={<ProductWomen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
