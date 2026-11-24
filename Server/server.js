const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Loads .env file

const app = express();

// Middleware
app.use(cors()); // Allows my React app to talk to this server
app.use(express.json()); 

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/chemar';
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.log('❌ MongoDB Connection Error:', err));

// --- ROUTES ---
//Import the route file you just created
const elementRoutes = require('./routes/elementRoutes');

//Tell the app to use this route for any URL starting with /api/elements
app.use('/api/elements', elementRoutes);

//Basic test route just to check if the server is working in the browser
app.get('/', (req, res) => {
    res.send('ChemAR Backend is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});