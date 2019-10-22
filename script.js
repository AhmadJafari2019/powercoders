// Everything is an Object in JS, which makes the js unique from the others language.
// Prototype makes the inheritance possible in js.
// How to create an Object.
var john = {
        name: "John",
        yearOfBirth: 1990,
        job: 'teacher'
    }
    // How to create a function Constructor.

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = "NIK";

var john = new Person("Ahmad", 1996, "Student");
var jane = new Person("Jane", 1970, "Designer");
var mark = new Person("Mark", 1950, "Corresponder");

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// Creating an Object which inherit from another Prototype.
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
}