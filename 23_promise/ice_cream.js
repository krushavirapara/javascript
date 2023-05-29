let is_shop_open = true
// // #1 Place Order
// // - 2
// // #2 Cut The Fruit
// // = 2
// // #3 Add water and ice - 1
// // #4 Start the machine 1
// // #5 Select Container
// // - 2
// // #6 Select Toppings
// // -›
// // 3
// // #7 Serve Ice Cream
// // = 2

// let order = function(work,time){
//     return new Promise((resolve,reject)=>{
//         if (is_shop_open){
//             setTimeout(()=>{resolve(work())},time)
//         }
//         else{
//             reject(err)
//         }
//     })
// }

// let p = order(()=>{console.log("order placed")},2000)
// p.then(()=>{return order(()=>{console.log("cut the fruit")},2000)})
// .then(()=>{ return order(()=>{console.log("start the machine")},1000)})
// .then(()=>{ return order(()=>{console.log("select container")},2000)})
// .then(()=>{ return order(()=>{console.log("add water and ice")},1000)})
// .then(()=>{ return order(()=>{console.log("select toppings")},3000)})
// .then(()=>{ return order(()=>{console.log("serve ice-cream")},2000)})



let order = ( time, work ) => {

    return new Promise( ( resolve, reject )=>{
  
      if( is_shop_open ){
  
        setTimeout(()=>{
  
         // work is 👇 getting done here
          resolve( work() )
  
  // Setting 👇 time here for 1 work
         }, time)
  
      }
  
      else{
        reject( console.log("Our shop is closed") )
      }
  
    })
  }


  order(2000,()=>console.log(`fruits was selected`))

// step 2
.then(()=>{
  return order(0000,()=>console.log('production has started'))
})

// step 3
.then(()=>{
  return order(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`water and ice added`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log("start the machine"))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log(`ice cream placed on cup`))
})

// step 7
.then(()=>{
  return order(3000, ()=>console.log(` as toppings`))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Serve Ice Cream"))
})