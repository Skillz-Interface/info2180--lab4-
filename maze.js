var end;
var start;
var boundaries;
var statusState;
var mazeBoundary;
var boundaryo;
var win = false;
var OutOfBounds = false;

window.onload=function(){

	end = document.getElementById("end");
	start = document.getElementById("start");
	boundaryo = document.getElementById("boundary1");
	statusState = document.getElementById("status");
	mazeBoundary = document.getElementById("maze");
	boundaries = document.querySelectorAll(".boundary");

	start.onclick = Restart;

	end.onmouseover = Win;
	boundaryo.onmouseover = touchwall;
	for (var i = 0; i< boundaries.length-1; i++){
		boundaries[i].onmouseover = overBound;
	}
}

function touchwall(){    //Turns red if mouse hovers over top left wall
	boundaryo.classList.add("youlose");

}

function overBound(){ //Turns all divs red if mouse hovers over any border
	OutOfBounds = true;

	for( i=0; i < boundaries.length-1; i++)
{
	boundaries[i].classList.add("youlose");
}
}

function Win (){ //Check if user won

	if (!OutOfBounds){
		win = true;
		alert("You win")

	}

}

function Restart(){ //Reset game 

	for (var i = 0; i < boundaries.length - 1; i++) 
	{
		boundaries[i].className = "boundary";
	}


}
