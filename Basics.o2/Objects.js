// ** Their are two way to declare a Object
// **1. literal 2. constractor

//? when we create from constraction it is singleton mean it is unique
// ? in case of other way(literal) it is not singleton

//******************* Object Literal ****************/

const mySym =Symbol("Key1"); 

// ? Declaration
const Jsuser={
  name:"Saurav",
  [mySym]:"myKey1",//? if not in braket the key will be a string

  "full name":"Saurav Singh",//! only accesable by square notaion 
  age: 20,
  location: "Noida",
  email: "sauravsingh8806@gamil.com",
  isLoggedIn: false,
  lastLoggedIn: ['Monday','Saturday']
} 

// ? Access

console.log(Jsuser.email);//sauravsingh8806@gamil.com
console.log(Jsuser["email"]);//sauravsingh8806@gamil.com

console.log(Jsuser["full name"]); //! only way in case of this example
console.log(Jsuser[mySym]);//? can be accessed but datatype is not symbol
console.log(typeof(Jsuser[mySym]));
console.log(typeof(mySym));//! string in case when key is not declared inside square other wise Symbol

console.log(Jsuser);

Jsuser.email="saurav.2428cs1961@kiet.edu";//? value of keys can be override 
//**proctecting objects properties from changing */
// Object.freeze(Jsuser);//? by this one can ensure that the key value can't be override or changed;
// console.log(Jsuser.email);// 
// Jsuser.email="bhanupratap9900@gmail.com";//**  no change
// console.log(Jsuser.email);


// *********Function*******//

Jsuser.greeting=function(){
console.log(`hello ${this.name} from ${this.location}`);
}
console.log(Jsuser.greeting); // Just call the function, don't log its return value