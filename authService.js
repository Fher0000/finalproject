const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (email, password) => {
  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: 'Email already exists' };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    return { success: true, message: 'User registered successfully' };
  } catch (error) {
    return { success: false, message: 'Something went wrong' };
  }
};

const authenticateUser = async (email, password) => {
  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return { success: false, message: 'Invalid password' };
    }

    return { success: true, message: 'User authenticated successfully' };
  } catch (error) {
    return { success: false, message: 'Something went wrong' };
  }
};

module.exports = { registerUser, authenticateUser };
