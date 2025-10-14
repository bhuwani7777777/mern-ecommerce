// src/admin/UserManagement.jsx
import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin.css";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
      alert("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Start editing user
  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setFormData({ name: user.name, email: user.email, role: user.role });
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingUser(null);
    setFormData({ name: "", email: "", role: "" });
  };

  // Update user
  const handleUpdate = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/users/${id}`, formData);
      alert(res.data.message);
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Update failed");
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await axios.delete(`http://localhost:5000/api/users/${id}`);
      alert(res.data.message);
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Delete failed");
    }
  };

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
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <select name="role" value={formData.role} onChange={handleChange}>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  ) : (
                    user.role
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <>
                      <button onClick={() => handleUpdate(user.id)} className="edit-btn">
                        Save
                      </button>
                      <button onClick={handleCancel} className="delete-btn">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(user)} className="edit-btn">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="delete-btn">
                        Delete
                      </button>
                    </>
                  )}
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
