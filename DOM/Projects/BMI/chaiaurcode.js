const form=document.querySelector('form');
const reset=document.querySelector('.reset');
form.addEventListener('submit',function(e){
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('.result');

  if(height===''|| height< 0 || isNaN(height)){
    result.innerHTML="Please enter valid height";
  }
  else if(weight===''||weight<0|| isNaN(weight)){
    result.innerHTML="Please enter valid weight"
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    let status="healthy";
    if(bmi<18.6) status="underweight"
    else if(bmi>25) status="overweight"
    result.innerHTML=`Your BMI is ${bmi}, you are ${status}.`
  }

  reset.addEventListener('click',function(e){
    let height=document.querySelector('#height');
    height.value='';
   const weight= document.querySelector('#weight'
    );
    weight.value='';


    const result=document.querySelector('.result');
    result.innerHTML='';
  })

});