const array = [1, 2, 3, 4, 5]

const fruits = ['apple', 'banana', 'cherry']

const newArray = new Array(6, 7, 8, 9, 10)

console.log(array[0]) //1

array.push(6) //add to end
array.pop() //remove from end

array.unshift(0) //add to start
array.shift() //remove from start

console.log(array.length) //5

console.log(fruits.includes('banana')) //true
console.log(fruits.includes('grape')) //false

console.log(array.indexOf(3)) //2
console.log(array.indexOf(10)) //-1

const newArray2 = array.join()
console.log(newArray2) //1,2,3,4,5
console.log(typeof newArray2) //string

//slice and splice
const slicedArray = array.slice(1, 4) //start index, end index (not included)
console.log(slicedArray) //[2, 3, 4]


const myarr2=array.splice(1, 4) //start index, number of elements to remove
console.log(myarr2) //[2, 3, 4]
console.log(array) //[1, 5] remaining elements in original array after splice

