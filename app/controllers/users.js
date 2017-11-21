var express     = require('express');
var router      = express.Router();
var mongoose    = require('mongoose');
var jwt         = require('jsonwebtoken'); // used for handling tokens


// Importing model
var User = require('../models/user');

// List
router.get('/', function(request, response) {
    
    // Finding 10 records
    User.find(function (err, users){
        if (err){
            // Returns an error
            response.status(500).send({error:"Could not find any user"});
        } else {
            // Return the newly saved user
            response.send(users); 
        }
        
    }).
    limit(10);

});

// Read 
router.get('/:id', function(request, response){
    var user = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A user must an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        User.findOne({_id: id}, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the user"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});

// Create
router.post('/', function(request, response) {
    if(!request.body.firstName) { response.json( 
        {
            success: false,
            message: 'No firstName'
        }
    )}
    var user = new User(request.body);
   
    // Inserting the row into the DB
    user.save(function (err, savedUser){
        if (err){
            // Returns an error
            response.status(500).send({error:"Could not save the user"});
        } else {
            response.send(savedUser); 
        }
    });

});

// Update 
router.put('/:id', function(request, response){
    var user = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A user must an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        User.update({_id: id}, user, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the user"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});

// Delete
router.delete('/:id', function(request, response){
    var user = request.body;
    var id = mongoose.Types.ObjectId(request.params.id);
    
    // Filtering
    if (!id.toString() || id.toString() === "") {
        response.status(500).send(
            {error:"A user must an ID"}
        );
    }else {
        // Model.update(conditions, doc, [options], [callback])
        User.remove({_id: id}, 
            function (err, raw) {
                if (err) {
                    response.send(err.message);
                    //response.status(500).send({error:"Could not update the user"});
                } else {
                    response.send(raw);
                }
            }
        );
    }
});


module.exports = router;