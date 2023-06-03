const fs  = require('fs')

console.log("before")

fs.readFile('f1.txt',cb)

//serial
function cb(err,data){
    console.log("content " + data)
    fs.readFile('f2.txt',cb2)
    function cb2(err,data){
        console.log("content " +data)
        fs.readFile('f3.txt',cb3)
        function cb3(err,data){
            console.log("content " +data)
        }
    }
    
    // function xy(){
    //     fs.readFile('f2.txt',cbp)
    //     fs.readFile('f3.txt',cbp)
    //     function cbp(err,data){
    //         console.log("content " +data)
    //     }
    // }

}

//parallel
// fs.readFile('f2.txt',cbp)
// fs.readFile('f3.txt',cbp)
// function cbp(err,data){
//     console.log("content " +data)
// }


console.log("after")




