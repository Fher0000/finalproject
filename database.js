const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    // Set up the database connection
    await mongoose.connect('`mongodb+srv://admin:admin123@sandbox.vbdb4cc.mongodb.net/an22_sample_database?retryWrites=true&w=majority`', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};

module.exports = connectToDatabase;
