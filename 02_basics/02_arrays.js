const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros.concat(dc_heros))
const all_heros = [...marvel_heros , ...dc_heros]
//console.log(all_heros)
const another_array = [1 , 2 , 3 , 5 , [4 ,7 , 3] ,8,[9,10,[2,4,6]] ]
const real_another_array = another_array.flat(Infinity)
// flat je bracket mai depth likhi jati hai .
//console.log(real_another_array)
console.log(Array.isArray("Pratham"))
console.log(Array.from("Pratham"))
console.log(Array.from({name : "Aditya"})) // Interesting because it is confuse ki key ko convert kare array mei ya phir value ko.
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3))
