// Get the necessary packages
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var config      = require('../utils/config')

// DB initialization
var mongoose    = require('mongoose');
var db          = mongoose.connect(config.dbUrl);

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Using routes and middlewares
app.use(require('./app/controllers'));

app.listen(config.port, function() {
    console.log("The App is running on port " + config.port);
})
