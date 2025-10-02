// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows server to read JSON from client

// MongoDB Connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
    .then(() => console.log("MongoDB connection established successfully"))
    .catch(err => console.error("MongoDB connection error:", err));

// Basic Test Route
app.get('/', (req, res) => {
  res.send('MERN Backend is running!');
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});