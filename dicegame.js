let playerOne = {
	health: 100,
	name: getPlayerInput("What is your name?"),
}

let playerTwo = {
	health: 100,
	name: getPlayerInput("What is your name?"),
}

console.log(playerOne.name + " is Player One!");
console.log(playerTwo.name + " is Player Two!");

function rollTheDice (numberOfSidesOnDice){
	let rollOfTheDice = Math.floor(Math.random() * numberOfSidesOnDice) + 1;
	return rollOfTheDice;
}


function getPlayerInput (question) {
	playerInput = prompt(question);
	return playerInput;
}

let firstTurn = determineFirstTurn();
console.log(firstTurn + " Attacks First!!");

function determineFirstTurn(firstTurn){
	let firstPlayer = rollTheDice(20);
	let secondPlayer = rollTheDice(20);


if (firstPlayer > secondPlayer) {
	firstTurn = "Player One";
}
	else {
	firstTurn = "Player Two";
}
return firstTurn;
}

function determineAttackPoints(){
	let attackPoints = rollTheDice(20) + rollTheDice(12) + rollTheDice(4);
	return attackPoints;
}

function determineDefensePoints(){
	let defensePoints = rollTheDice(10) + rollTheDice(12) + rollTheDice(4);
	return defensePoints;	
}

function determineDamageDealt(){
	let damageDealt = determineAttackPoints() - determineDefensePoints();
	return damageDealt;
}

function determineHeavyAttack(){
	let heavyAttack = rollTheDice(10) + rollTheDice(20) + rollTheDice(4) + rollTheDice(8) + rollTheDice(12) + rollTheDice(6);
	return heavyAttack;
}

function determineDefenseToHeavyAttack(){
	let defenseToHeavyAttack = rollTheDice(8) + rollTheDice(10);
	return defenseToHeavyAttack;
}


function determineHeavyAttackDamage(){
	let heavyAttack = determineHeavyAttack();
	let defenseToHeavyAttack = determineDefenseToHeavyAttack();
	let heavyAttackDamage = heavyAttack - defenseToHeavyAttack;
	return heavyAttackDamage;
}

function playerOneAttack(){
	let playerOneAttackButton = document.getElementById("playerOneAttackButton");
	let playerOneAttack = determineDamageDealt();
	let playerTwoAttackButton = document.getElementById("playerTwoAttackButton");
	let playerTwoHeavyAttackButton = document.getElementById("heavyAttackPlayerTwoButton");
	let playerOneHeavyAttackButton = document.getElementById("heavyAttackPlayerOneButton");

	if (playerOneAttack > playerTwo.health){
		console.log("Player One Wins");
		playerTwo.health = 0;
	}
	else if (playerOneAttack > 0) {
		playerTwo.health -= playerOneAttack;
	}
	else {
	playerOneAttack = 0;
	}

	console.log("Player Two health: " + playerTwo.health);

	playerTwoHeavyAttackButton.disabled = false;
	playerOneHeavyAttackButton.disabled = true;
	playerOneAttackButton.disabled = true;
	playerTwoAttackButton.disabled = false;
	return playerTwo.health;
	}

function playerTwoAttack(){
	let playerTwoAttackButton = document.getElementById("playerTwoAttackButton");
	let playerTwoAttack = determineDamageDealt();
	let playerOneAttackButton = document.getElementById("playerOneAttackButton");
	let playerTwoHeavyAttackButton = document.getElementById("heavyAttackPlayerTwoButton");
	let playerOneHeavyAttackButton = document.getElementById("heavyAttackPlayerOneButton");

	if (playerTwoAttack > playerOne.health){
		console.log("Player Two Wins");
		playerOne.health = 0
	}
	else if (playerTwoAttack > 0) {
		playerOne.health -= playerTwoAttack;
	}
	else {
	playerTwoAttack = 0;
	}
	console.log("Player One's Health: " + playerOne.health);
	playerTwoHeavyAttackButton.disabled = true;
	playerTwoAttackButton.disabled = true;
	playerOneAttackButton.disabled = false;
	playerOneHeavyAttackButton.disabled = false;
	return playerOne.health;
	}

