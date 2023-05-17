//map pollyfill
let pollymap = function (myArr,cb){
    let newArr = []
    for (let i=0;i<myArr.length;i++){
        newArr.push(cb(myArr[i]))
    }
    return newArr
}

function square(x){
    return x*x
}

var myArr = [1,2,3,4,5]
console.log(pollymap(myArr,square))
console.log(myArr)

//filter pollyfill
let pollyfilter = (myArr,cb) =>{
    let newArr = []
    for(i=0;i<myArr.length;i++){
        if (cb(myArr[i])){
        
            newArr.push(myArr[i])
        }
    }
    return newArr
}
console.log(pollyfilter(myArr,isEven))
function isEven(x){
    return x%2===0
}


