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


	boundaryo.onmouseover = touchwall;
	for (var i = 0; i< boundaries.length-1; i++){
		boundaries[i].onmouseover = overBound;
	}
}

function touchwall(){    //Turns red if mouse hovers over top left wall
	boundaryo.classList.add("youlose");

}

function overBound(){
	for( i=0; i < boundaries.length-1; i++)
{
	boundaries[i].classList.add("youlose");
}
}