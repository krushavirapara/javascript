class Chameleon {
    static colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
    }
  
    constructor({ newColor = 'green' } = {}) {
      this.newColor = newColor;
    }
  }
  
  const freddie = new Chameleon({ newColor: 'purple' });
  console.log(Chameleon.colorChange('orange'));

let x = new Chameleon();
console.log(x)

//2
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person('Lydia', 'Hallie');
  Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  //console.log(member.getFullName());

  //3
  function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
  }
  
  const person = 'Lydia';
  const age = 21;
  
  getPersonInfo`${person} is ${age} years old`;

  //4
  function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == data) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
  checkAge({ age: 18 });