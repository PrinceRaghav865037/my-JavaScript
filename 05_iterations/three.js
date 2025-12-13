// for of loop 
const arr  = [ 1 ,3 , 5, 6 ,8]
for (const num of arr) {
    //console.log(num)
}
const greetings = "Hello World!"
for (const greet of greetings) {
  //  console.log(greet)
}
const map = new Map()
map.set('IN' , "INDIA")
map.set('USA' ,"UNITED STATES OF AMERICA")
map.set('FR' , "FRANCE")
map.set('IN' , "INDIA")
//console.log(map)
for (const [key , value] of map) {
    //console.log(key , ":-" , value)
}
 const myObj = {
    "game1" : 'BGMI' ,
    "game2" : 'FREE FIRE'
 }
 for (const [key , value] of myObj) {
    console.log(key , ":-" , value)
}
