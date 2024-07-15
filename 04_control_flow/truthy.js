const userEmail = "aman@gmail.com"

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("don't have user email");
}


// fasly values
// false, 0, -0, bigInt 0n, "" , null , undefined ,nan

// truthy value

// "0" , 'false' , " " , [ ] , { } , function ( ) , { }

// if (userEmail.length === 0 ) {
//     console.log("array is empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

// nullish coalescing operator (??): null undefined

let val1 ;

//val1 = 5 ?? 10
//val1 = null ?? 10

//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// terniary opearator

//Condition ? true : false 

const iceteaprice = 100

iceteaprice >= 80 ? console.log("less than 80") : console.log ("more than 80")


