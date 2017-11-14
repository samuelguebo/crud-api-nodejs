var express     = require('express');
var router      = express.Router();
var mongoose    = require('mongoose');

// Importing models
var Post = require('../models/post');


// List
router.get('/', function(request, response) {
    
    // Finding 10 records
    Post.find(function (err, posts){
        if (err){
            // Returns an error
            response.status(500).send({error:"Could not find any post"});
        } else {
            // Return the newly saved post
            response.send(posts); 
        }
        
    })
    .limit(10)
    .populate('author', 'categories')
    .exec
    
    ;

    
    
});

// Read 
router.get('/:id', function(request, response){
    var post = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A post must an ID"}
        );
    }else {
        Post.findOne({_id: id}, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the post"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});

// Create
router.post('/', function(request, response) {
    var post = new Post(request.body);
    
    // Inserting the row into the DB
    post.save(function (err, savedPost){
        if (err){
            // Returns an error
            response.status(500).send({error:"Could not save the post"});
        } else {
            // Return the newly saved post
            response.send(savedPost); 
        }
        
    });
    

});

// Update 
router.put('/:id', function(request, response){
    var post = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A post must an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        Post.update({_id: id}, {title: post.title, price: post.price }, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the post"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});

// Delete
router.delete('/:id', function(request, response){
    var post = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A post must an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        Post.remove({_id: id}, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the post"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});

module.exports = router;