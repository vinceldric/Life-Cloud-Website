//Load dependencies
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
require('dotenv').config();

//import model
// const  = require(``);

//Create express app
const app = express();

app.set('view engine', 'ejs');

//app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

//Connect to DB
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

//index
app.get('/', function(req, res) {
  res.send('');
})

//JSON endpoint of array of objects
app.get('/gallery', function(req, res) {
})

//JSON endpoint of specified ID individually
app.get('/subscribe', function(req, res) {
})

//Add more middleware
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

//Set port preferrence with default
const PORT = process.env.PORT || 3000;

//Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});