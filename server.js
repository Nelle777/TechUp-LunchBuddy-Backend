require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(dirname, 'public')));
// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));
// User Schema
const userSchema = new mongoose.Schema({
    // ... user schema definition
});
const User = mongoose.model('User', userSchema);
// API Routes
app.post('/api/register', async (req, res) => {
    // Register logic
});
// Get all users
app.get('/api/users', async (req, res) => {
    // Get users logic
});
// Login route
app.post('/api/login', async (req, res) => {
    // Login logic
});
// Get user profile
app.get('/api/profile/:userId', async (req, res) => {
    // Get profile logic
});
// Save user changes
app.put('/api/profile/:userId', async (req, res) => {
    // Update profile logic
});
// Serve the pairing.html file
app.get('/pairing', (req, res) => {
    res.sendFile(path.join(dirname, 'public', 'pairing.html'));
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});