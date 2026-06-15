(function chai(){
    console.log(`DB connection established`);
})(); // IIFE stands for Immediately Invoked Function Expression. It is a function that is executed immediately after it is defined. It is a design pattern that is used to create a new scope and avoid polluting the global scope. In the above example, we are defining a function called chai and immediately invoking it. This will print "DB connection established" to the console. IIFE is commonly used to create a new scope for variables and functions, and to avoid polluting the global scope.semicolon is used to terminate the statement. if not used here next iife function will not be executed because it will be treated as a function call to the previous iife function.
//this is named IIFE.

( (name) => {
    console.log(`DB connection established with ${name}`);
})('shubh') // This is an arrow function IIFE. It is a shorter syntax for defining a function. The above code will also print "DB connection established" to the console.
//This is unnamed IIFE.