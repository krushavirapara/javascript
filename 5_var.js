var a=10;
console.log("line number 2",a)
function fn(){
    console.log("line number 4",a)
    var a=20;
    a++
    console.log("line number 6",a)
    if (a){
        //reassign same variable
        var a=30
        a++
        console.log("line number 11",a)
    }
    console.log("line number 13",a)
}
fn()
a++
console.log("line number 16",a)

//var is function scoped
//if you declare same variable  with var again then also old value is carried forward in the same function.

//output
// line number 2 10
// line number 4 undefined
// line number 6 21
// line number 11 31
// line number 13 31
// line number 16 11