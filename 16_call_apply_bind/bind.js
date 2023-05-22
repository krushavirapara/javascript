let person1  =  {
    name:"adam",
    age:25,
    fullDetail : function(city,state,a){
        console.log("this is full detail " + city + " " + state + " " + a)
        //console.log(this)

    }

}
//person1.fullDetail()

let person2  = {
    name:"tom",
    age:45,
}

// let person2detail = person1.fullDetail.bind(person2)
// person2detail()

// //polyfill
// Function.prototype.mybind = function(context,...args){
//     let obj = this
//     return function(...params){
//         context.fun  = obj
//         return context.fun([...args,...params])
//     }
// }
// let person2detail3 = person1.fullDetail.mybind(person2,"noida")
// person2detail3("U.P","Gujarat")


// function f(city,state,a){
//     console.log("this is full detail " + city + " " + state + " " + a)
//     //console.log(this)

// }
// args = "noida"
// params = ["U.P","Giujarat"]

// f([args,...params])

// function callMe(...args) {
//     console.log(arguments)
//     console.log( ' and my city is ' + arguments[0] + ' and state is ' + arguments[1]);
//   }
//   callMe("jk","l","m")


  Function.prototype.newBindWithoutApply = function (ctx, ...args) {
    // Preserving the default arguments passed with context 
    let allArguments = args;
    console.log (allArguments)
    
    /* Since we are not using call/apply, I'll create a reference of
    binding method within the context, and method will be invoked
    as context.methodcall() */
    
    ctx.fnToCall = this;
    // returning the new method with context
    return function (...args1) {
     allArguments = [...allArguments, ...args1]
     return ctx.fnToCall(...allArguments)
    }
   } 
    
let ft = person1.fullDetail.newBindWithoutApply(person2,"city")
ft("U","P")

Function.prototype.myApply = function(ctx, ...args) {
    ctx.fnToCall = this;
    return ctx.fnToCall(...args)
  }