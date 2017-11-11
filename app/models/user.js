var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var user = new Schema({ 
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number},
    cart: {type: ObjectId, ref: 'Cart'}
});

module.exports = mongoose.model('User', user);
