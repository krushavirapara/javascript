let update  = require("./lib.js")


let total_balance = 4000
let price = 200

function DeductCard(){
    total_balance = total_balance-price
    console.log("Remainning balance is "+total_balance)

}

update.updateAccount("Tv",DeductCard)
update.promiseupdate("Tv").then(DeductCard)

