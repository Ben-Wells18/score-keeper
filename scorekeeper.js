var p1Button = document.querySelector("#p1btn");
var p2Button = document.querySelector("#p2btn");
var resetButton = document.querySelector("#resetbtn");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var numInput = document.querySelector("#num-limit")
var numDisplay = document.querySelector("#score-limit");

var p1Score = 0;
var p2Score = 0;
/*gameOver determines game state */
var gameOver = false;
/*winningScore decides the score limit */
var winningScore = 5;

/*Increments player one's score up until their score is equal to the limit*/
p1Button.addEventListener("click", function(){
	if(!gameOver) {
	p1Score++;
	if (p1Score === winningScore) {	/*code to be executed when player wins */
		p1Display.classList.add("winner"); /* uses the .winner CSS class to turn the text green */
		gameOver = true;
	}
}
/* ensures that the score displayed is equal to the amount incremented */
	p1Display.textContent = p1Score;
});

/*Increments player two's score up until their score is equal to the limit */
p2Button.addEventListener("click", function(){
	if(!gameOver) {
	p2Score++;
	if (p2Score === winningScore) { /*code to be executed when player wins */
		p2Display.classList.add("winner"); /* uses the .winner CSS class to turn the text green */
		gameOver = true;
	}
}
/* ensures that the score displayed is equal to the amount incremented */
	p2Display.textContent = p2Score;
});

resetButton.addEventListener("click", function(){
	p1Score = 0; /* resets the value of p1Score on clicking the rest button */
	p2Score = 0; /* resets the value of p2Score on clicking the rest button */
	p1Display.textContent = 0; /* resets the actual number displayed on the page for player 1 */
	p2Display.textContent = 0; /* resets the actual number displayed on the page for player 2 */
	p1Display.classList.remove("winner"); /* removes the CSS .winner class that turns the text green */
	p2Display.classList.remove("winner"); /* removes the CSS .winner class that turns the text green */
	gameOver = false; /* Resets the game, without setting gameOver back to false all the previous code will not run */
});

numInput.addEventListener("change" , function(){ /* allows player to choose score limit */
	numDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value); /* changes value of numInput from a string to a number */
});
