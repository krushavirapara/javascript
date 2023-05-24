//ways to define functions in javascript

//1.function statement
function myfunction(){
  console.log("this is simple way to define a function");

}
myfunction()

//when you pass/return nothing then undefined is assigned
function myfunction2(param){
  console.log("this is simple way to define a function");
  console.log("param",param)

}
myfunction2()

//2. function expression
//functions are first class citizen in javascript
//funcyions are treated as variable
let a =[1,2,3]
let b =a //in the same way you can assigh function to a variable

//function expression means to put function address in variable

//you can assign function to variable
let newfunction = function myfunction(){
  console.log("this is function expression")
}

newfunction()


//3.anonymous function
let annonomusfunction = function (){
  console.log("this is anonymous expression")
}

annonomusfunction()

//4.arrow function
let arrowfunction = () =>{
  console.log("this is arrow function")
}

arrowfunction();


//5.Immedieately invoked function
(function() {
  console.log("this is IIFE");
})();

//you can pass or return function as a parameter and treat them as varaible 
//hence they are called first class citizens in javascript
function sayHello(param){
  console.log("hello",param)
  param()
}
 function smaller(){
  console.log("I am smaller function")
}
sayHello(smaller)

//function can also be returned from function
function outer(){
  console.log("I am outer")
  return function inner(){
    console.log("I am Inner")
  }
}

let rval = outer()
console.log(rval) //[function:inner]
rval() // i am inner