let counter =0
function greet(){
    counter++
    console.log("Hello")
    if (counter>=3){
        clearInterval(i)
    }
}
let i = setInterval(greet,2000)
console.log("byee")


function f(){
    function y(){
        console.log("y")

    }
    function z(){
        console.log("z")
    }
    return {
        y: y,
        z: z
    }
}

//  const {a,b}  = f()
// a()
// b()

const a = f().y
a()