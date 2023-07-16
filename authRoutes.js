const express = require('express');
const { registerUser, authenticateUser } = require('./authControllers');


const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User authentication route
router.post('/login', authenticateUser);

module.exports = router;
