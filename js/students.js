var message = "hello world!";
// Experimenting Javascript objects

var students = [];

function Student (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function() {
        return "Hello my name is " + 
            this.firstName + " and I am " 
            + this.age + " years old.";
    };
    
}

students.push(new Student("Anthony", "Parker", 5));
students.push(new Student("Maria", "Ines", 15));
students.push(new Student("Rodrigo", "Padula", 15));

for (var i = 0; i< students.length; i++) {
    var student = students[i];
    
    // Iterating through keys
    for (var key in student){
        console.log(key + ": " + student[key]);
    }
    
}