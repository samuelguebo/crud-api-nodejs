// Get the necessary packages
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var jwt         = require('jsonwebtoken'); // used for handling tokens

// Server port 
var port = 5000;

// DB initialization
var mongoose    = require('mongoose');
var db          = mongoose.connect("mongodb://localhost/blog-api-mean");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Populate the Db with seed if it's empty
var utils = require('./app/utils/utils');
var seedLoader = require('./app/utils/seedloader');
    
app.use(seedLoader);

// Using routes
app.use(require('./app/controllers'));


app.listen(port, function() {
    console.log("The App is running on port " + port);
})
