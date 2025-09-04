const numbers = [1 , 2 , 3 , 6 , 0 ]
const heros = ["batman" , "superman" , "thor" , "krish"]
const myArr2 = new Array(0 ,1 ,2 , 3, 4 , 5 , 6)
//console.log(numbers[3])

// Array methods....

// myArr2.push(9)
// myArr2.push(10)
// console.log(myArr2)
// myArr2.pop()
// console.log(myArr2)
// myArr2.unshift(0)
// myArr2.shift()
// myArr2.shift()
// console.log(myArr2)
// console.log(myArr2.includes(7))
// console.log(myArr2.indexOf(4))
// const newArr = myArr2.join()
// console.log(myArr2)
// console.log(newArr)
// console.log(typeof newArr)

// slice and splice
console.log("A " , myArr2) 
const mynew = myArr2.slice(1 , 3) // not include last index but not change main array
console.log(mynew)
console.log("B " ,myArr2)

const mynew2 = myArr2.splice(1 , 3) // include first and last index but also change the main array.
console.log("C " , myArr2)
console.log(mynew2)