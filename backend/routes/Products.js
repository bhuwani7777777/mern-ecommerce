import express from "express";
import mysql from "mysql2";

const router = express.Router();

// ✅ MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "your_database_name",
});

// ✅ Add new product
router.post("/add", (req, res) => {
  const { name, image, details, description, price, category } = req.body;
  const sql =
    "INSERT INTO products (name, image, details, description, price, category) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [name, image, details, description, price, category], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Product added successfully!" });
  });
});

// ✅ Get all products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// ✅ Delete a product by ID
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Product deleted successfully!" });
  });
});

export default router;
