//Passing a function as an argument.

// var years = [1990, 1965, 1917, 2005, 1998];

// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));

//     }
//     return arrRes;
// }

// function maxRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function calculateAge(el) {
//     return 2019 - el;
// }

// let ages = arrayCalc(years, calculateAge);
// console.log(ages);

// let full = arrayCalc(ages, isFullAge);
// console.log(full);

// let rate = arrayCalc(ages, maxRate);
// console.log(rate);

// // returning a function by a function 

// function interviewQuestion(job) {
//     if (job === "teacher") {
//         return function(name) {
//             console.log("What do you teach today " + name + "?");
//         }
//     } else if (job === 'Designer') {
//         return function(name) {
//             console.log("What is the UX " + name + "?");
//         }
//     } else if (job === 'Student') {
//         return function(name) {
//             console.log("What is your major today?");
//         }
//     } else {
//         return function(name) {
//             console.log("What do you do " + name + "?");
//         }
//     }
// }


// let teacherQuestion = interviewQuestion("St");
// teacherQuestion("john");

// let designerQuestion = interviewQuestion("Designer");
// designerQuestion('Mike');
// interviewQuestion('teacher')('Gabi');

// //Closure the advanced subject in js
// function retirement(retirementAge) {
//     var a = " years left until retirement: "
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGM = retirement(65);
// var retirementIS = retirement(67);
// retirementUS(1990);
// retirementGM(1975);
// retirementIS(1997);

// // Challenge 
// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'Designer') {
//             console.log("What is the UX " + name + '?');
//         } else if (job === 'teacher') {
//             console.log("What do you teach " + name + '?')
//         } else {
//             console.log("Hello, Can i know what do you do?")
//         }
//     }
// }
// interviewQuestion('Designer')('john');
// interviewQuestion('teacher')('Mike');
// interviewQuestion('Student')('Gabi');

// // bind call and apply Method.

// var john = {
//     name: "John",
//     age: "34",
//     job: "Teacher",
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ' Ladies and Gentelmen! i\'m ' + this.name + ' I\'m a ' + this.job + ' I\'m ' + this.age + ' years old');
//         } else if (style === 'friendly') {
//             console.log('Hey, What\'s up?' + ' I\'m ' + this.name + ' I\'m  a ' + this.job + ' I\'m ' + this.age + " years old. Have a nice " + timeOfDay);
//         }
//     }
// };
// var emily = {
//     name: "Emily",
//     age: 35,
//     job: "designer"
// }
// var patrick = {
//     name: "Patrick",
//     age: 50,
//     job: "designer"
// }

// john.presentation('formal', 'morning');
// john.presentation.call(emily, 'friendly', 'Afternoon');

// let johnFriendly = john.presentation.apply(patrick, ['friendly', 'Morning']);
// let patrickFriendly = john.presentation.bind(this, 'friendly');
// patrickFriendly("Afternoon");
// patrickFriendly('Everytime');




// var years = [1990, 1965, 1917, 2005, 1998];

// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function maxRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// function calculateAge(el) {
//     return 2019 - el;
// }

// let age = arrayCalc(years, calculateAge);
// console.log(age);

// var fullAge = arrayCalc(age, isFullAge.bind(this, 20));
// console.log(fullAge);

// function constructor and Closure and put it in a function invoke

(function() {

    function Question(question, answeres, correct) {
        this.question = question;
        this.answeres = answeres;
        this.correct = correct;
    }
    // Writing the method to print the Question and answers in the Console.
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (let i = 0; i < this.answeres.length; i++) {
            console.log(i + ':' + this.answeres[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct Answer !');
        } else {
            console.log('Wrong Answer !!!');
        }
    }

    let q1 = new Question('Is the js the coolest language?', ['Yes', 'No'], 0);
    let q2 = new Question('What is the name of this Course\'s teacher ?', ['Nik', 'Michel', 'Albert'], 2);
    let q3 = new Question('What does best describe Coding?', ['Fun', 'Boring', 'Hard'], 2);
    let questions = [q1, q2, q3];
    let n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    let answer = parseInt(prompt('Please select the Correct answer.'));
    questions[n].checkAnswer(answer);
})();