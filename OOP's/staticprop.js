class User {
  constructor(username){
    this.username=username
  }

  logMe(){
    console.log(`Username: ${this.username}`);
  }

  static createId(){
    return `123`
  }
}

class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email=email
  }
}

const hitesh=new User("hitesh")
// console.log;(hitesh.createId())

const saurav=new Teacher("saurav","xyz@gmail/com");

saurav.logMe()