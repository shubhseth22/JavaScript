const one = 1;
var two = "Two";
let three = "Three";

console.log(one);
console.log(two);
console.log(three);

console.table({one, two, three});

//we prefer to use let and const instead of var because of the scope of var is global and it can be re-declared and updated. whereas let and const have block scope and cannot be re-declared but can be updated. const cannot be updated.

const four = 4;
// four = 5; // This will throw an error because we cannot update a const variable.

let five = 5;
five = 6; // This is allowed because we can update a let variable.

var six = 6;
var six = 7; // This is allowed because we can re-declare and update a var variable.

seven = 7; // This is allowed because we can declare a variable without var, let or const and it will be treated as a global variable.but it is not recommended to do so.

let eight;
console.log(eight); // This will print undefined because we have declared the variable but not assigned any value to it.

console.log(typeof undefined); // This will print "undefined" because the type of undefined is undefined.

console.log(typeof null); // This will print "object" because the type of null is object. This is a bug in JavaScript but it has been kept for backward compatibility.