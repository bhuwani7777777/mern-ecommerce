import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// User Pages
import HomePage from "./pages/HomePage";
import ProductMen from "./pages/ProductsMen";
import ProductWomen from "./pages/ProductsWomen";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartScreen from "./pages/CartScreen";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import NewArrivals from "./pages/NewArrivals";

// Men Category Pages
import MenShirts from "./pages/MENS/MenShirts";
import MenPants from "./pages/MENS/MenPants";
import MenShoes from "./pages/MENS/MenShoes";

import WomenDresses from "./pages/WOMENS/WomenDresses";
import WomenTops from "./pages/WOMENS/WomenTops";
import WomenShoes from "./pages/WOMENS/WomenShoes";

// Admin Pages
import AdminDashboard from "./admin/AdminDashboard";
import UserManagement from "./admin/UserManagement";
import ProductManagement from "./admin/ProductManagement";
import OrderManagement from "./admin/OrderManagement";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/men" element={<ProductMen />} />
          <Route path="/women" element={<ProductWomen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />

          {/* Men Dropdown Pages */}
          <Route path="/men-shirts" element={<MenShirts />} />
          <Route path="/men-pants" element={<MenPants />} />
          <Route path="/men-shoes" element={<MenShoes />} />

          {/* Women Dropdown Pages */}
          <Route path="/women-dresses" element={<WomenDresses />} />
          <Route path="/women-tops" element={<WomenTops />} />
          <Route path="/women-shoes" element={<WomenShoes />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/products" element={<ProductManagement />} />
          <Route path="/admin/orders" element={<OrderManagement />} />

          {/* Catch-All Route */}
          <Route
            path="*"
            element={
              <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                Page Not Found
              </h2>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
