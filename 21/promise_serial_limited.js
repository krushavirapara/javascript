const fs  = require("fs")

let fileRead1 = fs.promises.readFile("./f1.txt")

//callback hell
// fileRead1.then((data)=>{
//     console.log("content "+data)
//     let fileRead2 = fs.promises.readFile("./f2.txt")
//     fileRead2.then((data)=>{
//         console.log("content "+data)
//         let fileRead3 = fs.promises.readFile("./f3.txt")
//         fileRead3.then((data)=>{
//             console.log("content "+data)
//         })
//     })
    

// })

//another way

function cb1(data){
    console.log("content "+data)
    let fileRead2 = fs.promises.readFile("./f2.txt")
    return fileRead2

}

function cb2(data){
    console.log("content "+data)
    let fileRead3 = fs.promises.readFile("./f3.txt")
    return fileRead3

}

function cb3(data){
    console.log("content "+data)
}

// fileRead1.then(cb2).then(cb1).then(cb3).catch((err)=>{
//     console.log(err)
// })

//output
//f1
//f3
//f2

fileRead1.then(cb1).then(cb2).then(cb3).catch((err)=>{
    console.log(err)
})

//output
//f1
//f2
//f3