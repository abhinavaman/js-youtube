// Dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);

let mycreatedate = new Date(2023,0 , 23, 5, 3)
console.log(mycreatedate.toLocaleString());


let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(mycreatedate.getTime());
//console.log(Date.now());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay);


newDate.toLocaleString('default',{
    weekday:"long",
});