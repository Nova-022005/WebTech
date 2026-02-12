// //************hoisting

// console.log(x);//! undefiend
// var x=10;

// console.log(x);//! 10

// //******************var intialization */

// var x=20;
// console.log(x);//! 20

// //******************functional scope */

// function demofun(){
//   var funvar=30
//   console.log(funvar)
// }

// demofun();//* 30

// // ************* let cann't be re intialize in same block
// let c=20;
// {
//   // let c=10
//   console.log(c)
// }

// //**********const */


// ///************function */
// //?arrow function 
// let fact=()=>{
//   console.log(`i am arrow `)
// }
// fact()
// //? anonomys function
// let fun=function(name){
//   console.log(`i am ${name}`);
// }
// fun("saurav")



//* this
// ? this is dynamic in nature in javascript
//? In JavaScript, this is determined at runtime based                                                            on how a function is called, not where it’s written. 
function car(){
  console.log("hello");
  console.log(this)
}



// car()



// * nested object

const person={
  name:"kunal",

  adress: {
    city: "Noida",
    street:"23",
    colony:"hanuman colony"
  }
}


console.log(person.adress.city)

class Address{
constructor(city,state){
this.city=city;
this.state=state;
}
}

class Person {
  constructor(name,age,address){
    this.name=name;
    this.age=age;
    this.address=address;
  }
}

const adr=new Address("noida","uttarpradesh");
const p1=new Person("mayank",20,adr);

console.log(p1.address.city);
let arr=[1,2,3];
let[a,b,c]=arr;

// console.log(arr[0])

// ! Destructuring
const nums=[5,6,7,8];
const [g,s,d,f]=nums;
// console.log(`${g} ${s} ${d} ${f} `)

// ! default value 
const data=[9];
const [x=0,y]=data;
// console.log(x);
// console.log(y);
//? default values can be any thing a string or num or obj

// ! Swapping var
let num1=2
let num2=3

// ? destructor object 

const obj1={
name1:"saurav",
city:"noida"
}

const { name1:nam , city:sahar, age=12 } = obj1;//? we can replace key by alias name by using
//* key_name:alias_name

console.log(`${nam} ${age} ${sahar}`);

//! default in onject

let {country="India"}=obj1;

console.log(country)
console.log(obj1);