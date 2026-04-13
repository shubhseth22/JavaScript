console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0); // true

// Explanation:
// When comparing null with a number, JavaScript converts null to 0. 
// Therefore, null > 0 is false because 0 is not greater than 0.
// null == 0 is false because null is only equal to undefined, not to any other value.
// null >= 0 is true because when comparing null to a number, it is converted to 0, and 0 >= 0 is true.

console.log(undefined>0); // false
console.log(undefined==0); // false
console.log(undefined>=0); // false

// Explanation:
// When comparing undefined with a number, JavaScript does not convert undefined to a number. 
// Therefore, undefined > 0 is false because undefined is not a number and cannot be compared to 0.
// undefined == 0 is false because undefined is only equal to null, not to any other value.
// undefined >= 0 is false because undefined cannot be compared to a number and does not satisfy the condition.

console.log("2"==2); // true

// Explanation:
// When comparing a string and a number with the loose equality operator (==), JavaScript converts the string to a number. 
// In this case, "2" is converted to the number 2, and since 2 == 2 is true, the result is true.

console.log("2"===2); // false

// Explanation:
// The strict equality operator (===) does not perform type conversion. 
// Therefore, "2" is a string and 2 is a number, so they are not strictly equal, resulting in false.
