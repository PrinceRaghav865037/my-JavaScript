const myobj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in myobj) {
    //console.log(`${key} is shortcut for ${myobj[key]}`)

}
const arr = ["cpp" ,"rb" ,"swift" , "js"]
for (const key in arr) {
    console.log(key)
}