const userEmail = ""
if(userEmail){
    console.log("got user email")
}else{
    console.log("don't get user email")
}
//falsy values
// false , 0 , -0 , BigInt 0n ,"", NULL , undefined , NaN

//truthy values
// "0" , 'false' , " " , [] , {} , function(){}
if(userEmail.length===0){
    console.log("Array is empty")
}
const empObj = {}
if(Object.keys(empObj).length===0){
    console.log("Object is empty")
}
//Nullish coalescing operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 10
val1 = null ?? 5 ?? 10
console.log(val1)

// ternary operator
//condition ? true : false
const ice = 100;
ice<=80 ? console.log("lessthan 80") : console.log("morethan 80")