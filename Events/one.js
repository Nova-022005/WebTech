
    //? Browser's Events are example of non sequential  
    // ?in Javascript html injection is not advised

    //* document.getElementById('owl').onclick=function(){
    // *    alert('Owl 9');
    // *}          //not preferred due to lack of functinoality

    //! addEventListener has three parametr first the event second function and third bollean which by defalut is false which can be ignored in most cases.

    //! attachEvent()  used in early days in interent explorer
    //! JQuery - on

    //? document.querySelector('#images').addEventListener('click',function(e){
    // *     e --> Event object 
    // ?    console.log('clicked inside ul');
        
    //? },false);
    // ? document.querySelector('#owl').addEventListener('click',function(e){
   
    // ?    console.log('owl clicked');
    // !    e.stopPropagation()

        
    // ? },false);

    //* important type,timestamp, defaultPrevented
    //* terget, toElement, srcElement, ClientX-ClientY, screenX , screenY
    //* altKey, ctrlKey, shiftkey, keyCode

    //! Event propogration
    //? event propogation is of to type event bubbling and event catching 
    //? false (default)--> bubbling and true--> capturing

    //? event propogation mean one if we click on owl it will propogate to outer .
    //? it is known as Bubbling. can be stoped by stopPropagation
    // 

    //? document.getElementById('google').addEventListener('click',function(e){
    //     console.log('google clicked');
    // ?    e.stopPropagation()
    //  !   e.preventDefault()
    // },false)


    //!  Activity 1. Disappear a image when Clicked

    document.getElementById('images').addEventListener('click',function(e){
      console.log(e.target.tagName);

      if(e.target.tagName==='IMG') {
        console.log(e.target.id);
        let removeIt= e.target.parentNode;
         removeIt.remove();
        }// 
      
      // removeIt.parentNode.removeChild(removeIt);
    })
      
