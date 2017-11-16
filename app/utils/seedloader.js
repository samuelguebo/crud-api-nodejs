// Reauirements

var User        = require('../models/user.js');
var Post        = require('../models/post.js');
var Category    = require('../models/category.js');
var utils       = require('../utils/utils.js');

// Seed the Database

var SeedLoader = 
    
    function (request, response, next) {
        
    // Running db imports only once
    oneTimeInsert( runQuerries );
        
    console.log("Entered Seedloader middleware");
    next();
}


/**
 * Make sure the Db is empty
 * and persist data only once
 */
function oneTimeInsert( callback ){
    // check for Post model existence
    Post.find( function(err, posts) {
        if (!err){

            // see if it's empty 
            if (0 >= posts.length) {

                // check for Category model existence
                Category.find( function(err, categories) {
                    if (!err){

                        // see if it's empty 
                        if (0 >= categories.length) {

                            // check for User model existence
                            User.find( function(err, users) {
                                if (!err){

                                    // see if it's empty 
                                    if (0 >= users.length) {

                                        // The Db is empty, fire the callback
                                        if (callback && typeof callback === "function") {
                                            callback();
                                        }

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

/**
 * Wrapper for insertion functions
 */
function runQuerries(){
    
    // create users seed
    const users = [
        {
            firstName: 'Shino',
            lastName: 'Aburame',
            email: 'shino@aburame.com',
            password: 'shinoaburame'
        },{
            firstName: 'Shikamaru',
            lastName: 'Nara',
            email: 'shikamaru@nara.com',
            password: 'shikamarunara'
        },{
            firstName: 'Ino',
            lastName: 'yamanaka',
            email: 'ino@yamanaka.com',
            password: 'inoyamanaka'
        }
        
    ];
    
    // create posts seed
    const posts = [
        {
            title: 'You Must Unlearn What You Have Learned',
            content: utils.loremIpsumGenerator(),
            pubDate: utils.currentDate()
        },
        {
            title: 'Mobile Interface Myths You Should Throw Out The Window',
            content: utils.loremIpsumGenerator(),
            pubDate: utils.currentDate()
        },
        {
            title: 'Creating Secure Password Resets With JSON Web Tokens',
            content: utils.loremIpsumGenerator(),
            pubDate: utils.currentDate()
        },
        {
            title: '10 Simple Tips To Improve User Testing',
            content: utils.loremIpsumGenerator(),
            pubDate: utils.currentDate()
        },
        {
            title: 'Maximizing The Design Sprint',
            content: utils.loremIpsumGenerator(),
            pubDate: utils.currentDate()
        },
        {
            title: 'Right-To-Left Development In Mobile Design',
            content: utils.loremIpsumGenerator(),
            pubDate: utils.currentDate()
        },
        {
            title: 'Understanding The Vary Header',
            content: utils.loremIpsumGenerator(),
            pubDate: utils.currentDate()
        }
    ]
    
    // create categories seed
    const categories = [
        
        { title: 'Technology' }, { title: 'Health' }, { title: 'Sport' }, { title: 'Food' }, 
        { title: 'Religion' }, { title: 'Politics' }, { title: 'Culture' }, 
        { title: 'Music' }, { title: 'Fashion' }, { title: 'Economy' }
    ]
    
    // populate Db sequentially using callbacks
    
    // first Post
    loadAndSave( posts, Post, 
        function() { 
        
            // then User
            loadAndSave( users, User, 
                function() { 
                
                    // then Category
                    loadAndSave( categories, Category, 
                        
                        // then relationships between models
                        function() {  applyRelationships()}
                   )
                }
             )
        }
   );
                                 
}

/** 
 * Generic loade function
 * @param items, an array of json objects
 * @param model, the model used for persistence
 *
 */
function loadAndSave( items, model, callback ) {
    new model().collection.insert(items, callback);
}

/** 
 * Apply the rules and bindings 
 * between models
 */
function applyRelationships() {
        
    // find post and update them
    Post.find(function (err, posts){
        
        if(!err){ 
            
            Category.find( function  (err, categories) {
                if (!err) {
                    User.find( function (err, users ){
                        if (!err) {
                            
                            // loop through existing posts

                            for (post of posts){

                                // pick a random user 
                                var randUser =  users[Math.floor(Math.random() * users.length)];

                                // pick a random category
                                var randCategory =  categories[Math.floor(Math.random() * categories.length)];

                                // update the model
                                console.log("Updating " + post.title + "categories: " + randCategory._id);
                                Post.update( {_id: post._id}, {$addToSet: {categories: randCategory._id, author: randUser._id} } ,

                                function(updateErr, raw) {

                                    // check for errors
                                   if(updateErr) {
                                       //console.log(updateErr);

                                   }else{
                                       console.log(raw);
                                   }
                            });

                        }
                    } else { console.log('could not update the item'); } 

                });   
                } else { console.log('could not update the item'); }
            });
        } else{
            console.log(err);
        };
    });
}


module.exports = SeedLoader;