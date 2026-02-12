console.log("Hello, World!");

"use strict";//strict mode ensure that new javaScript features

let Naam="Saura";
var channel="CodeWithSaura";
const Id=12345;//  value cannot be changed
Nick_Name="Nova";// global variable without let,var,const not recommended.

// tables can be used to print data in a tabular format
console.table([Name,channel,Nick_Name]);

//let is scope block variable wherase var is function scope variable

// Data Types in JavaScript
let Name="Saura"; //string
let age=22; //number
let isPublished=true; //boolean
let x; //undefined 
let y=null; //null is also a standalone data type and object in js

let sym=Symbol('hello');// unique and immutable data types

let hobbies=['coding','gaming','reading'];//array

let address={ //object
    city:"Bangalore",
    state:"Karnataka"
};

let date=new Date(); //date object
console.log(date); //current date and time

console.log(typeof null);//object
console.log(typeof undefined); //undefined
