//Impure function

let a = 2;
function Sum(b){
    console.log(a+b)
}

Sum(2) // 4
a=7
Sum(2) // 9

//even with same argument output is different because it depends on external factor 


//pure function
function pureSum(a,b){
    console.log(a+b) //side effect
}

pureSum(2,3) //5
//it gives same result every time with same parameter

//still it has one side effect because it can mutate external screen with console.log()
//hence to remove that dependancy we will return the result from function to make it pure function

function pureSum2(a,b){
    return (a+b)
}

console.log(pureSum2(2,3)) //5