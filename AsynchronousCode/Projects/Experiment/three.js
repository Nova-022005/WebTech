const parent=document.querySelector('#container');
const start=document.querySelector('#start');
const end=document.querySelector('#stop');

let i=0;
let intervalID=null;

start.addEventListener('click',function(e){
  intervalID=setInterval(Count,500);
})

//*  in case of refernce handler we can pass the paramter in setInterval(handler,timeout,para)
//? eg setInterval(Count,500,i); 

end.addEventListener('click',function(){
  clearInterval(intervalID)
})
const Count= function(){
  let p=document.createElement('h2');
  p.innerHTML=`<h2>${i}</h2>`;
  parent.appendChild(p);
  i++;
}