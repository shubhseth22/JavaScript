const coding =["js", "py", "rb", "java"];

coding.forEach(function(item, index,array) {
    console.log(item);// js, py, rb, java
    console.log(index);// 0, 1, 2, 3
    console.log(array);// ["js", "py", "rb", "java"] for each item in the array, the entire array is logged.
});

coding.forEach((item, index, array) => {
    console.log(item);
});// js, py, rb, java

// The forEach() method executes a provided function once for each array element. It takes three arguments: the current item, the index of the current item, and the array itself. In this example, we log the item, index, and array for each element in the coding array.
//we don't write name of function, because it's an anonymous function, which is a function that is defined without a name. Anonymous functions are often used as arguments to other functions, such as in the forEach() method, where we pass an anonymous function to be executed for each element in the array.


function print(item) {
    console.log(item);
}

coding.forEach(print);// js, py, rb, java



const arr=[
    {
        languagename: 'JavaScript',
        languagefilename: 'js'
    },
    {
        languagename: 'Python',
        languagefilename: 'py'
    },
    {
        languagename: 'Ruby',
        languagefilename: 'rb'
    }
]
arr.forEach((item) => {
    console.log(item.languagename);
})// JavaScript, Python, Ruby
