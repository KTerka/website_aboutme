var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock');
var	pickPaper = document.getElementById('js-playerPick_paper');
var	pickScissors = document.getElementById('js-playerPick_scissors');


	
pickRock.addEventListener('click', function() { playerPick('rock'); });
pickPaper.addEventListener('click', function() { playerPick('paper'); });
pickScissors.addEventListener('click', function() { playerPick('scissors'); });

function playerPick(playerPick) { //this is nessessery?
	console.log(playerPick);
}

var gameState = 'notStarted', //started //ended
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};
	
var newGameElem = document.getElementById('js-newGameElement');
var	pickElem = document.getElementById('js-playerPickElement');
var	resultsElem = document.getElementById('js-resultsTableElement');
var theWinnerIs = document.getElementById('js-theWinnerIs');
var theWinnerName = document.getElementById('js-theWinnerName');

function setGameElements(){
	switch(gameState) {
		case 'started' :
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
			theWinnerIs.style.display = 'none';
			break;
		case 'ended':
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
			theWinnerIs.style.display = 'block';
			newGameBtn.innerText = 'Play again';
			
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
			if (gameState != "ended") {
			  theWinnerIs.style.display = 'none';
			}
	}
}

setGameElements();  //!!!this is needed to not display elements with score and names in the beggining of the game


var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

	
function newGame() {
	player.name = prompt('Please enter your name' , 'player name');
	
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started' ;
		setGameElements();
		playerNameElem.innerHTML = player.name;
		setGamePoints();
	}
}




var x = Math.random();

function getComputerPick() {
	var possiblePicks = [ 'rock' , 'paper' , 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
	
function playerPick(playerPick) {
    var computerPick = getComputerPick();
	
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
	
	checkRoundWinner(playerPick, computerPick);
	setGamePoints();
	theWinner();
	
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
		
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
		
    }

}

	
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
	
}

function theWinner() {
	
	if (player.score == 10){
		gameState = 'ended';
		theWinnerName.innerText = player.name;
		setGameElements();
	}
	else if (computer.score == 10) {
		gameState = 'ended';
		theWinnerName.innerText = 'computer';
		setGameElements();
	}
}


	

















	

