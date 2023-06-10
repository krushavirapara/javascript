let myFunction  = function(){
    let name = ""

    function getName()
    {
        return name
    }

   function setName(newName)
   {
    name = newName
   }

   return{
    getName : getName,
    setName : setName
   }
}
let fev = myFunction()

fev.setName("sarah")
console.log(fev.getName())

console.log(fev.name)