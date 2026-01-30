import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

/* ================= USER PAGES ================= */
import HomePage from "./pages/HomePage";
import ProductMen from "./pages/ProductsMen";
import ProductWomen from "./pages/ProductsWomen";
import NewArrivals from "./pages/NewArrivals";
import CartScreen from "./pages/CartScreen";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

/* ================= MEN CATEGORY ================= */
import MenShirts from "./pages/MENS/MenShirts";
import MenPants from "./pages/MENS/MenPants";
import MenShoes from "./pages/MENS/MenShoes";

/* ================= WOMEN CATEGORY ================= */
import WomenDresses from "./pages/WOMENS/WomenDresses";
import WomenTops from "./pages/WOMENS/WomenTops";
import WomenShoes from "./pages/WOMENS/WomenShoes";

/* ================= ADMIN PAGES ================= */
import AdminDashboard from "./admin/AdminDashboard";
import UserManagement from "./admin/UserManagement";
import ProductManagement from "./admin/ProductManagement";
import OrderManagement from "./admin/OrderManagement";

import CheckoutPage from "./pages/CheckoutPage";


/* ================= APP ================= */
function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>

          {/* ===== MAIN WEBSITE ===== */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/men" element={<ProductMen />} />
          <Route path="/women" element={<ProductWomen />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/cart" element={<CartScreen />} />

          {/* ===== MEN CATEGORIES ===== */}
          <Route path="/men-shirts" element={<MenShirts />} />
          <Route path="/men-pants" element={<MenPants />} />
          <Route path="/men-shoes" element={<MenShoes />} />

          {/* ===== WOMEN CATEGORIES ===== */}
          <Route path="/women-dresses" element={<WomenDresses />} />
          <Route path="/women-tops" element={<WomenTops />} />
          <Route path="/women-shoes" element={<WomenShoes />} />

          {/* ===== AUTH ===== */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* ===== ADMIN (NO PROTECTION – SAFE BUILD) ===== */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/products" element={<ProductManagement />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/pages/checkout" element={<CheckoutPage />} />


          {/* ===== 404 ===== */}
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
