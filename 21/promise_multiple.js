const fs = require("fs").promises

let arr = ["./f1.txt","./f2.txt","./f3.txt"]

//parallel
for(let i =0;i<arr.length;i++){
    let fileReadPromise = fs.readFile(arr[i])
    fileReadPromise.then((data)=>{
        console.log("Content "+data)
    })

}

//serial
let fileReadPromise = fs.readFile(arr[0])
for(let i =1;i<arr.length;i++){
    
    fileReadPromise = fileReadPromise.then((data)=>{
        console.log("Content "+data)
        return fs.readFile(arr[i])
    })
    

}

fileReadPromise.then((data)=>{
    console.log("Content "+data)
})


