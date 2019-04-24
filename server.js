//jshint esversion:6

const express = require('express');
const app = express();

// Root / Hompage route
app.get('/', function(req, res) {
  res.send('<h1>Hello World!</h1>');
});

// About / bio route
app.get('/about', function(req, res) {
  res.send(
    '<p>Hi my name is Frankie, I am a Full-Stack web developer, co-founder of Mentally.me and full-time dad.</p>'
  );
});

// Contact me route
app.get('/contact', function(req, res) {
  res.send('Contact me at frankie@gmail.com');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
