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

// Map

// Map is a collection of key-value pairs where both keys and values can be of any type. It maintains the order of insertion and allows for efficient retrieval of values based on their keys. It doesn't contain duplicates.

const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');
myMap.set('name', 'John');

console.log(myMap.get('name')); // Output: John
console.log(myMap);

for(const [key, value] of myMap) {
    console.log(key, ":", value);
}//we can't use this for of loop with objects, because objects are not iterable. However, we can use for...in loop to iterate over the properties of an object.

