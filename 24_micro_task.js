console.log("program starts")

setTimeout(()=>{
    console.log("I am tiimout")
})

Promise.resolve().then((val)=>{
    console.log("promise")
})

console.log("program ends")


//promisified code goes into micro_task queue

//priority of micro_task > callback queue
