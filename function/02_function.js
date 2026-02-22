//*___________Arrow Function

const user={
  username:"Saurav",
  price:999,

  welcomeMessage: function(){
    //! this keyword is used for current context.
    console.log(`${this.username}, welcome to websit.`);

    // console.log(this);
    
  }
  
}

//user.welcomeMessage() //*Saurav, welcome to website.
user.username="Naveen"

//user.welcomeMessage() //* Naveen, welcome to websit.

//console.log(this);//! return {} empty in case of node 
              //?or any other runtime like bun 
       //* But, in browser it give window obkect as global objects.


function chai(){
  console.log(this.username);//* return Object [global]
  
}

// chai() 

//* this = undefined (strict mode) or global object (non-strict)

///////////////////////////////////////////////

//? this is like a contextual reference variable. But the subtlety is:
//* In normal functions, the context is dynamic (decided at call time).
//! In arrow functions, the context is lexical (decided at definition time).

////////////////////////////////////////////////

//*___________ARROW FUNCTION
const chai02 = ()=> {
  console.log(this);
  
} 

chai02()//? return {}
