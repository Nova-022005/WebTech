const photo=document.getElementById('photo');
const nam=document.getElementById('name');
const follow=document.getElementById('followers');

const button=document.querySelector('#getNova');

button.addEventListener('click',function(){
  console.log('hit ');
  
  const Requesturl='https://api.github.com/users/hiteshchoudhary'
  const xhr=new XMLHttpRequest();

  xhr.open('GET',Requesturl);
  
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
    const data=JSON.parse(this.response);
    // photo.style.height='vh';
    // photo.style.width='20vw'
  photo.innerHTML=`<img style="height:50vh;" src="${data.avatar_url}" alt="">`
  nam.innerText=data.name;
  follow.innerText=`Followers: ${data.followers}`;
  console.log(data.name);
  
  }
  }
  xhr.send();
  


})