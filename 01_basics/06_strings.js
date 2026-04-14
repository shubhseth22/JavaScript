const name="John-Doe";
const naam= String("Shubh");//two metgods of string declaration

console.log(name+naam+"HI");

console.log(`My name is ${name} and I am learning JavaScript.`); // Template literals allow us to embed expressions inside string literals using ${} syntax.

console.log(name.length); // This will print the length of the string "John Doe", which is 8 (including the space).

console.log(name.charAt(0)); // This will print the first character of the string "John Doe", which is "J".

const newStr=name.substring(0,4); // This will create a new string "John" by extracting the characters from index 0 to index 4 (excluding index 4) of the original string "John Doe".

const newStr2=name.slice(0,4); // This will also create a new string "John" by extracting the characters from index 0 to index 4 (excluding index 4) of the original string "John Doe". The slice method can also accept negative indices, which count from the end of the string.

const newstr3="     Shubh      ";
const trimmedStr=newstr3.trim(); // This will remove the whitespace from both ends of the string "     Shubh      ", resulting in "Shubh".


const url="https://www.example.com";
const domain=url.replace("https://www.","hi").replace(".com","bye"); // This will remove the "https://www." and ".com" from the URL, resulting in "hiexamplebye".

console.log(domain); // This will print "hiexamplebye".

console.log(name.split("-")); // This will split the string "John-Doe" into an array of two strings ["John", "Doe"] using the hyphen as the separator.