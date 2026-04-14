//Primitive : String, Number, Boolean, Null, Undefined, Symbol,BigInt
// Non-Primitive(Reference) : Object, Array, Function

const id=Symbol("123");
const anotherId=Symbol("123");
console.log(id);
console.log(anotherId);
console.log(id===anotherId); // false

// Explanation:
// Symbols are unique and immutable data types in JavaScript. Even if two symbols have the same description (in this case, "123"), they are different and unique values. Therefore, id and anotherId are not equal, resulting in false when compared with the strict equality operator (===).

const heroes = ["Superman", "Batman", "Wonder Woman"];//Array

const myObj = {
    name: "John",
    age: 30,
    city: "New York"
};//Object

const myFunc = function(){
    console.log("Hello, World!");
}//Function

console.log(typeof heroes); // object
console.log(typeof myObj); // object
console.log(typeof myFunc); // function

// Explanation:
// In JavaScript, arrays and objects are both of type "object". However, functions are of type "function". This is a special case in JavaScript where functions are considered first-class objects, but they have their own type.

console.log(typeof null); // object

//****************************************************/

//Stack(Prmitive).   Heap(Non-Primitive)

let a = 10; // a is stored in stack
let b = a; // b is stored in stack and it gets the value of a

console.log(a); // 10
console.log(b); // 10

b = 20; // b is updated to 20

console.log(a); // 10 (a is not affected by the change in b)
console.log(b); // 20 (b is updated to 20)


let obj1 = {name: "Alice"}; // obj1 is stored in heap
let obj2 = obj1; // obj2 is stored in heap and it gets the reference to the same object as obj1

console.log(obj1); // {name: "Alice"}
console.log(obj2); // {name: "Alice"}

obj2.name = "Bob"; // obj2 is updated to {name: "Bob"}

console.log(obj1); // {name: "Bob"} (obj1 is affected by the change in obj2 because they reference the same object)
console.log(obj2); // {name: "Bob"} (obj2 is updated to {name: "Bob"})

// Explanation:
// In JavaScript, primitive data types (like numbers, strings, booleans) are stored in the stack, and when you assign a primitive value to another variable, it creates a copy of that value. Therefore, changing one variable does not affect the other.
// On the other hand, non-primitive data types (like objects and arrays) are stored in the heap, and when you assign an object to another variable, it creates a reference to the same object. Therefore, changing one variable will affect the other because they both reference the same object in memory.