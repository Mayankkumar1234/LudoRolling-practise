var dice1=document.querySelector(".dice-1")

var dice2=document.querySelector(".dice-2")

var dice3=document.querySelector(".dice-3")

var btnlement=document.querySelector("#roll-btn")

btnlement.addEventListener("click",()=>{
    d1=gererateRan();
    d2=gererateRan();
    d3=gererateRan();
    
    if(!dice1.classList.contains("animation")){
        dice1.classList.add("animation")
    }
    

    if(!dice2.classList.contains("animation"))
    {
        dice2.classList.add("animation")
    }
       

    if(!dice3.classList.contains("animation")){
     
        dice3.classList.add("animation")
     
    }
      
  setTimeout(()=>{


    document.querySelector("#ScoreA").innerHTML=d1;
    document.querySelector("#ScoreB").innerHTML=d2;
    document.querySelector("#ScoreC").innerHTML=d3;
    dice1.src=`imgs/dice-${d1}.png`;
    dice2.src=`imgs/dice-${d2}.png`;
    dice3.src=`imgs/dice-${d3}.png`;

    if(dice1.classList.contains("animation")){
        dice1.classList.remove("animation")
    }
    

    if(dice2.classList.contains("animation"))
    {
        dice2.classList.remove("animation")
    }
       

    if(dice3.classList.contains("animation")){
     
        dice3.classList.remove("animation")
     
    }
  },2000)

  setTimeout(()=>{
    winnerFun(d1,d2,d3)
  },2000)

})

function gererateRan(){
 
    return Math.ceil(Math.random()*6);
}

function winnerFun(A,B,C){
    
    if(A>B){
        if(A>C){
          console.log("A")
        }else{
            console.log("C")
             
        }
    }else{
        console.log("C")
    }
}
    