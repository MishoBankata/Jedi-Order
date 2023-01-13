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


context.drawImage(img, heroPosX, heroPosY);

function map() {
	for(let i = 0; i < canvas.height / sqY; i++) {
		for(let j = 0; j < canvas.width / sqX; j++) {
			context.strokeRect(sqX * j, sqY * i, sqX, sqY);
			
		}
	}
}

map();

function up() {
	if(heroPosY == 0) {
		map();
		return;
	}
	context.fillStyle = "black";
	context.fillRect(heroPosX, heroPosY, sqX, sqY);
	heroPosY -= 50;
	context.drawImage(img, heroPosX, heroPosY);
	map();
}

function down() {
	if(heroPosY == 300) {
		map();
		return;
	}
	context.fillStyle = "black";
	context.fillRect(heroPosX, heroPosY, sqX, sqY);
	heroPosY += 50;
	context.drawImage(img, heroPosX, heroPosY);
	map();
}

function left() {
	if(heroPosX == 0) {
		map();
		return;
	}
	context.fillStyle = "black";
	context.fillRect(heroPosX, heroPosY, sqX, sqY);
	heroPosX -= 50;
	context.drawImage(img, heroPosX, heroPosY);
	map();
}

function right() {
	if(heroPosX == 300) {
		map();
		return;
	}
	context.fillStyle = "black";
	context.fillRect(heroPosX, heroPosY, sqX, sqY);
	heroPosX += 50;
	context.drawImage(img, heroPosX, heroPosY);
	map();
}