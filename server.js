// Load Dependencies
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const clouds = require('./seeds/clouds');
const mongoose = require('mongoose');
require('dotenv').config();


// Import Models
const Cloud = require(`./models/cloud.js`);
const Subscriber = require(`./models/subscriber.js`);


// Create Express App
const app = express();

// view engine
app.set('view engine', 'ejs');

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Parse all requests for url encoded form data
app.use(express.urlencoded({ extended: true }));


// Connect to Database
mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(err) {
  console.log(`Connection Error: ${err.message}`);
});

db.once('open', function() {
  console.log('Connected to Database...');
});


// HTML Endpoints
// Index/home page
app.get('/', function(req, res) {
  res.render('pages/index', {
    title: "Welcome!",
    current: "pg-index",
    tagline: "Create and organize your library in one page"
  });
});

// Gallery page
app.get('/gallery', function(req, res) {
  res.render('pages/gallery', {
    title: "Services",
    current: "pg-gallery",
    tagline: "Here are our services"
  });
});

// Gallery image by ID
app.get('/gallery/:id', function(req, res) {
  const galleryIndiv = clouds.find( c => c.id === parseInt(req.params.id));
    if (!galleryIndiv) {
      res.status(404).send('Sorry, the image with the given ID was not found.');
    } else {
      res.send(`<img src="/${galleryIndiv.imagePath}" alt="Image: ${galleryIndiv.title}">`);
    }
});

// Subscribe page
app.get('/subscribe', function(req, res) {
  res.render('pages/subscribe', {
    title: "Subscribe", 
    current: "pg-subscribe",
    tagline: "Receive our newsletters and updates!"
  });
});

// Admin page
app.get('/admin', function(req, res) {
  res.render('pages/admin', {
    title: "Admin",
    current: "pg-admin",
    tagline: "List of our Subscribers",
  });
});

app.get('/api/v0/admin', function(req, res) {
  Subscriber.find({}, function(err, data) {
    if(err) {
      res.send('<p>Could not retrieve places.</p><p>Please import \'places\' to database.</p>');
    } else {
      res.json(data);
    }
  });
});


// JSON Endpoints 
// Gallery
app.get('/api/v0/gallery', function(req, res) {
  res.json(clouds);
});

app.get('/gallery/api/v0/clouds', function(req, res) {
  Cloud.find({}, function(err, data) {
    if(err) {
      res.send('<p>Could not retrieve clouds.</p><p>Please import \'cloud\' to database.</p>');
    } else {
      res.json(data);
    }
  });
});

app.get('/gallery/api/v0/clouds/:id', function(req, res) {
  let cloudId = req.params.id;
  Cloud.findOne({id: cloudId}, function(err, data) {
    if(err || data === null) {
      res.send('ID you\'ve entered does not exist!');
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// Subscribers
app.post('/subscribers',function(req,res) {
  Subscriber.insertMany(req.body);
  res.send(`<p>Thank you, ${req.body.name}! We'll send our newsletters to ${req.body.email}.</p>`);
});

app.get('/api/subscribers', function(req, res) {
  Subscriber.find({}, function(err, data) {
    if(err) {
      res.send('<p>Could not retrieve subscribers.</p><p>Please import \'subscriber\' to database.</p>');
    } else {
      res.json(data);
    }
  });
});


// More Middleware
// Add more middleware for error/fails
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});