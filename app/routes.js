var express = require('express');
var router  = express.Router();

// Importing models
var Product = require('./model/product');
var Wishlist = require('./model/wishlist');

/**
 * Product controllers
 */

// Save
router.post('/products', function(request, response) {
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

// Find
router.get('/products', function(request, response) {
    
    // Finding 10 records
    Product.find(function (err, products){
        if (err){
            // Returns an error
            response.status(500).send({error:"Could not find any product"});
        } else {
            // Return the newly saved product
            response.send(products); 
        }
        
    }).
    limit(10);

});

// Update 
router.put('/product/:title', function(request, response){
    
    // Filtering
    if (!title || title === "") {
        response.status(500).send(
            {error:"A product must a title"}
        );
    }else {
        
        // Update the record
        Product.update()
        
        response.status(200).send(students);
    }
});


/**
 * Student controllers
 */

// List
router.get('/', function(request, response){
    response.send("Hello World!");
});

// Students controller
router.get('/students', function(request, response){
    response.send(students);
});

// Post controller
router.post('/students', function(request, response){
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
router.put('/students/:firstName', function(request, response){
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

module.exports = router;
