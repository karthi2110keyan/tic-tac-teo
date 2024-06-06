var box = document.querySelectorAll(".box")




let value=[]
var letter="x"
box.forEach((boxes)=>{

boxes.addEventListener("click",function(){

if(boxes.textContent===""){

boxes.innerHTML=letter
letter="o"
}


value.push(boxes.textContent)
letter = value.findLast((element)=>element)

if(letter==="x"){
letter="o"
boxes.style.color="white"
}else if(letter==="o"){
 letter="x"
boxes.style.color="green"
}



var oneX=box[0].textContent==="x" && box[1].textContent==="x" && box[2].textContent==="x" ;
var twoX=box[0].textContent==="x" && box[4].textContent==="x" && box[8].textContent==="x";
var threeX=box[2].textContent==="x" && box[4].textContent==="x" && box[6].textContent==="x";
var fourX=box[3].textContent==="x" && box[4].textContent==="x" && box[5].textContent==="x";
var fiveX=box[6].textContent==="x" && box[7].textContent==="x" && box[8].textContent==="x";
var sixX=box[0].textContent==="x" && box[3].textContent==="x" && box[6].textContent==="x";
var sevenX=box[1].textContent==="x" && box[4].textContent==="x" && box[7].textContent==="x"
var eightX=box[3].textContent==="x" && box[5].textContent==="x" && box[8].textContent==="x"



var oneO =box[0].textContent==="o" && box[1].textContent==="o" && box[2].textContent==="o";
var twoO=box[0].textContent==="o" && box[4].textContent==="o" && box[8].textContent==="o";
var threeO=box[2].textContent==="o" && box[4].textContent==="o" && box[6].textContent==="o";
var fourO=box[3].textContent==="o" && box[4].textContent==="o" && box[5].textContent==="o";
var fiveO=box[6].textContent==="o" && box[7].textContent==="o" && box[8].textContent==="o";
var sixO=box[0].textContent==="o" && box[3].textContent==="o" && box[6].textContent==="o";
var sevenO=box[1].textContent==="o" && box[4].textContent==="o" && box[7].textContent==="o"
var eightO=box[3].textContent==="o" && box[5].textContent==="o" && box[8].textContent==="o"

var inner =document.querySelector(".button-box")


if(oneX || twoX || threeX || fourX || fiveX || sixX || sevenX || eightX){ 

    inner.style.visibility="visible"
    inner.innerHTML=` <div class="result-box">
    <span style="color: lightgreen;">Player</span>
    <span style="color: white;">x</span>
    <span style="color: lightgreen;">Win!</span>
  </div>
  <button>Restart</button>`

  
}else if(oneO || twoO || threeO || fourO || fiveO || sixO || sevenO || eightO){
   
        inner.style.visibility="visible"
        
    inner.innerHTML=` <div class="result-box">
    <span  transition: text 2s ease-in-out; style="color: white;">Player</span>
    <span style="color: lightgreen;">O</span>
    <span style="color: white;">Win!</span>
  </div>
  <button>Restart</button>`
    
    
}else if(value.length===9){
    inner.style.visibility="visible"
    inner.innerHTML=` <div class="result-box">
    <span style="color: white;">Match</span>
    <span style="color: lightgreen;">Draw</span>
    <span style="color: white;"></span>
  </div>
  <button>Restart</button>`
}








var button=document.querySelector("button")
button.addEventListener("click",function(){
location.reload()
})



})


})


