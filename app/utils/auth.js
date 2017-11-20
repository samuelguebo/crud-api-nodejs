/* Will be usefull for applying auth to specific endpoints
var express = require('express');
var Router  = express.Router();
*/

var auth = 
    function (req, res, next){
        
        console.log("entered auth middleware");
        next();
}; 

module.exports = auth;