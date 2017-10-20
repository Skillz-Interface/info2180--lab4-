var end;
var start;
var boundaries;
var statusState;
var mazeBoundary;
var win = false;
var OutOfBounds = false;

window.onload=function(){

	end = document.getElementById("end");
	start = document.getElementById("start");
	boundaryo = document.getElementById("boundary1");
	statusState = document.getElementById("status");
	mazeBoundary = document.getElementById("maze");


	boundaryo.onmouseover = touchwall;
}

function touchwall(){

	boundaryo.classList.add("youlose");

}

function CheckWin(){
	if(!OutOfBounds){ //Checks if the user hit any boundaries and lost the game
		win = true;
		}

}