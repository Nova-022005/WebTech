const start=document.querySelector('#start');
const end=document.querySelector('#stop');
// const backColor=document.querySelector('body');
const backColor=document.body;// ? more direct approch.

let intervalID=null;

start.addEventListener('click',function(){
  if(intervalID==null) //! only when first time and after 
  intervalID=setInterval(changeColor,700);
})

end.addEventListener('click',function(){
  if(intervalID!=null){
    clearInterval(intervalID);
    intervalID=null// ! flush out
  }
})

// change backgound color function
// const changeColor= function(){
//   let red=parseInt(Math.random()*256);
//   let green=parseInt(Math.random()*256);
//   let blue=parseInt(Math.random()*256);
//   let color=`rgb(${red},${green},${blue})`;
//   backColor.style.backgroundColor=color;
//   console.log(color);
// }

// hex code generator
const changeColor=()=>{
  const hex="0123456789ABCDEF"
  let color="#";
  for(let i=0;i<6;i++) color+=hex[Math.floor(Math.random()*16)];

  backColor.style.backgroundColor=color;
  console.log(color);
  
}


