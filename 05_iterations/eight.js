const mynms=[1,2,3,4,5,6,7,8,9,10]

const newnms=mynms.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(newnms);// 55

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. In this example, we use the reduce() method to sum all the numbers in the mynms array. The reducer function takes an accumulator and a current value as arguments. We initialize the accumulator to 0 (the second argument to reduce()) and add each current value to it. The final result is 55, which is the sum of all the numbers in the array.

const shoppingcart=[
    {
        item: 'Book',
        price:699
    },
    {
        item: 'Pen',
        price: 49
    },
    {
        item: 'Notebook',
        price: 199
    },
    {
        item: 'Bag',
        price: 999
    }

]
const totalPrice=shoppingcart.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
console.log(totalPrice);// 1946