//********Constructor*********/
//? Singleton

 const tinderuser= new Object();

 tinderuser.id="gfg23";
 tinderuser.name="Saurav";
 tinderuser.isLoggedin="false";
//  console.log(tinderuser)

const regulartinder={
  email:"saurav3233@gmail.com",
  fullname:{
    firstname:"Saurav",
    lastname:"Singh"

  }
}

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2};// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// ?const obj3=Object.assign({},obj1,obj2)// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// ?const obj3={...obj1,...obj2};//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

//* deling with database 
const user=[
  {
    id:1,
    email:"xyz@gmail.com",
  },
  {
    id:1,
    email:"xyz@gmail.com",
  },
  {
    id:1,
    email:"xyz@gmail.com",
  }
]

// console.log(user[1].email);// xyz@gmail.com
console.log(tinderuser);

console.log(Object.keys(tinderuser));// return a array of keys of the object

console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));// return array of arrays of key with values

console.log(tinderuser.hasOwnProperty('isLoggedin'))// return boolean if object has key


// ! destructuring of objects 

const course ={
  course_name:"Js in hindi",
  price:999,
  course_instructor:"Saurav"
}

// course.course_instructor

const {course_instructor:c_ins}=course

console.log(c_ins);

//************API */

//? An API (Application Programming Interface) is basically a set of rules and tools that lets different software systems talk to each other.
//! in form of json (java object notation)object
// {
//   "name":"saurav",
//   "course_name" : "prograing",

// }
//! api in form of array 
[
  {},
  {}
]