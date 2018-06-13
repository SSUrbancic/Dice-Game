// console.log(rollTheDice(20));
// console.log(rollTheDice(6));
// console.log(rollTheDice(8));
// console.log(rollTheDice(10));
// console.log(rollTheDice(12));
// console.log(rollTheDice(4));



// let firstPlayer = getPlayerInput("Player One's Name:");
// let secondPlayer = getPlayerInput("Player Two's Name:");

// console.log(firstPlayer + " is Player One!");
// console.log(secondPlayer + " is Player Two!");

let playerOne = {
	health: 100,
}

let playerTwo = {
	health: 100,
}








function rollTheDice (numberOfSidesOnDice){
	let rollOfTheDice = Math.floor(Math.random() * numberOfSidesOnDice) + 1;
	return rollOfTheDice;
}


function getPlayerInput (question) {
	playerInput = prompt(question);
	return playerInput;
}

// let firstTurn = determineFirstTurn();
// console.log(firstTurn + " Attacks First!!");

// function determineFirstTurn(firstTurn){
// 	let firstPlayer = rollTheDice(20);
// 	let secondPlayer = rollTheDice(20);

// if (firstPlayer > secondPlayer) {
// 	firstTurn = "First Player";
// }
// 	else {
// 	firstTurn = "Second Player";
// }
// return firstTurn;
// }

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

function playerOneAttack(){
	let playerOneAttackButton = document.getElementById("playerOneAttackButton");
	let playerOneAttack = determineDamageDealt();
	let playerOneSuperCharge = document.getElementById("superChargePlayerOneButton");
	let playerTwoAttackButton = document.getElementById("playerTwoAttackButton");
	let playerTwoSuperCharge = document.getElementById("superChargePlayerTwoButton");

	if (playerOneAttack > 0) {
		playerTwo.health = playerTwo.health - playerOneAttack;
	}
	else {
	playerOneAttack = 0;
	}
	playerOneAttackButton.disabled = true
	playerOneSuperCharge.disabled = true
	playerTwoAttackButton.disabled = false
	playerTwoSuperCharge.disabled = false
	console.log("Player Two health: " + playerTwo.health);
	return playerOneAttack
	}

	function playerTwoAttack(){
	let playerTwoAttackButton = document.getElementById("playerTwoAttackButton");
	let playerTwoAttack = determineDamageDealt();
	let playerTwoSuperCharge = document.getElementById("superChargePlayerTwoButton");
	let playerOneAttackButton = document.getElementById("playerOneAttackButton");
	let playerOneSuperCharge = document.getElementById("superChargePlayerOneButton");
	if (playerTwoAttack > 0) {
		playerOne.health = playerOne.health - playerTwoAttack;
	}
	else {
	playerTwoAttack = 0;
	}
	playerTwoAttackButton.disabled = true
	playerTwoSuperCharge.disabled = true
	playerOneAttackButton.disabled = false
	playerOneSuperCharge.disabled = false
	console.log("Player One health: " + playerOne.health);
	return playerTwoAttack
	}










//starting the game first player will roll the dice which will determine attach power
//second player will roll the dice to determine defense points
// if attack is higher then the remainder will be dealt as damage
// if defense ends up being higher no damage will be dealt.
