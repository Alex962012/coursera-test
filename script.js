var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d")
var death=0;
var score=0;
let div=document.querySelector('.score')


const mario=document.getElementById("mario");
const npc=document.getElementById("npc");
document.addEventListener("keydown",function(event){
    jump();
});

function jump(){
    if (mario.classList !="jump") {
        mario.classList.add("jump") 
        }
      
    setTimeout(function(){
    mario.classList.remove("jump")
},500)
}  
 
let isAlive=setInterval(function(){
    let marioTop=parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let npcLeft=parseInt(window.getComputedStyle(npc).getPropertyValue("left"));
 
if( npcLeft< 50 && npcLeft>0 && marioTop>=140 ){
    alert("Pipec")
}


if( npcLeft<-16){
    score=score+1;
    div.innerHTML=score;
    console.log(score);
}
if( npcLeft< 50 && npcLeft>0 && marioTop>=140){
    death++;
   
    console.log('Попытка' +' '+death);
    score=0;
}



// function score(){
//         var score=0;score=score+1;
//         console.log(score)
//         ctx.fillStyle="#000";
// ctx.font="24px Verdana";
// ctx.fillText("Score "+ score ,10, 20);
    
// }
},10)

