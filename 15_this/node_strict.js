//use oh this keyword in node in strict mode
'use strict'
// a =3 
// console.log(a)
//when you try to do above console.log it will give reference error because of strict mode



//1.globally
console.log(this) //return {}

//2.Inside a function
function f(){
    console.log(this) //return undefined
}
f()

//3.Inside a fuction of object
let obj = {
    name: "adam",
    age:25,
    fullDetails : function(){
        console.log(this) 
    }
}
obj.fullDetails() //return object itself


//4.Inside a nested function in object
const person = {
    name: "steve",
    age:20,
    fullDetails : function(){
        function showDetails(){
            console.log(this) //return undefined
            console.log("show-details")
        }
        showDetails()
    }
}
person.fullDetails() 