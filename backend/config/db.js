const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'thefolio',   // 👈 force the database name
    });
    console.log(`MongoDB Connected: ${conn.connection.host}, DB: thefolio`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
