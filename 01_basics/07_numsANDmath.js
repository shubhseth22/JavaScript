const balance = 1000;
console.log(balance);//1000

const payment = new Number(500);
console.log(payment);//[Number: 500]

console.log(balance.toString());//1000
console.log(payment.toFixed(2));//500.00

const newNumber = 123.456789;
console.log(newNumber.toPrecision(4));//123.5

const newNumber2 = 1000000;
console.log(newNumber2.toLocaleString());//1,000,000
console.log(newNumber2.toLocaleString('en-IN'));//10,00,000

//*************************************mMATHS*************************************/

console.log(Math.abs(-5));//5
console.log(Math.round(4.7));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.7));//4
console.log(Math.max(1, 5, 3, 9, 2));//9
console.log(Math.min(1, 5, 3, 9, 2));//1
console.log(Math.random());//random number between 0 and 1
console.log(Math.floor(Math.random() * 10)+1);//random number between 1 and 10

const min=10;
const max=20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);//random number between 10 and 20