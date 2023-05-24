// // //use oh this keyword in node in non_strict mode
// //"use strict"
// //1.globally
// console.log(this) //return window object

// //2.Inside a function
// function f(){
//     console.log(this) //return window object
// }
// f()

// //3.Inside a fuction of object
// let obj = {
//     name: "adam",
//     age:25,
//     fullDetails : function(){
//         console.log(this) 
//     }
// }
// obj.fullDetails() //return object itself


// //4.Inside a nested function in object
// const person = {
//     name: "steve",
//     age:20,
//     fullDetails : function(){
//         function showDetails(){
//             console.log(this) 
//         }
//         showDetails()
//     }
// }
// person.fullDetails() //return window object

console.log(Array)
console.log(Function)