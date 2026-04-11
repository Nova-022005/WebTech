//?  Promise object refer to the eventual completion or failure of an asynchronous operation and its value.


const promiseOne = new Promise(function(resolve,reject){
  //! Do and asyn task
  setTimeout(()=>{console.log("Async task is complete.");
    resolve() //* it consume the promice
  },1000)
});
 
promiseOne.then (function(){
  console.log("Promise consumed");// ! after promice complete 
  
})

//*Output
//? Async task is complete.
//? Promise consumed


new Promise(function(resolve,reject){
  setTimeout(()=>{
    console.log("Async task 2.");
    resolve()
  },1000)
}).then(()=>{
  console.log("async task 2 consumed.");
  
})


const promiseThree=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username:"Chai",
      email:"chai@example.com"
    })
  },1000)
})

promiseThree.then(function(user){
  console.log(user);
})


const promiseFour=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=false;
    if(error) reject('ERROR: Something went worng.');
    else resolve({username:"nova",
      password:"naveen"
    });
  },1000)
})

promiseFour.then((user) =>{
console.log(user);
return user.username
}).then((usename)=>{
  console.log(usename);
  
}).catch(function(error){
  console.log(error);
  
}).finally(()=> console.log("The promise is either resolved or rejected")
)



const promiseFive=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=false;
    if(!error){
      resolve({username:"javascript",password:"123"})
    }else{
      reject("ERROR: Js went worng");
    }
  },1000)
})

async function consumePromiseFive(){
   const responce=await promiseFive
   console.log(responce);
}

consumePromiseFive()


// async function getAllUsers() {
//   try{
//     const responce= await fetch('https://jsonplaceholdertypicode.com/users') ;
//     const data= await responce.json();//! as convrrting to json can taking time we have to use json. without it 
//     console.log(data);
//   }catch{
//     console.log("E: ", error);
//   }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
  return response.json();
})
.then((data)=>{
  console.log(data);
})
.catch((error)=> console.log(error))

