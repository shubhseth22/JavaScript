//using for each loop we cannnot perform any opettion on the array elements.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const neNums=myNums.filter((num)=>num>2);
console.log(neNums);// [3, 4, 5, 6, 7, 8, 9, 10]

// The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this example, we use the filter() method to create a new array called neNums that contains only the numbers from myNums that are greater than 2. The resulting array is [3, 4, 5, 6, 7, 8, 9, 10].

userbooks=[
    {
        title: 'A',
        genre: 'Fiction',
        published: 2020
    },
    {
        title: 'B',
        genre: 'Non-Fiction',
        published: 2018
    },
    {
        title: 'C',
        genre: 'Fiction',
        published: 2021
    },
    {
        title: 'D',
        genre: 'Non-Fiction',
        published: 2019
    }
]

const fictionBooks = userbooks.filter((book) => book.genre === 'Fiction');

const newFiction=userbooks.filter((book) => book.genre === 'Fiction' && book.published > 2020);

console.log(fictionBooks);// [{title: 'A', genre: 'Fiction', published: 2020}, {title: 'C', genre: 'Fiction', published: 2021}]
console.log(newFiction);// [{title: 'C', genre: 'Fiction', published: 2021}]