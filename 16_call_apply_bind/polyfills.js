const obj1 = {
    name: 'Jawad',
    age: 23,
    occupation: 'Software Engineer',
    print: function (greeting) {
      console.log(
        `${greeting} I am ${this.name}, ${this.age} years old - working as a ${this.occupation}`
        );
      console.log(this)
    }
  };
  
  const obj2 = {
    name: 'John',
    age: 25,
    occupation: 'Frontend Engineer',
  };
  
  Function.prototype.myCall = function(context,...args) {
    // ...
    console.log(context,args);
    console.log(this)
}


obj1.print.myCall(obj2,"Hi");
