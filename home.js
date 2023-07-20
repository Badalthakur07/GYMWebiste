
//function change() {
   // if(document.getElementById("ul-nav").style.visibility =="visible" ){
    //    document.getElementById("ul-nav").style.visibility="hidden";
    //} else{
     //   document.getElementById("ul-nav").style.visibility="visible";
    //}
    //}

      
    




     let icon  = document.querySelector('#righticon');
     let left = document.querySelector('#lefticon');
     let card = document.querySelector('.third-box');

    left.addEventListener('click', ()=>{
      card.scrollLeft -= 140;
    });

    icon.addEventListener('click',()=>{
      card.scrollLeft += 140;
    })


  
   







