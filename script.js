window.onload = function () {
	var object = document.getElementById('embedded_object');
	object.style.width = "100%";
	console.log(window.innerHeight);
	object.style.height = window.innerHeight+'px';
	object.style.border = "1pt solid #000000";
	var swf = document.getElementById('swffile');
	swf.style.width = "100%";
	swf.style.height = "100%";
}