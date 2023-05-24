console.log("Liine 1",varname)
var varname =  10

function b(){
    console.log("Liine 5",varname)
}

console.log("Liine 7",varname)

function fn(){
    console.log("Liine 11",varname)
    var varname4 =20
    b()
    console.log("Liine 13",varname)
}
fn()
//lexical scope means if function doesn't have variable then it has access to the variable defind in the area above fu ction definition and not  function call

//output
// Liine 1 undefined
// Liine 7 10
// Liine 11 undefined
// Liine 5 10
// Liine 13 20

console.log("Liine 25",varname2)
var varname2 =  15

console.log("Liine 28",varname2)

function fn2(){
    console.log("Liine 31",varname2)
    var varname2 =25
    function b(){
        console.log("Liine 34",varname2)
    }
    
    b()
    console.log("Liine 38",varname2)
}
fn2()

//output
// Liine 25 undefined
// Liine 28 15
// Liine 31 undefined
// Liine 34 25
// Liine 38 25

// console.log("Liine 1",varname)
// var varname =  10

// function b(){
//     console.log("Liine 5",varname4)
// }

// console.log("Liine 7",varname)

// function fn(){
//     console.log("Liine 11",varname)
//     var varname4 =20
//     b()
//     console.log("Liine 13",varname)
// }
// fn()
//when youy do something like above then b() doesn't have access to varname4 and you will get reference error.

// Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).
// This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.

var global_variable = 20;
  
    function main_function() {
        // Local Variable
        var local_variable = 30;
  
        var nested_function = function () {
  
            // Display the value inside the local variable
            console.log(local_variable);
        }
  
        var another_nested_function = function () {
              
            // Displays the value inside the global variable
            console.log(global_variable);
        }
  
        nested_function();
        another_nested_function();
    }
  
    main_function();

    //output 
    //30
    //20

var f;
function a(){
    b()
    function b(){
        console.log(f)
    }
}
f=40;
a()

