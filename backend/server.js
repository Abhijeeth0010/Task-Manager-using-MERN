require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests (frontend to backend)
app.use(express.json()); // Parse incoming JSON payloads

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/taskapp';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB locally'))
  .catch((err) => console.error('❌ Failed to connect to MongoDB', err));

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('Task Management API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
