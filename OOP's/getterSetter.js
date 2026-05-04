class User{
  constructor(email,password){
    this.email=email
    this.password=password
  }
  set email(email){
    this._email=email;
  }
  get email(){
    return this._email.toUpperCase();
  }
  set password(pass){
    this._password=pass
  }
  get password(){
    return this._password.toUpperCase()
  }
  
}

const hitesh = new User("xyz@gmail.com","1223");
console.log(hitesh.email);
