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

power.hitesh()