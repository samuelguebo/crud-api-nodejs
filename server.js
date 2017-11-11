var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

// Server port 
var port = 5000;

// DB initialization
var mongoose    = require('mongoose');
var db          = mongoose.connect("mongodb://localhost/blog-api-mean");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Using routes
app.use(require('./app/controllers'));


app.listen(port, function() {
    console.log("The App is running on port " + port);
})
