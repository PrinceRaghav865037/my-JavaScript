const myNums = [1 , 2 , 3]
//const 
// const myTotal = myNums.reduce(function(acc , currval){
//     console.log(`acc: ${acc} and currval : ${currval}`)
//     return acc+currval
// },0)
const myTotal = myNums.reduce((acc , currval)=> acc+currval,0)
//console.log(myTotal)
const shopingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "c++ course",
        price : 3400
    },
    {
        itemName : "web course",
        price : 8000
    },
    {
        itemName : "dsa course",
        price : 5500
    }
]
const priceTopay = shopingCart.reduce((acc,item) => acc + item.price , 0)
console.log(priceTopay);

