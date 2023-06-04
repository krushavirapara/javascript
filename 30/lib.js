function updateAccount(product,cb){
    console.log(product + " purchased")
    cb()
    cb()
    cb()

}

function promiseupdate(product){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{resolve()},2000)
    })
}
module.exports = {
    updateAccount,
    promiseupdate
}