let person1 = {
    name:"adam",
    age:25,
    showDetails:function(){
        console.log(this.name + " is " + this["age"] + " years old ")
    }

}

let person2 = {
    name:"steve",
    age:20,
    // showDetails:function(){
    //     console.log(this.name + " is " + this["age"] + " years old ")
    // }

}

let showDetails = function(city,car){
    console.log(this.name + " is " + this["age"] + " years old "  + "and he drives " + car + " in " + city )
}

person1.showDetails()
person1.showDetails.call(person2)
showDetails.call(person1,"Noida","BMW")
showDetails.apply(person2,["Noida","BMW"])
let bindf = showDetails.bind(person1,"Noida","BMW")
bindf()

let a = [1,2,3,4]
a.prop =  5
console.log(typeof a)
console.log(Math.max.apply(null, a)); 