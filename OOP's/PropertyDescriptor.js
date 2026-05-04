const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const  chai={
  name:"gingerChai",
  price:250,
  isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"price"));

Object.defineProperty(chai,'price',{
  writable:false,
  enumerable:false,
  configurable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"price"));

for(let [key,value] of Object.entries(chai)){
  console.log(`${key} =>i ${value}`);
  
}