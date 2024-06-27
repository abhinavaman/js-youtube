// primitive

// 7 types : string,number,boolearn,null,udefind,symbol,bigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')
//console.log(Id == anotherId);


const bigNumber = 3455637484766n




// Reference (non promitive)

// array, object, functions
const heros = ["shaktiman", "naagraj", "doga"];

let muobj = {
    name:"hitesh",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);


// +++++++++++++++++++++++++++++++++


// stack (primitive) , heap (Non-Primitive)


let myyoutubename = "hiteshchoudharydotcom"

let anothername = myyoutubename
anothername = "chaiaurcode"

console.log(myyoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);