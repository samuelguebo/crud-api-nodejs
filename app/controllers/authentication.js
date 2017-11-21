var express     = require('express');
var router      = express.Router();
var User        = require('../models/user');
var config      = require('../utils/config');
var jwt         = require('jsonwebtoken'); // used for handling tokens



// Authentication
router.post('/', function (request, response) {
    User.findOne({email: request.body.email}, function(err, user){
        if(err) response.json;
        
        if(!user){
            response.json({success: false, message: "Authentication failed, no User found"});
        }else {
            // Check the password now
            if(user.password != request.body.password){
                response.json({success: false, message: "Authentication failed, password do not match"});
            }
        }
        
        // If no error showed up, generate the token
        var token = jwt.sign({admin:  true}, config.superSecret, {
          expiresIn: 24 * 60  // expires in 24 hours
        });
        
        response.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
        });
        
    })
})
module.exports = router;