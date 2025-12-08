let a = 400
if(true){
let a = 10;
const b = 30;
//console.log("INNER :" , a)
//var c = 50;
}
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
//console.log(a)
//console.log(b)
//console.log(c)
// function one(){
// const userName  = "Naitik"
// function two(){
//     const website = "pharmacy"
//     console.log(userName)
// }
// //console.log(website)
// two()
// }
// one()
console.log(addOne(4)) // it can be accessed before initialization .
function addOne(num){
    return num+1
}
//addOne(5)
console.log(addTwo(5));// it can't be accessed before initialization because this function hold into a const variable.
const addTwo = function(num){
 return num +2
}
// addTwo(5);