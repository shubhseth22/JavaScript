const marvel_heroes = ["thor", "ironman", "hulk", "captain america"];
const dc_heroes = ["superman", "batman","flash", "wonder woman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

new_array = marvel_heroes.concat(dc_heroes);
console.log(new_array);

const all_heroes = [...marvel_heroes, ...dc_heroes];//spread operator
console.log(all_heroes);

const array=[1,2,[3,4],5,6,[7,8,[9,10]]];
const new_array2= array.flat(Infinity);
console.log(new_array2);

console.log(Array.isArray("Shubh"));//false..to check if "Shubh" is an array or not
console.log(Array.from("Shubh"));//['S', 'h', 'u', 'b', 'h']..to convert string to array
console.log(Array.from({name: "Shubh"}));//[undefined]..to convert object to array

let score=100;
let score2=200;
let score3=300;
console.log(Array.of(score, score2, score3));//[100, 200, 300]..to create an array from individual elements