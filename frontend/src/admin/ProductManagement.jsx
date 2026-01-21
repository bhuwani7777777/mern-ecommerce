// src/admin/ProductManagement.jsx
import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin.css";

const sampleProducts = [
  { id: 1, name: "Nike Air Max", price: 150, category: "Men" },
  { id: 2, name: "Adidas Ultraboost", price: 180, category: "Men" },
  { id: 3, name: "Women Dress", price: 75, category: "Women" },
];

const ProductManagement = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <h1>Product Management</h1>
        <button className="add-btn">Add New Product</button>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleProducts.map(prod => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.category}</td>
                <td>
                  <button className="edit-btn">Edit</button>
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

export default ProductManagement;
