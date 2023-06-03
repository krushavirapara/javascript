const PENDING =0
const FULLFILLED = 1
const REJECTED = 2

function myPromise(exec){
    let state = PENDING
    let value = null
    let handlers = []
    let catchers = []

    function resolve(result){
        if (state!=PENDING){
            return
        }

        state = FULLFILLED
        value = result
        handlers.forEach( h => h(value)
            
       );
    }

    function reject(result){
        if (state!=PENDING){
            return
        }

        state = REJECTED
        value = result
        catchers.forEach( h => h(value)
            
        );
    }

    exec(resolve,reject)
    
    this.then  = function(callback){
        if (state === FULLFILLED){
            callback(value)
        }
        else{
            handlers.push(callback)
        }
    }

    this.catch  = function(callback){
        if (state === REJECTED){
            callback(value)
        }
        else{
            catchers.push(callback)
        }
    }
}

const p = new myPromise(function(resolve,reject){
    if(2==3){
        setTimeout(() => resolve("this is resolved"),2000)
    }
    else{
        setTimeout(() => reject("this is rejected"),2000)
    }
})

p.then((value)=>{
    console.log(value)
})
p.catch((value)=>{
    console.log("rejected",value)
})


// function example(value){
//     console.log(this)
//     this.then =  function(callback){
//         on = callback
//         console.log(this)
//         return this
//     }
//     this.val = value

// }

// let f =  new example("value")
// console.log(f.then("miss"))

// class address{
//     constructor(handler){
//         this.value = handler,
//         this.status = "pending"
        
//     }

//     random(){
//         console.log(this)
//     }
//     then(a,b){
//         let p =new address(function(){
//             console.log(this)
//         })
//         console.log(this)
//         return p
        
//     }
// }

// let a = new  address(45)

// z = a.then()
// z.value()
// console.log(z)