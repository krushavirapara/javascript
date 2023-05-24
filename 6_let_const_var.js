//Temporal Dead Zone -> let&connst
//area above declaration of variable is called temporal dead zone for that variable
//console.log("line 1:",varname)
//if you try to access before declaration in let &const then reference error will be thrown


let varname
console.log("line 3:",varname)
varname =40
console.log("line 5:",varname)
varname+=1
//let varname
//you cannot redeclare varname
console.log("line 7:",varname)

let fruits= "apple"
console.log("line 15:",fruits)
{
    let fruits
    console.log("line 18",fruits)
    fruits = "orange"
    {
        console.log("line 21:",fruits)
        fruits = "banana"
        fruits= "kiwi"
    }
    console.log("line 24:",fruits)
    console.log("line 25:",fruits)
}
console.log("line 26:",fruits)

//output with variable declared with let or const
//line 18 will be undefined
// line 15: apple
// line 18 undefined
// line 21: orange
// line 24: kiwi
// line 25: kiwi
// line 26: apple

var vfruits= "apple"
console.log("line 40:",vfruits)
function ft()
{
    var vfruits
    console.log("line 43",vfruits)
    vfruits = "orange"
    {
        console.log("line 46:",vfruits)
        vfruits = "banana"
        vfruits= "kiwi"
    }
    console.log("line 50:",vfruits)
    console.log("line 51:",vfruits)
}
ft()
console.log("line 53:",vfruits)

//output with var
// line 40: apple
// line 43 undefined
// line 46: orange
// line 50: kiwi
// line 51: kiwi
// line 53: apple

//var has functipn scope let and const have block scope
var vfruits= "apple"
console.log("line 67:",vfruits)

{
    var vfruits
    console.log("line 71",vfruits)
    vfruits = "orange"
    {
        console.log("line 74:",vfruits)
        vfruits = "banana"
        vfruits= "kiwi"
    }
    console.log("line 78:",vfruits)
    console.log("line 79:",vfruits)
}

console.log("line 82:",vfruits)

//output without function with var declaration
// line 67: apple
// line 71 apple
// line 74: orange
// line 78: kiwi
// line 79: kiwi
// line 82: kiwi

let greeting;
greetign = {}; // Typo!
console.log(greetign);
const a = {}
const b = {
    'key':'b'

}
console.log(typeof JSON.stringify(b))
console.log(Object.toString(b))

//Variables declared with var are not local to the loop, i.e. they are in the same scope the for loop is in. 
//Variables declared with let are local to the statement.

//The result of this expression is discarded.