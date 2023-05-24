class Person{
    constructor(name,age){
        this.name  = name,
        this.age = age
        //console.log(this)
    }

    showDetails(){
        console.log(this.name)
    }
}

let p  = new Person("adam",25)
p.showDetails()

//constructor is like __init__ method

class quii extends Person{
    constructor(){
        super()
        console.log("  ")
    }
}

let q = new quii()
q.showDetails()