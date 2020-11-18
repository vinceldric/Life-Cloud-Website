//Load dependencies
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
require('dotenv').config();

//import model
const Cloud = require(`./models/cloud.js`);
const Subscribe = require(`./models/subscriber.js`);

//Create express app
const app = express();

app.set('view engine', 'ejs');

//app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Parse all requests for url encoded form data.
app.use(express.urlencoded({ extended: true }));

//Connect to DB
// mongoose.connect(process.env.MONGODB_URL, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// });

// var db = mongoose.connection;

// db.on('error', function(err){
//   console.log(`Connection Error: ${err.message}`)
// });

// db.once('open', function() {
//   console.log('Connected to DB...');

// });

//HTML Endpoints
//index
app.get('/', function(req, res){
  res.render('pages/index', {
    title: "Life Cloud",
    current: "pg-index",
    tagline: ""})
});

//gallery page
app.get('/gallery', function(req, res){
  res.render('pages/gallery', {
    title: "Gallery",
    current: "pg-gallery",
    tagline: "Take a look on our gallery"})
});

app.get('/gallery/:id',function(req, res){
  res.send(`<img src="https://picsum.photos/id/${req.params.id}/750" alt="Lorem Picsum Image">`)
});

//subscribe page
app.get('/subscribe', function(req, res){
  res.render('pages/subscribe', {
    title: "Subscribe", 
    current: "pg-subscribe",
    tagline: "Subscribe to our newsletter"})
});

//JSON Endpoints
//Gallery
app.get('/api/clouds', function(req, res){
  Cloud.find({}, function(err, data) {
    if(err) {
      res.send('<p>Could not retrieve clouds.</p><p>Please import \'cloud\' to database.</p>');
    }else {
      res.json(data);
    }
  });
})

app.get('/api/v0/clouds/:id', function(req, res) {
  let cloudId = req.params.id;
  Cloud.findOne({id: cloudId}, function(err, data) {
    if(err || data === null) {
      res.send('ID you\'ve entered does not exist!');
      console.log(err);
    }else {
      res.json(data);
    }
  });
})

//Subscribers

// Do something with form data
app.post('/subscribers',function(req,res){
  console.log(req.body);
  res.send(`<p>Thank you, ${req.body.name}! We'll send our newsletters to ${req.body.email}.</p>`);
});

app.get('/api/subscribers', function(req, res){
  Subscribe.find({}, function(err, data) {
    if(err) {
      res.send('<p>Could not retrieve subscribers.</p><p>Please import \'subscribe\' to database.</p>');
    }else {
      res.json(data);
    }
  });
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