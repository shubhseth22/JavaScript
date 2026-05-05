// const tinderUser = new Object();   //singleton object

const tinderUser = {}

tinderUser.id="12345abc"
tinderUser.name="John Doe"
tinderUser.age=30
tinderUser.isLoggedIn = true

console.log(tinderUser)

const regularUser = {
    id: "67890xyz",
    fullname: {
        firstName: "Jane",
        lastName: "Smith"
    },
    age: 25,
    isLoggedIn: false
}
console.log(regularUser.fullname.firstName)


const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj3={7:"g",8:"h",9:"i"}

const obj4=Object.assign({}, obj1, obj2, obj3)
const mergedObj={...obj1,...obj2,...obj3}//same output
// console.log(mergedObj)
// console.log(obj4)

const users=[
    {
        id: "12345abc",
        name: "John Doe",
        age: 30,
        isLoggedIn: true
    },
    {
        id: "67890xyz",
        fullname: {
            firstName: "Jane",
            lastName: "Smith"
        },
        age: 25,
        isLoggedIn: false
    }
]//Objects stored in array 

console.log(users[1])

console.log(Object.keys(tinderUser))//prints all keys in array
console.log(Object.values(tinderUser))//prints all values in array
console.log(Object.entries(tinderUser))//prints all key-value pairs in array

console.log(tinderUser.hasOwnProperty("id"))//checks if id exists


