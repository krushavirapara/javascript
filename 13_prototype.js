
//in prototype this refers to the arr which calls the function
Array.prototype.myFunction = function g(){
    console.log("this is prototype")
    console.log("this points to the:",this)
}
let arr = [1,2,3,4,5]
arr.myFunction()

//map 
Array.prototype.mymap = function(cb){
    let newArr = []
    for(let i = 0;i<this.length;i++)
    {
        newArr.push(cb(this[i]))
    }
    return newArr
}

console.log("Mapped array",arr.mymap(x => x*x))

//filter
Array.prototype.myfilter = function(cb){
    let newArr = []
    for(let i = 0;i<this.length;i++)
    {
        if(cb(this[i])){
            newArr.push(this[i])
        }
        
    }
    return newArr
}

console.log("Filtered array",arr.myfilter(x => x%2===0))