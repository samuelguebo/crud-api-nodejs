var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var category = new Schema({
    title: String
});

module.exports = mongoose.model('Category', category);