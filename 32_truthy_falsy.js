const { default: test } = require("node:test")

//double equals
let double = 2 =="2"
console.log(double) //compares only value hence return true

let triple = 2 ==="2"
console.log(triple) //compares type hence return false

function truthyfalsy(val){
    val ? console.log("truthy"):console.log("falsy")
}

truthyfalsy(undefined) //falsy
truthyfalsy(false) //falsy
truthyfalsy("") //falsy
truthyfalsy(null) //falsy
truthyfalsy(0) //falsy
truthyfalsy(NaN) //falsy

console.log(" ")

truthyfalsy({}) //truthy
truthyfalsy(()=>{}) //truthy
truthyfalsy(4) //truthy
truthyfalsy(new Boolean(false)) //truthy
let fe  = function(){
    if((-100 && 100 && "0") 
    || []=== true || 0){
        console.log(1)
    }
    if ([] || (0 && false)){
        console.log(2)
    }
    if(Infinity && NaN && "false"){
        console.log(3)
        if (""){
            console.log(4)
        }
        else{
            console.log(5)
            if (({} || false === "")&& !(null && undefined)){
                console.log(6)
            }
        }
    }
}

fe()