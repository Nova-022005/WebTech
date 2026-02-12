const score=400;

const balance=new Number(100.7678767878979);
console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2));// fix decimal place

const othernumber=3399/4;

console.log(othernumber.toPrecision(3));// 850 //number of values you want

const price=100000;
console.log(price.toLocaleString('en-IN'));//it reprsent number in indian standerd of hundread thousand and so on we other standard the default is us

// +++++++++++++++++Maths++++++++++++++

console.log(Math.abs(-1));//1
console.log(Math.round(4.6));
console.log(Math.floor(4.8));
console.log(Math.sqrt(3));// square root 
console.log(Math.pow(2,3));
console.log(Math.round((Math.random()*10)))// random give any random value between 0  and 1

console.log(Math.cbrt(64));

console.log(Math.max(2,3,4,-1,24));