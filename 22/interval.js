// let counter =0
// function greet(){
//     counter++
//     console.log("Hello")
//     if (counter>=3){
//         clearInterval(i)
//     }
// }
// let i = setInterval(greet,2000)
// console.log("byee")


function createPolyfill(){
    let intervalId = 0
    let intervalMap ={}

    function setIntervsalPolyfill(callback,delay,...args){
        let id = intervalId++
        function repeat(){
            intervalMap[id] = setTimeout(()=>{
                callback(args)
               
                if(intervalMap[id] ){
                    repeat()
                }
            },delay)
            
            
        }
        repeat()
        console.log(Object.keys(intervalMap))
        return id

    }

    function cleraIntervalPolyfill(intervalid){
        clearTimeout(intervalMap[intervalid])
    delete intervalMap[intervalid]
  }

    return {
        setIntervsalPolyfill,
        cleraIntervalPolyfill
    }
}

const {
    setIntervsalPolyfill,
cleraIntervalPolyfill
} = createPolyfill()

let counter = 0;
let intervalid;

function greeting() {
  counter++;
  if(counter >= 3) {
    cleraIntervalPolyfill(intervalid)
  }
  console.log("Helloooooo....")
}

intervalid = setIntervsalPolyfill(greeting, 2000)
