const mongoose = require('mongoose');

const subsSchema = new mongoose.Schema(
  {
    id:           Number,
    name:         String,
    email:        String,
  }
);

module.exports = mongoose.model('Subscribe', subsSchema);