let p1 = new Promise((resolve,reject)=>{
    resolve("promise 1")
})

let p2 = new Promise((resolve,reject)=>{
    reject("promise 2")
})

let p3 = new Promise((resolve,reject)=>{
    resolve("promise 3")
})


let PromiseAll = Promise.all([p1,p2,p3]) //will return Promise object
console.log(PromiseAll)

PromiseAll.then((val)=>{console.log(val)}).catch((err)=>{console.log(err)}) //will return array of resolved promise . 
                                                                            //If any promise is rejected then it will go into catch block