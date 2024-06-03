const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountpassword = "12345"
accountcity = "jaipur"
let accountstate;

//accountId =2 // not allowed

accountEmail ="hc@hc.com"
accountPassword ="212121212"
accountcity = "bengaluru"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountcity, accountstate ])