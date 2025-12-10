// if(2=="2"){
//     console.log("executed")
// }
const score = 200;
// if(score>100){
// console.log("Executed if block")
// }
// else{
// console.log("Executed else block")
// }
const userLoggedinByGoogle = true;
const LoggedinByEmail = true;
if(userLoggedinByGoogle && LoggedinByEmail){
    console.log("login successfully")
}
if(userLoggedinByGoogle || LoggedinByEmail){
    console.log("login successfully")
}