
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
    let result = number1 + number2
    return number1 + number2
}
const result = addTwoNumber(3, 5)

//console.log("result", result);

function loginUserMessage(userName) {
    return `${userName} just logged in`
}
//console.log(loginUserMessage("hitesh"))


function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500));

const user = {
    userName: "hitesh",
    price: 199
}

function handelobject(anyobject) {
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}

handelobject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
