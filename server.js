var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();

// DB initialization
var mongoose    = require('mongoose');
var db          = mongoose.connect("mongodb://localhost/shop-api");

// Middelware or Interceptors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Using routes
app.use('/products', require('./app/controllers/products.js'));
app.use('/students', require('./app/controllers/students.js'));

// Setting server port 
var port = 5000;
app.listen(port, function() {
    console.log("The App is running on port " + port);
})
