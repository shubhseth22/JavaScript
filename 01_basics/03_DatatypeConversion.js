let score = "33abc";
console.log(score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

// If the string cannot be converted to a number, it will return NaN (Not a Number). NaN is a special value that represents an invalid number. It is of type number but it is not equal to any other value, including itself.



let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1=> true
// 0=> false
// any other number,string => true
// empty string => false



//**************************Operations*****************************/

console.log(3 + 4); // 7
console.log("3" + 4);
console.log("3" + "4"); // "34"
console.log("3" - 4); // -1
console.log("3" +1 +4); // "314"
console.log(1 + 4 + "3"); // "53"

// When we use the + operator with a string and a number, it will convert the number to a string and concatenate them. When we use the - operator with a string and a number, it will convert the string to a number and perform the subtraction. When we have multiple + operators, it will evaluate from left to right. So in the expression "3" +1 +4, it will first evaluate "3" +1 which will give "31" and then it will evaluate "31" +4 which will give "314". In the expression 1 + 4 + "3", it will first evaluate 1 + 4 which will give 5 and then it will evaluate 5 + "3" which will give "53". 

console.log(+true); // 1
console.log(+""); // 0