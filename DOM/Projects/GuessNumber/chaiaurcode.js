let randomNumber = 5;
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guess');
const guessSlot=document.querySelector('#previous');
const remianing=document.querySelector('#remaining')
const result = document.querySelector('#result');
const startOver=document.querySelector('.resultPara')
const p=document.createElement('button');

let previous = [];
let numGuess = 1;
let playGame = true;


if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);

  })
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Pless enter valid number.');
  }
  else if (guess < 1 || guess > 100) {
    alert('Pless enter number in range of (1,100).');
  }else{
    previous.push(guess);
    if(numGuess===10){
      displayGuess(guess);
      diplayMessage(`Game Over . Random number was ${randomNumber}`);
      endGame();
    }else{
      checkGuess(guess);
    }
  }

}

function checkGuess(guess) {
  displayGuess(guess);
if(guess===randomNumber){
  diplayMessage(`You guess it right`);
  endGame()
}else if(guess< randomNumber){
  diplayMessage(`Number is too Low`);
}else{
  diplayMessage(`Number is too High`)
}
}

function diplayMessage(message) {
  result.innerHTML=`<h2>${message}</h2>`;
}
function displayGuess(guess) {
  userInput.value=''
  numGuess++;
  guessSlot.innerHTML+=` ${guess},`;
  remianing.innerHTML=`${11-numGuess}`;
  
}

function newGame() {
const newGameBUtton=document.querySelector('#newGame');
newGameBUtton.addEventListener('click',function(e){
  randomNumber=document.querySelector('#submit');
  previous=[];
  numGuess=1;
  guessSlot.innerHTML='';
  remianing.innerHTML=`${11-numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame=true;
})
}

function endGame() {
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`Start New Game`;
  startOver.appendChild(p)
  playGame=false;
  newGame();
}


