const marvel_hero=["Thor","Hulk","Black Panther","Black Widow"];
const dc=["bat man","Superman","Aquaman","flash","Wounder women"];

// marvel_hero.push(dc);// add array dc as element in marvel_hero
console.log("A", marvel_hero);

// by concat

const arr=marvel_hero.concat(dc);//return new arr by adding two arrays 
console.log("B",arr);

//by spread
// better than concat can add multiple arrays
const elements=[...marvel_hero,...dc];// it spread a array into elements which can be used to create new 
console.log(elements);

const anotherarr=[1,2,3,4,[4,5,6],7,[6,7,[4,5]]];

const realanotherarr=anotherarr.flat(Infinity);// it return a new array with subarry concatenated recursively 
// we have to give depth which tell how much subarrray, we need to concat if don't now give big value or infinity.
console.log("A", anotherarr);
// A [ 1, 2, 3, 4, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
// B [1, 2, 3, 4, 4, 5, 6, 7, 6, 7, 4, 5]
console.log("B",realanotherarr);

console.log(Array.isArray("Saurav"));//false
console.log(Array.from("Saurav"));//[ 'S', 'a', 'u', 'r', 'a', 'v' ]
console.log(Array.from({name:"Saurav"}));// [] empty array interesting case

let score0=100;
let score2=200;
let score3=300;
console.log(Array.of(score0,score2,score3))//[ 100, 200, 300 ] Returns a new array from a set of elements.

