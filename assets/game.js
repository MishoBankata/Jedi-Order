let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let sqX = 50;
let sqY = 50;

context.fillStyle = "red";
context.strokeStyle = "yellow";

let heroPosX = Number(0);
let heroPosY = Number(0);


let img = new Image();
img.src = "assets/smile.png";
img.onload = function(){
	map();
}

let creatures = [
	[0, 0, 0, 0 ,0, 0, 0],
	[0, 0, 0, 0 ,0, 0, 0],
	[0, 0, 0, 0 ,0, 0, 0],
	[0, 0, 0, 0 ,0, 0, 0],
	[0, 0, 0, 0 ,0, 0, 0],
	[0, 0, 0, 0 ,0, 0, 0],
	[0, 0, 0, 0 ,0, 0, 0]
];

for(let i = 0; i < canvas.height / sqY; i++) {
	for(let j = 0; j < canvas.width / sqX; j++) {
		context.strokeRect(sqX * j, sqY * i, sqX, sqY);
		creatures[i][j] = Math.floor(Math.random() * 100);
	}
}

function creatureCheck(){
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	if(creatures[i][j] <= 1) {
		console.log("gorgodon");
	} else if (creatures[i][j] <= 9){
		console.log("asharl panther");
	} else if (creatures[i][j] <= 23){
		console.log("razhak");
	} else if (creatures[i][j] <= 39){
		console.log("lisk");
	} else if (creatures[i][j] <= 59){
		console.log("crystal caves");
	} else if (creatures[i][j] <= 79){
		console.log("stalagmites");
	} else console.log("cliffs");
}

//        CREATURES 40%
//        0-1 gorgodon 2%
//        2-9 asharl panther 8%
//        10-23 razhak 14%
//        24-39 lisk 16%
//        
//        TERRAIN 60%
//        40-59 crystal caves 20%
//        60-79 stalagmites 20%
//        80-99 cliffs 20%

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
	creatureCheck()
}

function down() {
	if(heroPosY == 300) {
		map();
		return;
	}
	heroPosY += 50;
	map();
	creatureCheck()
}

function left() {
	if(heroPosX == 0) {
		map();
		return;
	}
	heroPosX -= 50;
	map();
	creatureCheck()
}

function right() {
	if(heroPosX == 300) {
		map();
		return;
	}
	heroPosX += 50;
	map();
	creatureCheck()
}