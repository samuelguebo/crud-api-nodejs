var express     = require('express');
var bodyParser  = require('body-parser');
var students    = require('./js/students');
var app         = express();

// DB initialization
var mongoose    = require('mongoose');
var db          = mongoose.connect("mongodb://localhost/shop-api");

// Importing models
var Product = require('./js/model/product');
var Wishlist = require('./js/model/wishlist');

// Middelware or Interceptors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Using routes
app.use(require('./js/routes.js'))

// Setting server port 
var port = 5000;
app.listen(port, function() {
    console.log("The App is running on port " + port);
})