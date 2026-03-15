const user = {
    username : "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);
// const promiseOne = new Promise()
// const date = new date()

function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.user}`);
    }

    return this  // no need it is automatically return the object 
}

const userOne = new User("hitesh" , 12 , true)
const userTwo = new User("chaiAurCode" , 11 , false)

// console.log(userOne)
console.log(userOne.constructor)
//console.log(userTwo)
