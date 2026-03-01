//*_______________Javascript Execution Context____________________

//?  {} code ----> Gloule EC---->this

//! Runtimme env and browser both have differnt Global EC

// Javascript is a single threaded lang therefore everything is  a process

// -> Global Execution Context
// -> Function Execution Context
// ?-> Eval Execution Context

// [{}]  ->> Memory Creation phase( Creation Phase)

//  memory is allocated


let val1=10; 
let val2=20;

function addNUm(val1,val2){
  console.log(val1+val2);
}
addNUm(val1,val2);


//  ->> Execution Phase



