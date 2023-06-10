const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost/polling')
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

const db=mongoose.connection  
module.exports = db;
