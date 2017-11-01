var express = require('express');
var app = express();
var helloMessage = function() {
    return "Hello man!";
}

// Kind of a controller
app.get('/', function(request, response){
    response.send(helloMessage());
});

// Setting server port 
app.listen(3000, function() {
    console.log(helloMessage() + " The App is running on port 3000");
})