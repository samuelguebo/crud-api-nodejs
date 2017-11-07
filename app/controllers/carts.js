var express     = require('express');
var router      = express.Router();
var mongoose    = require('mongoose');

// Importing models
var Product = require('../models/product');

// Read 
router.get('/', function(request, response){
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

// Create
router.post('/', function(request, response) {
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