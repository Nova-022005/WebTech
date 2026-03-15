

//*     Selctors





//? Queary Selctor ( Actallly used in real projects. )

//  document.querySelector('')
//! it can select any object by  class or id 


function sayHello(callback){
  setTimeout(() => {
    console.log(callback());
  }, 3000);
};

// sayHello(()=>console.log("hello"));
// console.log(3)

function sayGreeting(){
  return new Promise((resolve ,reject)=>{
    setTimeout(()=>{
      resolve("Hello");
    },2000);
  });
}

// sayGreeting()
// .then(result=>console.log(result))
//       .catch(error=>console.log(error))


// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 1000);
//   });
// }

// fetchData()
//   .then(result => console.log(result))   // Data received
//   .catch(error => console.error(error));


//   async function getData() {
//   try {
//     const result = await fetchData(); // waits until resolved
//     console.log(result);              // Data received
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();

// a.	Create a function using the rest operator to accept multiple
//  numbers and return their sum.

const sum=function allSum(...nums){
  let total=0;
  for(let num of nums){
    total+=num;
  }
  return total;
}

console.log(sum(2,3,4,5));

// b.	Merge two arrays using the spread operator.



let arr1=[2,3,4];
let arr2=[5,6,7];

let  arr3=[...arr1,...arr2]

console.log(arr3);

// c.	Copy and update an object using the spread operator.

let obj={
  id:"1",
  value:20
}

let obj2={weight:30,...obj}
console.log(obj2);


// d.	Demonstrate passing array elements as function arguments using spread.

const product=function mutiply(a,b){
  console.log(a*b);
}
let arr0=[2,3,4]
product(...arr0)