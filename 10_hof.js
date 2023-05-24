//Functions that take another function as an argument, or that define a function as the return value, are called higher-order functions.

//map -will return mapped array with function
myArr =[1,2,3,4,5]

let squaredArr = myArr.map(function(x){
    return x*x
}).reduce(function(acc,curr){
    acc+=curr
    return acc
},0)

console.log(squaredArr)
 
//filtyer - will return filterd array
let filterArr = myArr.filter(function(x){
    return x%2==0
})

console.log(filterArr)

//reduce - will return reduced single value
let rsum = myArr.reduce(function(accumulator,x){
    return accumulator + x
},0)

console.log(rsum)

const users = [
    {"firstname":"john","lastname":"wick","age":58},
    {"firstname":"bruce","lastname":"lee","age":26},
    {"firstname":"tom","lastname":"riddle","age":43},
    {"firstname":"ross","lastname":"geller","age":58},
]

const output = users.reduce(function(acc,curr){
    if (curr["age"]>50){
        acc.push(curr.firstname)
    }
    return acc
},[])

console.log(output) // [ 'john', 'ross' ]

//or you can do the above thong using filter also
const scenario1 = users.filter(function(x){
    if (x["age"]>50){
        return x
    }
}).map(function(x){
    return x.firstname + x.lastname
})
console.log(scenario1)

const scenario2 = users.reduce(function(acc,curr){
    if(acc[curr["age"]]){
        acc[curr["age"]]+=1
    }
    else{
        acc[curr["age"]]=1
    }
    return acc
},{})

console.log(scenario2) //{ '26': 1, '43': 1, '58': 2 }
