// singlenton
// object literals

// object literals

const jsuser = {
    name: " hitesh ",
    age: 18,
    //[mySym]: "mykey1",
    location: "jaipur",
    email: "hitesh@google.com",
    isloggedIn: false,
    lastLogin: ["manday", "saturday"]
}

jsuser.email = ["hitesh@gpt.com"]

//console.log(jsuser.email);
//console.log(jsuser["email"]);
//console.log(jsuser[mySym]);

jsuser.greeting = function(){
    console.log("hello JS user");
}
jsuser.greeting = function(){
    console.log(`hello JS user${this.name}`);
}

console.log(jsuser.greeting());


