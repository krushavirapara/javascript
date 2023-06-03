let p1 = new Promise((resolve,reject)=>{
    resolve("promise 1")
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise 2")},2000)
    
})

let p3 = new Promise((resolve,reject)=>{
    resolve("promise 3")
})


let PromiseRace = Promise.allSettled([p1,p2,p3]) //will return Promise object
PromiseRace.then((val)=>console.log(val))
.catch(err=>console.log(err))