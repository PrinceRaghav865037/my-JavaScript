const promiseOne = new Promise(function(resolve , reject){
    // Do any async task
    // DB calls , cyptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    } , 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2" );
        resolve()
    } , 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "chai" , email: "chai@example.co3m"})
    }, 1000)
})

promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"prince" , password: "123"});
        }
        else{
            reject('Error: Something went wrong')
        }
    } , 1000)
})

promiseFour
.then((user) => {
console.log(user);
return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JavaScript" , password: "123"});
        }
        else{
            reject('Error: Something went wrong')
        }
    } , 1000)
})

// async await directly errors ko handle nhi kar sakta 

async function consumePromiseFive(){
    try{
        const response = await promiseFive
   console.log(response);
    } catch(error){
        console.log(error);
    }
   
}

consumePromiseFive()
//console.log(username);

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1')

//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log("E: " , error);
          
//     }
// }

//getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users/1')
.then((response) => {
    return response.json()
})
.then((data) => {
console.log(data);
})
.catch((error) => console.log(error))