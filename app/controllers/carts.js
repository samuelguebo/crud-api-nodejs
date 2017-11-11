var express     = require('express');
var router      = express.Router();
var mongoose    = require('mongoose');

// Importing model
var Cart = require('../models/cart');

// List
router.get('/', function(request, response) {
    
    // Finding 10 records
    Cart.find(function (err, carts){
        if (err){
            // Returns an error
            response.status(500).send({error:"Could not find any product"});
        } else {
            // Return the newly saved product
            response.send(carts); 
        }
        
    }).
    limit(10);

});

// Read 
router.get('/:id', function(request, response){
    var product = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A product must an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        Product.findOne({_id: id}, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the product"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});

// Adding item to cart
router.put('/product/add', function(request, response) {
    
    // Finding the product first
    Product.findOne({_id: request.body.productId}, function (err, product) {
        if (err) {
            response.status(500).send({error:"Coult not find any product"});
        } else {
            Cart.update({_id: request.body.cartId}, {$addToSet: {products: product._id}}, 
                        function (err, raw){
                if (err){
                    // Returns an error
                    response.status(500).send({error:"Could not add product to cart"});
                } else {
                    // Return the newly saved product
                    response.send(raw); 
                }
            })
        }
    })
    
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

// Update 
router.put('/', function(request, response){
    var product = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A product must an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        Product.update({_id: id}, {title: product.title, price: product.price }, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the product"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});

// Delete
router.delete('/', function(request, response){
    var product = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A product must an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        Product.remove({_id: id}, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the product"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});

module.exports = router;