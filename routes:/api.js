const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define your API routes here
router.post('/register', userController.registerUser);
router.get('/users', userController.getAllUsers);
router.post('/login', userController.loginUser);
router.get('/profile/:userId', userController.getUserProfile);
router.put('/profile/:userId', userController.updateUserProfile);

module.exports = router;