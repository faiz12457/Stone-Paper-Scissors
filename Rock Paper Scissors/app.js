let userScore=0;
let compScore=0;
let scoreD=0;



let choice= document.querySelectorAll(".choice");
let userWin=document.querySelector("#user-score");
let comWin=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
let ScoreDraw=document.querySelector("#draw-score");
let button= document.querySelector(".button");









const reset=()=>{
     userScore=0;
    compScore=0;
   scoreD=0;
   msg.innerText="Play Your Move";

   comWin.innerText=compScore ;
   userWin.innerText=userScore;
   ScoreDraw.innerText =scoreD;
    msg.style.backgroundColor="#081b31";
}

const genComputerVal=()=>{

    let arr=["Rock","Paper","Scissors"];
   const randomIdx=  Math.floor(Math.random()*3);

   return arr[randomIdx];



}


const winner=(win,userChoice,ComputerChoice)=>{
    if(win===false){
        compScore++;
        console.log('User lost');
        msg.innerText=`You lose. ${ComputerChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        comWin.innerText= compScore ;

      

    }
    else{
        userScore++;
        console.log('User win');
        msg.innerText=`You Win! ${userChoice} beats ${ComputerChoice}`;
        msg.style.backgroundColor="green";
        userWin.innerText=userScore;
    }
    
}






const draw=()=>{
    

    console.log('Draw');
    msg.innerText="Draw";
    msg.style.backgroundColor="#081b31";
    

}







const playgame=(userChoice)=>{
    console.log('User val = ',userChoice);
    

   const ComputerChoice= genComputerVal();
   console.log('Computer val= ',ComputerChoice);

   if(userChoice===ComputerChoice){
    scoreD++;
   ScoreDraw.innerText = scoreD;
    draw();

   }
   else{
    let userwin=true;
    if(userChoice==="Rock"){
        userwin=ComputerChoice==="Paper" ? false:true;
    }
    else if(userChoice==="Paper"){
        userwin=ComputerChoice==="Scissors"? false: true;
    }

    else{
        userwin=ComputerChoice==="Rock"? false:true;
    }

    winner(userwin,userChoice,ComputerChoice);
   }
}


choice.forEach((div)=>{

    div.addEventListener("click",()=>{
        let userChoice=div.getAttribute("id");
        playgame(userChoice);
    });
});

button.addEventListener("click",reset);