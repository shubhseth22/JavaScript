//for of

// for (const element of object) {
    
// }//here object is an iterable object, such as an array or a string.

const array = [1, 2, 3, 4, 5];

for (const element of array) {
    console.log(element);
}//1, 2, 3, 4, 5

const greetings='Hello World';

for (const greet of greetings) {
    console.log(`each character of string is ${greet}`);
}