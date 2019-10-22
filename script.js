// Everything is an Object in JS, which makes the js unique from the others language.
// Prototype makes the inheritance possible in js.
// How to create an Object.
// var john = {
//         name: "John",
//         yearOfBirth: 1990,
//         job: 'teacher'
//     }
//     // How to create a function Constructor.

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     console.log(2019 - this.yearOfBirth);
// }

// Person.prototype.lastName = "NIK";

// var john = new Person("Ahmad", 1996, "Student");
// var jane = new Person("Jane", 1970, "Designer");
// var mark = new Person("Mark", 1950, "Corresponder");

// john.calculateAge();
// mark.calculateAge();
// jane.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// Creating an Object which inherit from another Prototype.
// var personProto = {
//         calculateAge: function() {
//             console.log(2019 - this.yearOfBirth);
//         }
//     }
//     //Another way to create an Object which we pass the date as the second parameter in the create method.
// var nil = Object.create(personProto);
// nil.name = "John";
// nil.yearOfBirth = 1990;
// nil.job = "Architecture";
// var nilo = Object.create(personProto, {
//     name: { value: "Nilo" },
//     yearOfBirth: { value: 1993 },
//     job: { value: "Manager" }
// });

// // Functions Primitives and Object.

// var age = 24;
// var obj = {
//     name: "Johannes",
//     city: "Lisbon"
// }

// function change(a, b) {
//     a.age = 30;
//     b.city = "San Francisco";
// }

// change(age, obj);

// console.log(obj.city);
// console.log(age.a);

// Passing Function as an arguments

var years = [1990, 1965, 1937, 2005, 1998];


function toEndeckt(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

var ages = toEndeckt(years, calculateAge);
console.log(ages);