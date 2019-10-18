let timerValue=60;
let initialMolePopUpTime=1000;
let outtime=0.9*initialMolePopUpTime;
let currscore=0;
 let randomHole;
let holes=document.getElementsByClassName("ind-hole");
let moles=document.getElementsByClassName("img-mole");

let numberOfHoles=holes.length;



function selectRandomHole(){
  randomHole=Math.floor(Math.random()*numberOfHoles);
  return randomHole;
}
function startGame(){
	timerValue=60;
  let cancelTimer = setInterval(startTimer,initialMolePopUpTime);
  document.getElementById("clock").innerText=60;
  document.getElementById("crnt-scr-val").innerText=0;
  document.getElementById("btn-start").disabled=true;
} 

  function startTimer(){
  timerValue--;
    if(timerValue<0)
      {
        clearInterval(cancelTimer);
      }
    else if(timerValue>=0)
      {
      	document.getElementById("btn-start").disabled=true;
        selectRandomHole();
  moles[randomHole].style.display="block";
  	let clockValue=document.getElementById("clock");
  	clockValue.innerText=timerValue; 
   moleOutTime = setInterval(gone, outtime);
      } 
}
	

	function gone() {
 	 moles[randomHole].style.display="none";
    clearInterval(moleOutTime);
}


for(let i=0;i<numberOfHoles;i++)
{   var mymole=moles[i];
	mymole.addEventListener("click",whack);
}
function whack(event){
	if(event.target == moles[randomHole])
	{
		currscore++;
		let myscore=document.getElementById('crnt-scr-val');		
		myscore.innerText=currscore;


		let myhighscore=document.getElementById("high-scr-value");
		if 	(currscore>myhighscore.innerText)
		{
			myhighscore.innerText=currscore;
		}
	}
}

function resetGame(){
	timerValue=0;
  document.getElementById("clock").innerText=60;
  document.getElementById("crnt-scr-val").innerText=0;
  document.getElementById("btn-start").disabled=false;
  clearInterval(cancelTimer);
}













