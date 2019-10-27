//Passing a function as an argument.

var years = [1990, 1965, 1917, 2005, 1998];

function arrayCalc(arr, fn) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));

    }
    return arrRes;
}

function maxRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206 - (0.67 * el));
    } else {
        return -1;
    }
}

function isFullAge(el) {
    return el >= 18;
}

function calculateAge(el) {
    return 2019 - el;
}

let ages = arrayCalc(years, calculateAge);
console.log(ages);

let full = arrayCalc(ages, isFullAge);
console.log(full);

let rate = arrayCalc(ages, maxRate);
console.log(rate);

// returning a function by a function 

function interviewQuestion(job) {
    if (job === "teacher") {
        return function(name) {
            console.log("What do you teach today " + name + "?");
        }
    } else if (job === 'Designer') {
        return function(name) {
            console.log("What is the UX " + name + "?");
        }
    } else if (job === 'Student') {
        return function(name) {
            console.log("What is your major today?");
        }
    } else {
        return function(name) {
            console.log("What do you do " + name + "?");
        }
    }
}


let teacherQuestion = interviewQuestion("St");
teacherQuestion("john");

let designerQuestion = interviewQuestion("Designer");
designerQuestion('Mike');
interviewQuestion('teacher')('Gabi');

//Closure the advanced subject in js
function retirement(retirementAge) {
    var a = " years left until retirement: "
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGM = retirement(65);
var retirementIS = retirement(67);
retirementUS(1990);
retirementGM(1975);
retirementIS(1997);

// Challenge 
function interviewQuestion(job) {
    return function(name) {
        if (job === 'Designer') {
            console.log("What is the UX " + name + '?');
        } else if (job === 'teacher') {
            console.log("What do you teach " + name + '?')
        } else {
            console.log("Hello, Can i know what do you do?")
        }
    }
}





interviewQuestion('Designer')('john');
interviewQuestion('teacher')('Mike');
interviewQuestion('Student')('Gabi');