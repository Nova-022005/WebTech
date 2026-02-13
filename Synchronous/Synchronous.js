// console.log("start");
// function Task(){
// for(let i=0;i<1e10; i++){}
// console.log("Hello, World");
// }

// Task()
// console.log("end");

//! due to blocking behaviour means until on e task or program is runnning 
//? (which can be vary long ) other program can't run
//* most common in case of rendering of a site 

//*-------|||||||__________Asynchronous Js_______*********

//! program that take long time to run are put in background

console.log("start");

setTimeout(function Task(){//? A hold of 2 sec is put so that other task can finish runing 
for(let i=0;i<1e10; i++){}
console.log("Hello, World");
} ,2000);

console.log("end");


