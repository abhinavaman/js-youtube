//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aman",
            lastname:"abhinav"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = Object.assign( obj1,obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"hitesh",

}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

{
    name: "hitesh"
    coursename: "js in hindi"
    price: "free"
}
[
    {},
    {},
    {}
]