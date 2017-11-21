var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var user = new Schema({ 
    firstName: String,
    lastName: String,
    email: String,
    password: {type: String, select: false} 
});

module.exports = mongoose.model('User', user);
