let order = (fruit_name, call_production) =>{

    setTimeout(function(){
  
      console.log(`${stocks.Fruits[fruit_name]} was selected`)
  
  // Order placed. Call production to start
    call_production();
    },2000)
    
  };
  
  // 2nd Function
  
  let production = () =>{
   
    setTimeout(()=>{
        console.log("production has started")
    
        setTimeout(()=>{
            console.log("The fruit has been chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
                setTimeout(()=>{
                    console.log(`machine started`)
                    setTimeout(()=>{
                        console.log(`container has been selected`)
                        setTimeout(()=>{
                            console.log(`toppings were selected`)
                            setTimeout(()=>{
                                console.log(`ice cream is served`)
                            },2000)
                        },3000)
                    },2000)
                },
                1000)
            },
            1000)

          },2000)
        
    
    
      },2000)
      
    console.log("order placed")
  };
  
  // Trigger 👇
  order(0, production);
//   Place Order
//   - 2
//   #2 Cut The Fruit
//   = 2
//   #3 Add water and ice - 1
//   #4 Start the machine - 1
//   #5 Select Container
//   = 2
//   #6 Select Toppings
//   3
//   #7 Serve Ice Cream
//   = 2
  let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };