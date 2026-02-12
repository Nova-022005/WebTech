//array
const myarr=["Naveen","Saurav","Giloriya","Shanti"]

const myarr2=new Array(2,3,4);
myarr2.push(3);//add 3
console.log(myarr2);//[ 2, 3, 4, 3 ]
myarr2.pop();//remove the last element in array
console.log(myarr2);//[ 2, 3, 4 ]

myarr2.unshift(0);//add at start but have to shift all element can be computational time consuming in large array.
console.log(myarr2);//[ 0, 2, 3, 4 ]


console.log(myarr2.includes(7));// give boolean value 
console.log(myarr2.indexOf(7));//index of the first occurrence

const newarr= myarr2.join("_");
console.log(newarr);// 0_2_3_4 a String
const rem=newarr.split("_");
// console.log(rem);// [ '0', '2', '3', '4' ] a String array

// Slice and Spice

console.log("A",rem);
const rem1=rem.slice(1,3);// from start index to before the ending index [)
console.log(rem1);//[ '2', '3' ]
console.log(rem);//[ '0', '2', '3', '4' ]

const rem2=rem.splice(1,3);//from start index to ending index [] and it cut the part from main array
console.log(rem2);//[ '2', '3', '4' ]
console.log(rem);//[ '0' ]



