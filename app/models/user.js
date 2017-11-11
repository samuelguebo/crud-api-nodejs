var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var user = new Schema({ 
    firstName,
    lastName,
    email,
    password
});

module.exports = mongoose.model('User', user);
