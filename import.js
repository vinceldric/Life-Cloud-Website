// Load Dependencies
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


// Import Seed Data
const dbSeed = require(`./seeds/clouds.js`);


// Define Model
const Cloud = require(`./models/cloud.js`);


// Mongoose/MongoDB Connection
mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(err) {
  console.log(`Connection Error: ${err.message}`);
});

db.once('open', function() {
  console.log('Connected to DB...');
});

Cloud.insertMany(dbSeed, function(err, cloud) {
  console.log('Data import completed.');
  mongoose.connection.close();
});