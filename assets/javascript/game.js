let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let sqX = 50;
let sqY = 50;

context.fillStyle = "red";
context.strokeStyle = "yellow";

let heroPosX = Number(0);
let heroPosY = Number(0);


let img = new Image();
img.src = "assets/game_assets/smile.png";
img.onload = function(){
	map();
}

let creatures = [
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]]
];

for(let i = 0; i < canvas.height / sqY; i++) {
	for(let j = 0; j < canvas.width / sqX; j++) {
		context.strokeRect(sqX * j, sqY * i, sqX, sqY);
		creatures[i][j][0] = Math.floor(Math.random() * 100);
	}
}

function creatureCheck(){
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	if(creatures[i][j][0] <= 1) {
		document.getElementById("imgs").src = "assets/game_assets/gorgodon.png";
	} else if (creatures[i][j][0] <= 9){
		document.getElementById("imgs").src = "assets/game_assets/panther.png";
	} else if (creatures[i][j][0] <= 23){
		document.getElementById("imgs").src = "assets/game_assets/centipede.png";
	} else if (creatures[i][j][0] <= 39){
		document.getElementById("imgs").src = "assets/game_assets/lisk.png";
	} else if (creatures[i][j][0] <= 59){
		document.getElementById("imgs").src = "assets/game_assets/crystal.png";
	} else if (creatures[i][j][0] <= 79){
		document.getElementById("imgs").src = "assets/game_assets/stalagmites.png";
	} else document.getElementById("imgs").src = "assets/game_assets/cliffs.png";
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




document.onkeydown = function(e) {
	switch(e.key) {
		case "w": 
			up();
			break;
		case "a":
			left();
			break;
		case "s":
			down();
			break;
		case "d":
			right();
			break;
		default: console.log("no current function of this key");
	}
}



function map() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	for(let i = 0; i < canvas.height / sqY; i++) {
		for(let j = 0; j < canvas.width / sqX; j++) {
			if(creatures[j][i][1] == 1) {
				context.fillRect(sqX * j, sqY * i, sqX, sqY);
			}
		}
	}
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
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	creatures[i][j][1] = 1;
	heroPosY -= 50;
	map();
	creatureCheck();
}

function down() {
	if(heroPosY == 300) {
		map();
		return;
	}
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	creatures[i][j][1] = 1;
	heroPosY += 50;
	map();
	creatureCheck();
}

function left() {
	if(heroPosX == 0) {
		map();
		return;
	}
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	creatures[i][j][1] = 1;
	heroPosX -= 50;
	map();
	creatureCheck();
}

function right() {
	if(heroPosX == 300) {
		map();
		return;
	}
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	creatures[i][j][1] = 1;
	heroPosX += 50;
	map();
	creatureCheck();
}

function change() {
	document.getElementById("arrows").src = "assets/planets/kamino.jpg";
}