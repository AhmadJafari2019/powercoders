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