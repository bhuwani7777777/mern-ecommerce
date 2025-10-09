// src/admin/AdminDashboard.jsx
import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <h1>Welcome, Admin</h1>
        <div className="dashboard-cards">
          <div className="card total-users">Users: 50</div>
          <div className="card total-products">Products: 120</div>
          <div className="card total-orders">Orders: 75</div>
          <div className="card total-revenue">Revenue: $12,500</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
