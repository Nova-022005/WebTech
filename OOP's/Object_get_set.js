const user ={
  emial: 'h@hc.com',
  password: "abc",

  get email(){
    return `${this.emial.toUpperCase()}`
  },

  set email(val){
    this.email=val;
  },
  get password(){
    return `${this.password.toUpperCase()}`
  },

  set password(val){
    this.password=val;
  }
}

const tea=Object.create(user)
console.log(tea.email);


