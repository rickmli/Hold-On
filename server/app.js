require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const exampleRoutes = require("./routes/exampleRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/examples", exampleRoutes);

module.exports = app;
