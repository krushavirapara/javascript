const arr  = [1,2,3,4,5]
arr.shift()
console.log(arr)

//it is possible because arr stores the address of arr object
//everything is object in js
let arr2 = [1,2,3,4,5]
arr2.myprop = "property"
arr2.print = function(){
    console.log("Hello from Array")
}
console.log(arr2)
for(let key in arr2){
    console.log(key + ":" + arr2[key])
}
arr2.print()
console.log()
function fn(){
    console.log("this is function")
    console.log(this)
}
fn.prop = "function property"
fn.method = function(){
    console.log("function method")
}
console.log(fn)
for(let key in fn){
    console.log(key  + ":" + fn[key])

}
fn()
fn.method()