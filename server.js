var express     = require('express');
var bodyParser  = require('body-parser');
var students    = require('./js/students');
var app         = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Home controller
app.get('/', function(request, response){
    response.send("Hello World!");
});

// Students controller
app.get('/students', function(request, response){
    response.send(students);
});

// Post controller
app.post('/', function(request, response){
    var student = request.body;
    
    // Filtering
    if (student.age == "") {
        response.status(500).send(
            {error:"A student must have a name"}
        );
    }else {
        students.push(student);
        response.status(200).send(students);
    }
});

// Setting server port 
var port = 5000;
app.listen(port, function() {
    console.log("The App is running on port " + port);
})