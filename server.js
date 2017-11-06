var express     = require('express');
var bodyParser  = require('body-parser');
var students    = require('./js/students');
var app         = express();

// DB initialization
var mongoose    = require('mongoose');
var db          = mongoose.connect("mongodb://localhost/shop-api");

// Importing models
var Product = require('./js/model/product');
var Wishlist = require('./js/model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * Product controllers
 */
app.post('/post', function(request, response) {
    var product = new Product(request.body);
    /*
    product.title = request.body.title;
    product.price = request.body.price;
    */
    
    // Inserting the row into the DB
    product.save(function (err, savedProduct){
        if (err){
            // Returns an error
            response.status(500).send({error:"Could not save the product"});
        } else {
            // Return the newly saved product
            response.send(savedProduct); 
        }
        
    });
    

});

/**
 * Student controllers
 */

// List
app.get('/', function(request, response){
    response.send("Hello World!");
});

// Students controller
app.get('/students', function(request, response){
    response.send(students);
});

// Post controller
app.post('/students', function(request, response){
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

// Update controller
app.put('/students/:firstName', function(request, response){
    var newFirstName = request.params.firstName;
    var newLastName = request.body.lastName;
    var newAge = request.body.age;
     
    // Filtering
    if (!newAge || newAge === "") {
        response.status(500).send(
            {error:"A student must have an age"}
        );
    }else {
        
        // Loop through the students list
        for (var i= 0; i< students.length; i++) {
            var student = students[i];
            
            // Updating the existing student
            if (student.firstName === newFirstName) {
                student.age = newAge;
                student.lastName = newLastName;
                break;
            }
            
        }
        response.status(200).send(students);
    }
});

// Setting server port 
var port = 5000;
app.listen(port, function() {
    console.log("The App is running on port " + port);
})