console.log(`Hello your name `)

// string can be used as  object

const str=new String("hello");
let ame="Saurav Singh";


console.log(ame.slice(-5,-2));// slice from -3 mean from last to 5th position 
console.log(ame.length)
console.log(ame.replace("s","u"));
let c=ame.substring(11,16);
console.log(ame.split("a"));
const url="https://Saurav%20Singh.com"
console.log(url.replace('%20','-'));
console.log(url.includes("%2"));