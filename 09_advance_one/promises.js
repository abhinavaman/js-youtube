const promiseOne = new Promise(function(resolve, reject){
    //do an async task 
    // db calls, crytography, network
    setTimeout(function(){
        console.log('asyn task is complete');
        resolve()
    }, 1000)
})

promiseOne.then (function(){
    console.log("promise consumed" );
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("asyn task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("asyn 2 resolve");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "chai" , email: "chai@example.com"
        }, 1000)
    })
})
promiseThree.then(function(user){
    console.log(user);  
})

