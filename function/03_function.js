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

// for immediatatly invoking function
(function chai1(){
  console.log("DB CONNECTED.");
})();

//! IN cases of Immdiadetatly invoked function we have to put ; to stop the context

( function chaiaurcode() {
  console.log("DB connected");
  
} )()