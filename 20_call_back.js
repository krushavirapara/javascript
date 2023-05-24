//synchronous callback
function greet(name,age,callback,callback2){
    let msg = "hello " + name
    var age = age
    callback(msg)
    callback2(age)

}

function logGreeting(msg){
    console.log(msg)
}

function logAge(age){
    console.log(age)
}


greet("steve",45,logGreeting,logAge)

//asynchronous 

console.log("Hello")

function sayBye(){
    console.log("Bye")
}

setTimeout(st1,2000)
setTimeout(st2,1000)

function st1(){
    console.log("sts1")
}

sayBye()

function st2(){
    console.log("sts2")
}