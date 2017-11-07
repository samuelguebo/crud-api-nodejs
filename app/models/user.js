var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({ 
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number}
});

module.exports = mongoose.model('User', user);
