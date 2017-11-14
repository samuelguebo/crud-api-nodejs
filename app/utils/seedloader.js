// Require models

var User        = require('../models/user.js');
var Post        = require('../models/post.js');
var Category    = require('../models/category.js');
var utils       = require('../utils/utils.js');

// Seed the Database

var SeedLoader = 
    
    function (request, response, next) {
    
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
    
    // populate DB with array
    
    //loadAndSave( users, User);
    //loadAndSave( posts, Post);
    //loadAndSave( categories, Category);
    
    // apply the relationships between models
    
    loadAndSaveRelationships();

    console.log("Entered Seedloader middleware");
    next();
}


/** 
 * Generic loade function
 * @param items, an array of json objects
 * @param model, the model used for persistence
 *
 */

function loadAndSave( items, model ) {
    
    // use the model to save
    
    for (item of items){
        let newModel = new model(item);
        newModel.save();
    }   
}

/** 
 * Apply the rules and bindings 
 * between models
 */

function loadAndSaveRelationships() {
        
    // find post and update them
    Post.find(function (err, posts){
        
        if(!err){                
                Category.find( function  (err, categories) {
                    if (!err) {

                        // pick a random category
                        var randCategory =  categories[Math.floor(Math.random() * categories.length)];

                        User.find( function (err, users ){
                            if (!err) {

                                // pick a random user 
                                var randUser =  users[Math.floor(Math.random() * users.length)];

                                // loop through existing posts
                                for (post of posts){

                                    // update the model
                                    Post.update( {_id: post._id}, { $addToset: [{author: randUser}, {categories: randCategory}] },
                                    function(err, raw) {

                                        // check for errors
                                       if(!err) {
                                           console.log(post.title + ' was updated. Author: ' + randUser + ', category: ' + randCategory);
                                       }else{
                                           console.log('could not update the item');
                                       }

                                    });
                                }
                            }else { console.log('could not update the item'); }
                        });

                } else { console.log('could not update the item'); }                

            });   
        } else { console.log('could not update the item'); }
    });
}

module.exports = SeedLoader;