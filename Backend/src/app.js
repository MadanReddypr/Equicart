const express = require("express");
const cors = require("cors");
require("dotenv").config();

// ROUTES
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("EquiCart Backend Running 🚀");
});

module.exports = app;