//?   _________________Immediately Invoked Function Expression____

///*Reason:
//?  immediately connect database whe website is loaded
//? to avoid global Pollution


function chai() {
  console.log("Database Connected.");
}
chai();

//! IIFE
//?* first () for fun declaration section for call\
(function chai1(){
  console.log("DB CONNECTED.");
})()