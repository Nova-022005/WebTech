let score="100abc";
// typecasting
console.log(typeof score); //string
let valueInNumber=Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN Not a Number
console.log(typeof NaN); //number

// "33"=> 33 "33anv"=>NaN null=>0 true=>1 false=>0
let isLoggedIn=1;
let isbollean=Boolean(isLoggedIn);
console.log(isbollean);  // ""=>false "nnns"=>true


// ***********************_Operations_************************

console.log(2*2)
console.log(2+2)
console.log(2-2)
console.log(2/2)
console.log(2**2)
console.log(2%2)

let str1="Naveen"
let str2=" is nova"
let str3=str1+str2// concatination
console.log("1"+2+2)// 122
console.log(1+2+"2")// 32

// **********************_Comparisons_*********************

console.log( null>0, null==0, null >=0 )
// equality check == work differently comparators convert  null to 0 
// strict check also check for datatype
console.log("1" === 1)// false

// ************************_Datatype_********************

// JavaScript is a dynamically typed, interpreted, high-level, multi-paradigm programming language.

// Primitive 7: string | number | boolean | null |undefined | Symbol | BigInt

// Non-Primitive/Reference type: Arrays | Objects | functions

// primitive are call by value wherease refernce is call by address

const Id=Symbol(123)
const Id2=Symbol(123)
console.log(Id==Id2)//false

let my_onb={// object example 
  name: "kunal",
  Id:123,
}

const my_fun = function(){
console.log("hello")
}

console.log(my_fun)