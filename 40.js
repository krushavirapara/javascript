(function immediateA(a){
    return (function immediateB(b){
        console.log(a) //0
    })(1)
})(0)


//2.
let count = 0;
(function ifff(){
    if(count===0){
        let count=1
        console.log(count) //1
    }
    console.log(count) //0
})();

//3.
function Createincrement(){
    let count = 0;
    //let message =`Count is ${count}`;
    function increament(){
        //message =`Count is ${count}`; //2
        count++
    }
    //let message =`Count is ${count}`; //0
    function log(){
        console.log(message)
    }
    
    return [increament,log]
}

const [increament,log] = Createincrement()
increament()
increament()
increament()
log()