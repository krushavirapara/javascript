function add(){
    let a = 5
    function addChild(){
        console.log(a+4)
    }
    return addChild
}
let catchedFun = add()
console.log(catchedFun)
catchedFun()

//Function along with its lexical scOpe is called closure
//even after add is called and removed from call stack addchild still has access to "a"
//because it has "a" defined in its lexical scope

function z(){
    var b = 900
    function x(){
        var a=10
        function y(){
            console.log(a,b)
        }
        //a=100 -> 100 900
        y()
       //a=100 -> 10 900
    }
    x()
}
z()

/// REFER "setTimeout"