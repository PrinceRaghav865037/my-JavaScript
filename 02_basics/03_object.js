//Singleton



  

//object literals
const mysym = Symbol("key1")
const Jsuser = {
    name : "Prince" ,
   // mysym : "myKey1" , // it is string declare not symbol data type.
    [mysym] : "mykey1" ,
    "full name" : "Prince Raghav" ,
    age : 20,
    location : "West UP",
    email : "iodsdisdd@.fhrffr" , 
    isLoggedIn : false ,
    lastLogInDays : ["sunday" , "Tuesday"]

}
//console.log(Jsuser.email)
// first method to access the elements of object but it is not work in all places 
//console.log(Jsuser["email"]) 
// this is also a method to access the element of object and prefer to used this method.
// console.log(Jsuser["full name"])
// console.log(Jsuser[mysym])
// console.log(typeof Jsuser[mysym])
// console.log(Jsuser)
// Jsuser.email = "dhiehdiwdw@chatgpt"
// console.log(Jsuser.email)
// Object.freeze(Jsuser)
// Jsuser.email = "dhiehdiwdw@gemini"
// console.log(Jsuser)
Jsuser.greetings = function(){
    console.log("Hello from the Js User")
}
console.log(Jsuser.greetings())
Jsuser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`)
}
console.log(Jsuser.greetingTwo())
