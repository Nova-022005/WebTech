class User{
  constructor(username){
    this.username=username
  }
  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User{
  constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
  }
  addCourse(){
    console.log(`New course was added by ${this.username}`);
    
  }
}


const chai=new Teacher("saurav","saurav@gmail.com","1234")

console.log(chai);
chai.addCourse()
chai.logMe()
const MasalaChai=new User("masalaChai");
MasalaChai.logMe()


console.log(chai instanceof User);//true
console.log(chai instanceof Teacher);//true


