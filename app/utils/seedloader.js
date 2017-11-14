// Requiring models
var User = require('../models/user.js');

/**
 * Seeding the Database
 */
var SeedLoader = function (request, response, next) {
    
    // create some users
    
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
    
    // use the User model to save
    
    for (user of users){
        let newUser = new User(user);
        newUser.save();
    }
    
    console.log("Entered SeedLoader Middleware");
    next();
}




module.exports = SeedLoader;