var path = require('path');
var express = require('express');
var app = express();

var browserify = require('browserify-middleware');
var reactify   = require('reactify');

// Respond to GET /app-bundle.js with browserified file
app.get('/app-bundle.js',
  browserify('./client/scripts/app.js', {
    transform: [reactify]
  }));

// Serves client files from dist directory
app.use(express.static(path.join(__dirname, './client')));

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port 3000...");
