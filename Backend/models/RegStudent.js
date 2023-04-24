const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true },

  email: {
     type: String, 
    required: true, unique: true },
  phone: { type: String, required: true },
  program: { type: String, required: true },
});

module.exports = mongoose.model('Student', studentSchema);
