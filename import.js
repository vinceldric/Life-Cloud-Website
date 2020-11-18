const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const dbSeed = require(`./seeds/clouds.js`);
const dbSeed = require(`./seeds/subscribers.js`);

// Define model
const Cloud = require(`./models/cloud.js`);
const Subscriber = require(`./models/subscriber.js`);

/*******************************/
/* Mongoose/MongoDB Connection */
/*******************************/

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(err){
  console.log(`Connection Error: ${err.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');

});

Cloud.insertMany(dbSeed, function(err, cloud) {
  console.log('Data import completed.')
  mongoose.connection.close();
});
Subscriber.insertMany(dbSeed, function(err, subscriber) {
  console.log('Data import completed.')
  mongoose.connection.close();
});