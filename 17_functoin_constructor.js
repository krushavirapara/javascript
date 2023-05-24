function car(brand,name,colour){
    this.brand = brand
    this.name = name
    this.colour = colour
    this.drive  = function(mileage){
        console.log(this.name + " has " + mileage)
    }
}

//inside function constructor this refeers to empty object{}
let car1 = new car("honnda","city","white")
let car2 =  new car("hyundia","creata","white")
console.log(car1)
console.log(car1.name)
console.log(car1["brand"])
car1.drive(18)

function watch(name){
this.name = name 
this.solar = true
return {name:"swaroski"}
}

let w =new watch("titan")
console.log(w.name)
console.log(w.solar)