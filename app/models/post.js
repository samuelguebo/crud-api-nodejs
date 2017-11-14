var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var post = new Schema({
    title: String,
    content: String,
    pubDate: String,
    categories: {type: ObjectId, ref: "Category"},
    author: {type: ObjectId, ref: "User"}
});

module.exports = mongoose.model('Post', post);