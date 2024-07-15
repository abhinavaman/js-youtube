// for of

// ["","","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,]

for (const num of arr) {
    //console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings){
    //console.log(`each char is ${greet}`);

}

// map 

const map = new Map()
map.set ('IN' ,"india")
map.set ('USA' ,"united state of america")
map.set ('FR' , "France")

//console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-');
}

const myobject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// for (const [key , value] of myobject) {
//     console.log(key, ':-', value);
// }