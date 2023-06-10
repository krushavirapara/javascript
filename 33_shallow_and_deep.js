// let sports = ["swimming","football","cricket"]

// let copysports = sports

// copysports[1]="basball"
// console.log("Original Array: ",sports) // [ 'swimming', 'basball', 'cricket' ]
// console.log("Copied Array: ",copysports) // [ 'swimming', 'basball', 'cricket' ]


//shallow copy with spread operator
// let sports = ["swimming","football","cricket"]

// let copysports = [...sports]
// copysports[1]="baseball"
// console.log("Original Array: ",sports) // [ 'swimming', 'fotball', 'cricket' ]
// console.log("Copied Array: ",copysports) // [ 'swimming', 'baseball', 'cricket' ]



//shallow copies with Array.from method
// let sports = ["swimming","football","cricket",{a:"hockey",b:"tennis"}]

// let copysports = Array.from(sports)
// copysports[1]="baseball"
// copysports[3]["a"] = "badminton"
// console.log("Original Array: ",sports) // [ 'swimming', 'fotball', 'cricket' ,{ a: 'badminton', b: 'tennis' }]
// console.log("Copied Array: ",copysports) // [ 'swimming', 'baseball', 'cricket' ,{ a: 'badminton', b: 'tennis' }]

//slicing shallow copies
// let sports = ["swimming","football","cricket",{a:"hockey",b:"tennis"}]

// let copysports = sports.slice(0)
// copysports[1]="baseball"
// copysports[3]["a"] = "badminton"
// console.log("Original Array: ",sports) // [ 'swimming', 'fotball', 'cricket' ,{ a: 'badminton', b: 'tennis' }]
// console.log("Copied Array: ",copysports) // [ 'swimming', 'baseball', 'cricket' ,{ a: 'badminton', b: 'tennis' }]

//Deep copy
let sports = ["swimming","football","cricket",{a:"hockey",b:"tennis"}]

let copysports = JSON.parse(JSON.stringify(sports))
copysports[1]="baseball"
copysports[3]["a"] = "badminton"
console.log("Original Array: ",sports) // [ 'swimming', 'fotball', 'cricket' ,{ a: 'badminton', b: 'tennis' }]
console.log("Copied Array: ",copysports) // [ 'swimming', 'baseball', 'cricket' ,{ a: 'badminton', b: 'tennis' }]

//shallow copy
// let obj = {
//     name:"adam",
//     age:25,
//     hobbies:["swimming","football","cricket"]
// }

// let newobj = Object.assign({},obj) //{...obj}
// newobj["age"] = 40 
// newobj["hobbies"][1] = "baseball"

// console.log(obj)
// console.log(newobj)

//deep copy
let obj = {
    name:"adam",
    age:25,
    hobbies:["swimming","football","cricket"]
}

let newobj = JSON.parse(JSON.stringify(obj))
newobj["age"] = 40 
newobj["hobbies"][1] = "baseball"

console.log(obj)
console.log(newobj)

