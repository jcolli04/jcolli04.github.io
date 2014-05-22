"use strict";

window.onload = function () {
	console.log("window loaded");
	new Game();
}

function Game  () {
	console.log('game started');
	new fish();
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

function fish() {
	this.guy = document.getElementById('fish');
	this.middle = true;
}

fish.prototype.moveUp() {
	if(fish.offsetTop != 50){
		fish.style.top = (fish.offsetTop - 100)+'px';
	}
}

fish.prototype.moveDown() {
	if(fish.offsetTop != 540){
		fish.style.top = (fish.offsetTop)+'px';
	}
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



































