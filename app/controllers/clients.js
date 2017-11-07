var express = require('express');
var router  = express.Router();

// List
router.get('/', function(request, response){
    response.send("Hello World!");
});

// Students controller
router.get('/clients', function(request, response){
    response.send(clients);
});

// Post controller
router.post('/clients', function(request, response){
    var client = request.body;
     
    // Filtering
    if (client.age == "") {
        response.status(500).send(
            {error:"A client must have a name"}
        );
    }else {
        clients.push(client);
        response.status(200).send(clients);
    }
});

// Update controller
router.put('/clients/:firstName', function(request, response){
    var newFirstName = request.params.firstName;
    var newLastName = request.body.lastName;
    var newAge = request.body.age;
     
    // Filtering
    if (!newAge || newAge === "") {
        response.status(500).send(
            {error:"A client must have an age"}
        );
    }else {
        
        // Loop through the clients list
        for (var i= 0; i< clients.length; i++) {
            var client = clients[i];
            
            // Updating the existing client
            if (client.firstName === newFirstName) {
                client.age = newAge;
                client.lastName = newLastName;
                break;
            }
            
        }
        response.status(200).send(clients);
    }
});

module.exports = router;