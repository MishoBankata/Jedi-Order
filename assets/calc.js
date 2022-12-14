function addition() {
	document.getElementById('answer').innerHTML = document.getElementById('inputA').valueAsNumber + document.getElementById('inputB').valueAsNumber;
}
function subtraction() {
	document.getElementById('answer').innerHTML = document.getElementById('inputA').valueAsNumber - document.getElementById('inputB').valueAsNumber;
}
function multiplication() {
	document.getElementById('answer').innerHTML = document.getElementById('inputA').valueAsNumber * document.getElementById('inputB').valueAsNumber;
}
function division() {
	document.getElementById('answer').innerHTML = document.getElementById('inputA').valueAsNumber / document.getElementById('inputB').valueAsNumber;
}
function exponentiation() {
	document.getElementById('answer').innerHTML = document.getElementById('inputA').valueAsNumber ** document.getElementById('inputB').valueAsNumber;
}

document.getElementById('add').onclick = addition;
document.getElementById('sub').onclick = subtraction;
document.getElementById('mul').onclick = multiplication;
document.getElementById('div').onclick = division;
document.getElementById('exp').onclick = exponentiation;