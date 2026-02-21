//? 

function sayMyName(name){
  console.log(`Your name is ${name}`);
  
}

// sayMyName("Saurav")//* function call

const add=(a,b)=>{
  // console.log(a+b);
  return a+b;
}

const ans=add(3,4);
// console.log(ans);

//* ___________-------Rest  operator
function calculatecartPrice(val1,val2,...num1){// rest operator used to take multiple value in one go
  return num1;
}
// *console.log(calculatecartPrice(122,32,44,22,33));
// //?[ 44, 22, 33 ]


// !____________------ object with func

const user = {
  username: "Saurav",
  price: 122
}

function handelObj(anyObj){
  console.log(`User name is ${anyObj.username} and price os ${anyObj.price}`);
  
}

// handelObj(user);// ? User name is Saurav and price os 122

// !___________-------Array with function

const myArray=[22,34,2,34,55,77]

function returnSecondValue(getArray){
  return getArray[1];
}

//* console.log(returnSecondValue(myArray));
// 34