function playerOneHeavyAttack(){
	let playerOneAttackButton = document.getElementById("playerOneAttackButton");
	let heavyAttackDamage = determineHeavyAttackDamage();
	let playerOneHeavyAttackButton = document.getElementById("heavyAttackPlayerOneButton");
	let playerTwoAttackButton = document.getElementById("playerTwoAttackButton");
	let playerTwoHeavyAttackButton = document.getElementById("heavyAttackPlayerTwoButton");

	if (heavyAttackDamage > playerTwo.health){
		console.log("Player One Wins");
		playerTwo.health = 0;
	}
	else if (heavyAttackDamage > 0) {
		playerTwo.health -= heavyAttackDamage;
	}
	else {
	heavyAttackDamage = 0;
	}

	console.log("Player Two's Health: " + playerTwo.health);
	playerTwoHeavyAttackButton.disabled = false;
	playerTwoAttackButton.disabled = false;
	playerOneAttackButton.disabled = true;
	playerOneHeavyAttackButton.disabled = true;
	return playerTwo.health;
}

function playerTwoHeavyAttack(){

	let heavyAttackDamage = determineHeavyAttackDamage();
	let playerTwoAttackButton = document.getElementById("playerTwoAttackButton");
	let playerTwoHeavyAttackButton = document.getElementById("heavyAttackPlayerTwoButton");
	let playerOneAttackButton = document.getElementById("playerOneAttackButton");
	let playerOneHeavyAttackButton = document.getElementById("heavyAttackPlayerOneButton");

	if (heavyAttackDamage > playerOne.health){
		console.log("Player Two Wins");
		playerOne.health = 0;
	}
	else if (heavyAttackDamage > 0) {
		playerOne.health -= heavyAttackDamage;
	}
	else {
	heavyAttackDamage = 0;
	}

	console.log("Player One's Health: " + playerOne.health);

	playerOneHeavyAttackButton.disabled = false;
	playerOneAttackButton.disabled = false;
	playerTwoHeavyAttackButton.disabled = true;
	playerTwoAttackButton.disabled = true;
	return playerOne.health;
}




//////////Couldn't get the button to deactivate during turns. Kept gettting a (Cannot set property 'disabled' of null.) 
//////////Other functionality works fine. 
// function suckerPunchPlayerOne(){

// 	let playerOneAttackButton = document.getElementById("playerOneAttackButton");
// 	let heavyAttackDamage = determineHeavyAttackDamage();
// 	let playerOneHeavyAttackButton = document.getElementById("heavyAttackPlayerOneButton");
// 	let playerTwoAttackButton = document.getElementById("playerTwoAttackButton");
// 	let playerTwoHeavyAttackButton = document.getElementById("heavyAttackPlayerTwoButton");
// 	let suckerPunchButtonPlayerOne = document.getElementById("suckerPunchPlayerOne");

// 	let knockEmOut = rollTheDice(20);

// 	if (knockEmOut > 18) {
// 		playerTwo.health = 0;
// 		console.log("SUCKER PUNCHED PLAYER ONE WINS!!!");
// 	}

// 	console.log("Player Two's Health: " + playerTwo.health)
// 	suckerPunchButtonPlayerOne.disabled = true;
// 	playerTwoHeavyAttackButton.disabled = false;
// 	playerOneHeavyAttackButton.disabled = true;
// 	playerOneAttackButton.disabled = true;
// 	playerTwoAttackButton.disabled = false;


// }


// function suckerPunchPlayerTwo(){

// 	let playerOneAttackButton = document.getElementById("playerOneAttackButton");
// 	let heavyAttackDamage = determineHeavyAttackDamage();
// 	let playerOneHeavyAttackButton = document.getElementById("heavyAttackPlayerOneButton");
// 	let playerTwoAttackButton = document.getElementById("playerTwoAttackButton");
// 	let playerTwoHeavyAttackButton = document.getElementById("heavyAttackPlayerTwoButton");
// 	let suckerPunchButtonPlayerTwo = document.getElementById("suckerPunchPlayerTwo");
// 	let suckerPunchButtonPlayerOne = document.getElementById("suckerPunchPlayerOne");


// 	let knockEmOut = rollTheDice(20);
	
// 	if (knockEmOut > 18) {
// 		playerOne.health = 0;
// 		console.log("SUCKER PUNCHED PLAYER TWO WINS!!!");
// 		}

// 	console.log("Player One's Health: " + playerOne.health)
// 	playerTwoHeavyAttackButton.disabled = true;
// 	playerOneHeavyAttackButton.disabled = false;
// 	playerOneAttackButton.disabled = false;
// 	playerTwoAttackButton.disabled = true;



// 	return playerTwo.health;

// }

