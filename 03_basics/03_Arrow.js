const user = {
    userName: "prince",
    price : 500,
    WelcomeMessage : function(){
        console.log(`${this.userName} wecome to the website`)
        //console.log(this)
    }
    
}
// user.WelcomeMessage()
// user.userName = "Anirudh"
// user.WelcomeMessage()
// console.log(this)
// function chai(){
//     const username = "Radhey"
//     console.log(this.username)// this keyword work for objects .
// }
// chai()
// const chai = function(){
//     const username = "Radhey"
//     console.log(this.username)
// }
// chai()
const chai = () => {
    const username = "Radhey"
    console.log(this.username)
}
//chai()
// const addTwo = (num1 , num2) => {
//     return num1+num2
// }
//const addTwo = (num1 , num2) => num1 + num2
//const addTwo = (num1 , num2) =>  (num1+num2)
const addTwo = (num1 , num2) =>  ({username : "Prince"})
// if we use {} brackets in arrow function then we madatory use the return . otherwise use parenthesis representation without return as written above.
console.log(addTwo(10 , 11))