// src/admin/UserManagement.jsx
import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin.css";

const sampleUsers = [
  { id: 1, name: "Bhanu", email: "bhanu@example.com" },
  { id: 2, name: "Rita", email: "rita@example.com" },
  { id: 3, name: "Suresh", email: "suresh@example.com" },
];

const UserManagement = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-main">
        <h1>User Management</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
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

export default UserManagement;
