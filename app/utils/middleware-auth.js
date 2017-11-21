// Applying authentication to specific endpoints
var config  = require('./config');
var express = require('express');
var router  = express.Router();
var jwt     = require('jsonwebtoken');


// Protecting /users path
router.use('/users', function (request, response, next){
    var token = request.body.token || request.query.token || request.headers['x-access-token'] || request.headers['token'];
    
    // decode token
    if(token) {
        
        // verify token and check expiry date
        jwt.verify(token, config.superSecret, function(err, decoded) {
            if(err){
                return response.json({
                    success: false,
                    message: 'Invalid token'
                })
            }else{
                
                // save decoded variable for other requests
                request.decoded = decoded;
                next();
            }
            
        } )

    }else {
        // no token, deny
       response.status(403).send({
           success: false,
           message: 'No token provided'
       }) 
    }
}); 

module.exports = router;