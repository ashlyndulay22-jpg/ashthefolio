// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect using the Atlas URI from .env
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB Atlas connected successfully');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1); // Stop the server if DB fails
  }
};

module.exports = connectDB;