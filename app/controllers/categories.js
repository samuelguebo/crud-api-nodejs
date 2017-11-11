var express = require('express');
var router  = express.Router();

// Importing models
var Category = require('./model/category');

// Importing models
var Category = require('../models/category');


// List
router.get('/', function(request, response) {
    
    // Finding 10 records
    Category.find(function (err, categories){
        if (err){
            // Returns an error
            response.status(500).send({error:"Could not find any category"});
        } else {
            // Return the newly saved category
            response.send(categories); 
        }
        
    }).
    limit(10);

});

// Read 
router.get('/:id', function(request, response){
    var category = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A category must have have an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        Category.findOne({_id: id}, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the category"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});

// Create
router.post('/', function(request, response) {
    var category = new Category(request.body);
    /*
    category.title = request.body.title;
    category.price = request.body.price;
    */
    
    // Inserting the row into the DB
    category.save(function (err, savedCategory){
        if (err){
            // Returns an error
            response.status(500).send({error:"Could not save the category"});
        } else {
            // Return the newly saved category
            response.send(savedCategory); 
        }
        
    });
    

});

// Update 
router.put('/:id', function(request, response){
    var category = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A category must an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        Category.update({_id: id}, {title: category.title, price: category.price }, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the category"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});

// Delete
router.delete('/:id', function(request, response){
    var category = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A category must have an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        Category.remove({_id: id}, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the category"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});
module.exports = router;
