// Applying authentication to specific endpoints

var express = require('express');
var router  = express.Router();

// Protecting /posts path
router.use('/posts', function (request, response, next){
        
        console.log("entered auth middleware");
    next();
}); 

module.exports = router;