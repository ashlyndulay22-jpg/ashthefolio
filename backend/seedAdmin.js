const bcrypt = require('bcryptjs');
require('dotenv').config();
const connectDB = require('./config/db');
const User = require('./models/User');

connectDB().then(async () => {
  try {
    await User.deleteOne({ email: 'admin@thefolio.com' });

    const hashedPassword = await bcrypt.hash('Admin@0701', 10);

    const user = await User.create({
      name: 'TheFolio Admin',
      email: 'admin@thefolio.com',
      password: hashedPassword,
      role: 'admin',
    });

    console.log('Admin account created successfully!');
    console.log('Email:    admin@thefolio.com');
    console.log('Password: Admin@0701');
    console.log('User ID:', user._id);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}).catch(err => {
  console.error('Connection Error:', err.message);
  process.exit(1);
});
