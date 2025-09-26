// console.log("P")
// console.log("r")
// console.log("i")
// console.log("n")
// console.log("c")
// console.log("e")
// Now we use functions.
// function userName(){
//     console.log("P")
//     console.log("r")
//     console.log("i")
//     console.log("n")
//     console.log("c")
//     console.log("e")
// }
function addTwoNumbers(num1 , num2){
    //console.log(num1 + num2);// it is only print in console not return value.
    return num1 + num2;
    console.log("shivam") // after the return line nothing is run .
}
// addTwoNumbers(3 , 4) // result is 7
// addTwoNumbers(3 , "4") // result is 34
// addTwoNumbers(3 , "b")  // result is 3b
// addTwoNumbers(3 , null) // result is 3.
//console.log(addTwoNumbers(8 , 7))
function userLoginMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in .`
}
 //console.log(userLoginMessage("Aditya Kumar"))
//console.log(userLoginMessage(""))// it send null value as a argument to a function .
//console.log(userLoginMessage()) // if you not any argument to this function then it takes the value sam but when you pass the value then it takes that value and overwrite on sam.
function carPrice(val1 , val2 ,...num1){//... these three dots are also used spread opeartor and restin operator.
    return num1;

}
//console.log(carPrice(200 , 250 ,500, 600, 490)) // now it returns array.
const user={
    username : "Pratham",
    price : 400
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
// handleObject({
//     username : "Thakur",
//     price : 800
// })
const myNewArray = [400, 500, 200 ,300]
function returnSecondValueArray(getArray){
    return getArray[1]
}
//console.log(returnSecondValueArray(myNewArray))
console.log(returnSecondValueArray([45 , 55 ,22,11, 10]))