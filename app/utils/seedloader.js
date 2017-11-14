// Requiring models
var User = require('../models/user.js');

/**
 * Seeding the Database
 */
var SeedLoader = function (request, response, next) {
    
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
    

    loadAndSave( users, User);
    
    
    console.log("Entered SeedLoader Middleware with " + User.count({}) + " users");
    next();
}


/** 
 * Generic loading function
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

module.exports = SeedLoader;