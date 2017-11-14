// Requiring models
var User = require('../models.user.js');

/**
 * Seeding the Database
 */
var SeedLoader = function (request, response, next) {
    
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
    
    
    console.log("Entered SeedLoader Middleware");
    next();
}




module.exports = SeedLoader;