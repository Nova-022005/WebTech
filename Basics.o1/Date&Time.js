let mydate=new Date();
// console.log(mydate.toString());Tue Oct 28 2025 00:37:56 GMT+0530 (India Standard Time)
// console.log(mydate.toISOString());//2025-10-27T19:07:56.392Z
// console.log(mydate.toDateString());//Tue Oct 28 2025
// console.log(mydate.toLocaleString());//28/10/2025, 12:37:56 am

let myCreatedDate=new Date(2025,10,28);
// Important: JavaScript months are zero-indexed, so:
// 0 = January
// 10 = November
// So this creates a date for November 28, 2025
// console.log(myCreatedDate.toLocaleString());//  28/11/2025, 12:00:00 am
let myCreatedDate2=new Date("2025-01-12");//in  yy-mm-dd format
console.log(myCreatedDate2.toLocaleString());

//**************TimpeStamp */

let time=Date.now();
console.log(time);
console.log(myCreatedDate.getTime());//to get date in millisecond
console.log(Math.round(Date.now()/1000));
 

let newDate=new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('deafult',{
  weekday:"long"
})
