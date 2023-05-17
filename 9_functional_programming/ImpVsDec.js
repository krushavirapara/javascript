// to find if square of number is even or not

//Imperative way
var x =5;
const square = x*x

let isEven

if(square%2==0){
    isEven=true
}
else{
    isEven = false
}

console.log(isEven);

//Declarative Way
const decEven = (num) => (num*num)%2==0 ? true : false
console.log(decEven(4))
 

