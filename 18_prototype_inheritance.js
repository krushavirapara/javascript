let p ={
    name:"adam",
    age:24,
    show:function(){
        console.log(this.name  +  " "  + this.age)
    }
}

let p2 = {
    name:"steve"
}

p2.__proto__ = p

console.log(p2.age) //25

p2.prototype = p

console.log(p2.age) //undefined