let p1 = new Promise((resolve,reject)=>{
    resolve("promise 1")
})

let p2 = new Promise((resolve,reject)=>{
    reject("promise 2")
})

let p3 = new Promise((resolve,reject)=>{
    resolve("promise 3")
})


let PromiseRace = Promise.race([p3,p1,p2]) //will return Promise object
PromiseRace.then((val)=>console.log(val))
.catch(err=>console.log(err))


//focuses more on single object i.e output depends on first promise