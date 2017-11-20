// new middleware
var auth = 
    function (req, res, next){
        
        log.console("entered auth middleware");
        next();
    } 

modules.export = auth;