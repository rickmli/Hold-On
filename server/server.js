const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
const db = require('./src/config/db');
db.connect();

// Routes
const exampleRoutes = require('./src/routes/exampleRoutes');
app.use('/api/examples', exampleRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});