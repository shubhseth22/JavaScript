function loginUserMessage(username) {//if we write username='shubh' then it will be default value and if we pass any value then it will override the default value
    if(!username) {
        return 'Username is required to log in.';
    }
    return `User ${username} logged in successfully.`;
}
console.log(loginUserMessage('Alice')); // Output: User Alice logged in successfully.
console.log(loginUserMessage('')); // Output: Username is required to log in.
//-------------------------------------------------------------------------------------------------------------------

function CalculateCartPrice(...prices){//rest operator is used to take variable number of arguments and it will return an array of those arguments
    return prices
}
console.log(CalculateCartPrice(10, 20, 30)); // Output: [10, 20, 30]

//--------------------------------------------------------------------------------------------------------------------

const user={
    name:'Shubh',
    prices:100
}

function displayUserInfo({name, prices}){
    return `User ${name} has a cart total of $${prices}.`;
}
console.log(displayUserInfo(user)); // Output: User Shubh has a cart total of $100.
console.log(displayUserInfo({name:'Alice', prices:200})); // Output: User Alice has a cart total of $200.

//--------------------------------------------------------------------------------------------------------------------

const myArr=[1, 2, 3, 4, 5];

function ReturnSecondElement(anyArr){
    return anyArr[1];
}
console.log(ReturnSecondElement(myArr)); // Output: 2