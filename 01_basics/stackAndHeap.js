// we have two types of datatypes in javascript.
//Primitive type and Non-primitive type.
//primitive includes(7 types) => string , numbers  , null , undefined , symbol , bigint , boolean 
 
// Non-Primitive type(refernce) => Array , Object , Functions.
const heros = ["Batman" , "Superman" , "Thor" ];
let myObj = {
    name:"Prince" ,
    age : 20,
}
const myFuction = function(){
console.log("Hello World")
}


//+++++++++++++++++++++++++++++++++++++++++++++++++
// stack(Primitive) and Heap(Non-Primitive) Memory
let myYtName = "shagun@dhkjds"
let anotherName = myYtName
anotherName = "Vipin@34jdhh"
console.log(myYtName)
console.log(anotherName)
//stack mei duplicate copy assign hoti hai
// In Heap if you assign then refernce is assign and changes is take place at original value .
let obj1 = {
    email:"RadheShyam@mongoApi" ,
    upi : "roj@ybl",
} 
let obj2 = obj1
obj2.email = "KrishnaPalsingh@mongoApi"
console.log(obj1.email);
 console.log(obj2.email);
 

