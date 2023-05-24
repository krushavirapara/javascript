real() //third
function real(){
    console.log("first")
}
real() //third
function real(){
    console.log("second")
}
real() //third
function real(){
    console.log("third")
}

real() //third

//we can call real anywhere in the program and output will remain "third"
//necause real will point to the last declared function only


//exercise
console.log("varname",varname)
var varname;
console.log("varname",varname)
varname=11
console.log("varname",varname)
fn()
function fn(){
  console.log("simple function")
}
fn()
console.log(fo)
//here typeof fo will be undefined 
var fo = function g(){
  console.log("function expression")
}
fo()
//after assignment typeof fo will be function
console.log(typeof fo)