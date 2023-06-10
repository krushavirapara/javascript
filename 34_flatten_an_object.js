let person = {
    name:"adam",
    age:40,
    address:{
        city:"perth",
        pincode:4004,
        info:{
            state:"Australlia",
            country:"Australlia"
        }
    }
}

let res = {}
let flatten = function(obj,parent){
    
     for(key in obj){
        let propname = parent ? parent+ "_"+key : key
        if (typeof obj[key]=== "object"){
            flatten(obj[key],key)
        }
        else{
            res[propname] = obj[key]

        }
     }
     return res
}

console.log(flatten(person))