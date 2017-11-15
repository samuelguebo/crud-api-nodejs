var moment = require('moment');
var Post = require('../models/post');
var User = require('../models/user');
var Category = require('../models/category');

var utils = {
    loremIpsumGenerator: 
        function (){

            // Default text. TODO: switch to an array

            let text = "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet.";

            return text;
        },
    currentDate: 
        function (){
            var now = new moment();
            let date = moment().format('MMMM Do YYYY, h:mm:ss a');
            return date;
        },
    isDbEmpty: 
        function( callback ){
            // check for Post model existence
            Post.find( function(err, posts) {
                if (!err){
                    
                    // see if it's empty 
                    if (0 <= posts.length) {
                        
                        // check for Category model existence
                        Category.find( function(err, categories) {
                            if (!err){
                                
                                // see if it's empty 
                                if (0 <= categories.length) {
                                    
                                    // check for User model existence
                                    User.find( function(err, users) {
                                        if (!err){
                                            
                                            // see if it's empty 
                                            if (0 <= users.length) {
                                                
                                                // The Db is empty, fire the callback
                                                callback();
                                                return true;
                                                
                                            } else { return false; }
                                            
                                        } else { console.log(err); }
                                });
                                    
                                } else { return false; }

                            } else { console.log(err); }
                        });
                    } else {
                        return false;
                    }
                    
                    
                } else { console.log(err); }
            });
        }
}
module.exports = utils;