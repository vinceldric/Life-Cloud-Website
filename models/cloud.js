const mongoose = require('mongoose');

const cloudSchema = new mongoose.Schema(
  {
    id:           Number,
    title:        String,
    description:  String,
    imagePath:    String
  }
);

module.exports = mongoose.model('Cloud', cloudSchema);