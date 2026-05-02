

// class User{
//   constructor(username,email,password){
//      this.username=username;
//      this.email=email;
//      this.password=password;
//   }

//   encryptPassword(){
//     return `${this.password}abc`
//   }
//   changeUsernamr(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const chai=new User("chai","chai@gmail.com","123")

// console.log(chai.encryptPassword());
// console.log (chai.changeUsernamr());


//! Behind the seen

function User(username,email,password){
  this.username=username
  this.email=email
  this.password=password
}

User.prototype.encryptPassword=function(){
  return `${this.username}123`
}

User.prototype.changeUsernamr=function(){
  return `${this.username.toUpperCase()}`
}

const tea=new User("tea","tea@gmail.com","123")

console.log(tea.encryptPassword());
