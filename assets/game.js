let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let sqX = 50;
let sqY = 50;

context.fillStyle = "red";
context.strokeStyle = "yellow";

let heroPosX = 0;
let heroPosY = 0;


let img = new Image();
img.src = "assets/smile.png";
img.onload = function(){
	map();
}



function map() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(img, heroPosX, heroPosY);
	for(let i = 0; i < canvas.height / sqY; i++) {
		for(let j = 0; j < canvas.width / sqX; j++) {
			context.strokeRect(sqX * j, sqY * i, sqX, sqY);
			
		}
	}
}

function up() {
	if(heroPosY == 0) {
		map();
		return;
	}
	heroPosY -= 50;
	map();
}

function down() {
	if(heroPosY == 300) {
		map();
		return;
	}
	heroPosY += 50;
	map();
}

function left() {
	if(heroPosX == 0) {
		map();
		return;
	}
	heroPosX -= 50;
	map();
}

function right() {
	if(heroPosX == 300) {
		map();
		return;
	}
	heroPosX += 50;
	map();
}