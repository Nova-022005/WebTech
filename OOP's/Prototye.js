// let myName = "Saurav   "

// myName.prototype= ()=>{
//   return 
// }

// console.log(myName.truelength)

let hero=["Spiderman","thor"]

let power={
  thor:"hammer",
  Spiderman:"swing",

  getSpiderPower: function (){
    console.log(`Spidy power is ${this.Spiderman}`);
    
  }
}

Object.prototype.hitesh=function(){
  console.log(`hitesh is present all objects`);
  
}


Array.prototype.saurav=function(){
  console.log("saurav say hello");
  
}
// power.hitesh()

// hero.saurav()
// power.saurav()// not possible as saurav proto is assigned to array


//! Inheritance
const user={
  name: "chai",
  email: "chai@gmail.com"
}
const Teacher={
  makeVedio:true
}

const TeachingSupport={
  isAvailable: false
}

const TASupport={
  makeAssignement:"Js assignement",
  fullTime: true,
  __proto__:  TeachingSupport
}

//* __proto__ is a property to assigne protyple inheritence
//? but it is old approach

Teacher.__proto__=user;

// modern approach

Object.setPrototypeOf(TeachingSupport,Teacher)
//* it uses __proto__ behind the seen 


let anotherUsername="SauravCode   "

String.prototype.trueLength=function(){
  console.log(`${this}`);
  console.log(`true length is: ${this.trim().length}`); 
}

anotherUsername.trueLength()
"Naveen".trueLength()
"iceTea".trueLength()