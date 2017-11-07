var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var student = new Schema({ 
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number}
});

module.exports = mongoose.model('Student', student);
