const buttons = document.querySelectorAll(".color-button");
const body = document.querySelector("body");
const reset=document.querySelector('.reset');


buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;

    e.target.style.border = "2px solid white";
  });

});

reset.addEventListener("click",function(e){
    body.style.backgroundColor ="rgb(10, 5, 23)" ;
  });

