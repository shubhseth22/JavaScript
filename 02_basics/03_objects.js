//Object Lieterals



const MySymbol = Symbol("MySymbol")
JsUser = {
    name: "Shubh",
    age: 21,
    email: "shubh@example.com",
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    "full_name": "Shubh Seth",
    [MySymbol]: "This is a symbol property"
}

console.log(JsUser.name) //Shubh
console.log(JsUser["name"]) //Shubh
console.log(JsUser["full_name"]) //Shubh Seth//only way to access
console.log(JsUser[MySymbol]) //This is a symbol property

// JsUser.age = 22 //update age
// Object.freeze(JsUser) //freeze the object to prevent further modifications
// JsUser.age = 23 //this will not update age as object is frozen
// console.log(JsUser) //22

JsUser.greeting = function() {
    console.log("Hello");
}

console.log(JsUser.greeting()) //Hello
console.log(JsUser) //object with greeting method

JsUser.greeting2 = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
console.log(JsUser.greeting2()) //Hello, my name is Shubh and I am 21 years old.