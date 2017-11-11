var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var post = new Schema({
    title: String,
    content: String,
    pubDate: String,
    categories: {type: ObjectId, ref: "Category"}
});

module.exports = mongoose.model('Post', post);