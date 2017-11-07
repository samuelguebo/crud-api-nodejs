var express = require('express');
var router  = express.Router();

// Importing models
var Product = require('./model/product');

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

module.exports = router;