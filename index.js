/*
    Program: E-commerce API
    Programmer: Fher Elaissa Castro & Desiree Maniflor
    Section: AN22
    Start Date: July 16, 2023
    End Date: July 16, 2023

*/

const express = require('express');
const authRoutes = require('./Controllers/authRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
