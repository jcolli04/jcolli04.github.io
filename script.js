"use strict";

window.onload = function () {
	console.log("window loaded");
	new Game();
}

function Game  () {
	console.log('game started');
	var fish = document.getElementById('fish');
	addListeners();
}

function addListeners () {
	var middle = true;
	document.addEventListener("keydown", function(event) {
		if(event.keyCode == 38){
			console.log("Up");
			if(moveUp() == true){
				evalHeight();
			}
		}
	});
	document.addEventListener("keydown", function(event) {
		if(event.keyCode == 40){
			console.log("Down");
			if(moveDown() == true){
				evalHeight();
			}
		}
	});
}

function middle() {
	if(fish.offsetTop == 300) {
		return true;
	}else{
		return false;
	}
}

function under() {
	if(fish.offsetTop > 300) {
		return true;
	}else{
		return false;
	}
}

function over() {
	if(fish.offsetTop < 300) {
		return true;
	}else{
		return false;
	}
}

function moveUp() {
	if(fish.offsetTop != 50){
		if(middle()){
			var mid = middle();
			fish.style.top = (fish.offsetTop - 100)+'px';
			return mid;
		}else if(under()){
			fish.style.top = (fish.offsetTop - 100)+'px';
		}
	}
	return false;
}

function moveDown() {
	if(fish.offsetTop != 540){
		var mid = middle();
		fish.style.top = (fish.offsetTop)+'px';
		return mid;
	}
	return false;
}

function evalHeight() {
	window.setTimeout(function () {
		console.log('timeout')
		if(fish.offsetTop < 300){
			fish.style.top = (fish.offsetTop - 49)+'px';
			evalHeight()
		}else if(fish.offsetTop > 300){
			fish.style.top = (fish.offsetTop - 51)+'px';
			evalHeight()
		}
	}, 50);
}



































