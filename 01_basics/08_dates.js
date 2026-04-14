let mydate = new Date()

console.log(mydate)
console.log(typeof mydate) //object
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toTimeString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleTimeString())

const specificDate = new Date('2022-01-01')
console.log(specificDate.toDateString())

const specificDate2 = new Date(2022, 0, 1 ,5 ,3) // month is 0-indexed
console.log(specificDate2.toLocaleString())

let mytimestamp = Date.now()
console.log(mytimestamp) //milliseconds since Jan 1, 1970

console.log(mydate.getTime()) //milliseconds since Jan 1, 1970

console.log(Math.floor(Date.now() / 1000)) //seconds since Jan 1, 1970

let newDate1 = new Date()
console.log(newDate1)
console.log(newDate1.getFullYear())
console.log(newDate1.getMonth()+1) //0-indexed
console.log(newDate1.getDate())


console.log(newDate1.toLocaleString('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
))