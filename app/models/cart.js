var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var cart = new Schema({
    title: {type: String, default: "Cool cart"},
    products: [{type: ObjectId, ref: 'Product'}],
    user: [{type: ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Cart', cart);