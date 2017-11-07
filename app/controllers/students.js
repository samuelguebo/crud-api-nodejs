var express = require('express');
var router  = express.Router();

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