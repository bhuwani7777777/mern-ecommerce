// src/admin/OrderManagement.jsx
import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin.css";

const sampleOrders = [
  { id: 1, user: "Bhanu", total: 150, status: "Pending" },
  { id: 2, user: "Rita", total: 200, status: "Completed" },
  { id: 3, user: "Suresh", total: 300, status: "Shipped" },
];

const OrderManagement = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <h1>Order Management</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Total ($)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.user}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td>
                  <button className="edit-btn">Update Status</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
