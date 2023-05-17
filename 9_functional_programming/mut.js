const person1  ={
    name: "john",
    "age":43
}

const person2 = person1

person2["name"]= "wick"
console.log("person1",person1) //{ name: 'wick', age: 43 }
console.log("person2",person2) //{ name: 'wick', age: 43 }

//because thet are refering to the same object

//to make them sepwrate object we can do the following
const person3 = Object.assign({},person1)
person3["name"] = "john"
console.log("person1",person1) //{ name: 'wick', age: 43 }
console.log("person3",person3) //{ name: 'john', age: 43 }

//Also you can use spread operator
const person4 = {...person1}
person4.age  = 57
console.log("person1",person1) //{ name: 'wick', age: 43 }
console.log("person4",person4) //{ name: 'wick', age: 57 }