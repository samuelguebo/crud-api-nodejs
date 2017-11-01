var express = require('express');
var students = require('./js/students');
var app = express();
var helloMessage = function() {
    return "Hello man!";
}

// Home controller
app.get('/', function(request, response){
    response.send(helloMessage());
});

// Students controller
app.get('/students', function(request, response){
    response.send(students());
    
});

// Setting server port 
app.listen(5000, function() {
    console.log(helloMessage() + " The App is running on port 5000");
})