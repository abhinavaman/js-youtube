
let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log("inner:",a);
}


//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //.log(website);

    two()
}

//one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
         const website = " youtube"
         console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//++++++++++++++++++intersting+++++++++++++


function addone(num) {
    return num +1
}
addone(5)

const addtwo = function(num) {
    return num + 2
}

addtwo(5)