const user={
  username:"saurav",
  loginCount: 25,
  signedIn:true,

  getUserDetails:function(){
    return `Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`;
  }
}

// console.log(user["username"]);
//  can be user.username as well
// console.log(user.getUserDetails());

// console.log(this)// this will give {} in node as global scope empty but in browser it will give window .


// Constructor function

// uses new keyword to create a new context.


function User(username,loginCount,isLoggedIn){
  this.username=username;
  this.loginCount=loginCount;
  this.isLoggedIn=isLoggedIn;

  // return this
}

const userOne=new User("Saurav",12,true);
const userTwo=new User("Naveen",32,false)
console.log(userOne.);
// console.log(userTwo);
