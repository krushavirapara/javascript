// //use oh this keyword in node in non_strict mode

//1.globally
console.log(this) //return {}

//2.Inside a function
function f(){
    console.log(this) //return global object
}
f()

//3.Inside a fuction of object
obj = {
    name: "adam",
    age:25,
    fullDetails : function(){
        console.log(this) 
    }
}
obj.fullDetails() //return object itself


//4.Inside a nested function in object
person = {
    name: "steve",
    age:20,
    fullDetails : function(){
        function showDetails(){
            console.log(this) 
        }
        showDetails()
    }

}
//when a call nested function inside a object then it will return global object
person.fullDetails() //return global itself

//but when you try to borrow nested function like this bu returning that function
person = {
    name: "steve",
    age:20,
    fullDetails : function(){
        function showDetails(){
            console.log(this) 
            console.log("showDetails")
        }
        return showDetails
    }

}

person.fullDetails().call(obj) //then it will return the object on which it has been called