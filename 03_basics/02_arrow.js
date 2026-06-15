const user={
    username:"Shubh",
    price: 999,

    WelcomeMessage: function(){
        console.log(`Welcome ${this.username} to the world of JavaScript`);
        console.log(this); // this will refer to the user object
    }
}

user.WelcomeMessage();
user.username="Shubhanshu";
user.WelcomeMessage();
//this keyword is used to refer to the current object. It is used to access the properties and methods of the current object. In the above example, we are using this keyword to access the username property of the user object.

console.log(this); // this will refer to the global object (window in browsers) in non-strict mode, and will be undefined in strict mode.

//this cannot be used in a function 
function chai(){
    let username="meow";
    console.log(this.username); // this will refer to the global object (window in browsers) in non-strict mode, and will be undefined in strict mode. Since we are not using strict mode, it will return undefined because there is no username property in the global object.
}
chai();

const arrowFunction = () => {
    let username="meow";
    console.log(this.username);
}
arrowFunction(); // this will refer to the global object (window in browsers) in non-strict mode, and will be undefined in strict mode. Since we are not using strict mode, it will return undefined because there is no username property in the global object. Arrow functions do not have their own this keyword, they inherit it from the parent scope. In this case, the parent scope is the global scope, so this will refer to the global object.

() =>{}// this is arrow function.

const addTwoNumbers = (a,b) => {
    return a+b;
}//this is explicit return. It has a return statement, it returns the value of the expression after the return statement.

// const addTwoNumbers = (a,b) => (a+b); // this is a short form of the above function. It is called an arrow function with implicit return. It does not have a return statement, it returns the value of the expression after the arrow.
console.log(addTwoNumbers(2,3)); // 5 
