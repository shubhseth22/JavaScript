const mynum=[1,2,3,4,5,6,7,8,9,10]

const newnum=mynum.map((num)=>num*2);
console.log(newnum);// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. In this example, we use the map() method to create a new array called newnum that contains the result of multiplying each number in mynum by 2. The resulting array is [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].

const newnumber=mynum
                    .map((num)=>num*2)
                    .map((num)=>num+1)
                    .filter((num)=>num>10);
console.log(newnumber);// [11, 13, 15, 17, 19, 21]

// In this example, we chain multiple array methods together. We first use the map() method to multiply each number in mynum by 2, then we use another map() method to add 1 to each of those results. Finally, we use the filter() method to create a new array that only includes numbers greater than 10. The resulting array is [11, 13, 15, 17, 19, 21].