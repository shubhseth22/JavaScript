// falsy values:
// - false
// - 0
// - -0
// - 0n (BigInt zero)
// - "", '', `` (empty string)
// - null
// - undefined
// - NaN

// everything else is truthy.

// truthy values:
// - true
// - 1, -1, 0.1, -0.1, 1n, -1n (non-zero numbers and BigInts)
// - " ", "0", "false", "null", "undefined" (non-empty strings)
// - [], {}, () => {} (objects and functions)

const username=[];

if(username.length===0){
    console.log("Empty Array")
}// this is how we check for empty array, because empty array is truthy value. if we do if(username) it will return true even if the array is empty.

const emptyobject={};

if(Object.keys(emptyobject).length===0){
    console.log("Empty Object")
}// this is how we check for empty object, because empty object is truthy value. if we do if(emptyobject) it will return true even if the object is empty.

//Nullish coalescing operator (??) : Null or Undefined
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;

val1 = 1 ?? 2; // returns 1 because 1 is not null or undefined
val1 = null ?? 2; // returns 2 because null is null
val1 = null ?? 1 ?? 2; // returns 2 because null is null


//Ternary operator
//condition ? expressionIfTrue : expressionIfFalse

const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes