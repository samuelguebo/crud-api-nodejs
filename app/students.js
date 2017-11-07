
// New Javascript objects

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

function makeStudentList() {
    var studentList = [];
    
    studentList.push(new Student("Anthony", "Parker", 5));
    studentList.push(new Student("Maria", "Ines", 15));
    studentList.push(new Student("Rodrigo", "Padula", 15));
    
    return studentList;
};

var students = makeStudentList(); 
module.exports = students;
