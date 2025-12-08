//Immediately Invoked Function Expression
(function chai(){
    // named IIFE
    console.log(`Db connected`)
})(); // here you can end the first iffe by use of ; then declare another iife
( (name) =>{
    console.log(`Db connected two ${name}`)
})("Raghav")