// let myName = "hitesh      "
// let myChannel = "chai     "

// console.log(myName.trueLength); //we want this trueLength in this 


let myHeros = ["thor" , "spiderman"]

let heroPower ={
    thor: "hammer",
    spider: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}

Array.prototype.heyhitesh = function(){
    console.log(`hitesh says hello`);
    
}

// heroPower.hitesh()
// myHeros.hitesh()

//heroPower.heyhitesh()
myHeros.heyhitesh()

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.co3m"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport , Teacher )

let anotherUsername = "chaiAurCode"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()