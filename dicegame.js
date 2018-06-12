function rollTheDice (numberOfSidesOnDice){
	let rollOfTheDice = Math.floor(Math.random() * numberOfSidesOnDice) + 1;
	return rollOfTheDice;
}
// console.log(rollTheDice(20));
// console.log(rollTheDice(6));
// console.log(rollTheDice(8));
// console.log(rollTheDice(10));
// console.log(rollTheDice(12));
// console.log(rollTheDice(4));



// let firstPlayer = getPlayerInput("Player One's Name:");
// let secondPlayer = getPlayerInput("Player Two's Name:");
// // let thirdPlayer = getPlayerInput("Player Name:");
// // let fourthPlayer = getPlayerInput("Player Name:");

// console.log(firstPlayer + " is Player One!");
// console.log(secondPlayer + " is Player Two!");

function getPlayerInput (question) {
	playerInput = prompt(question);
	return playerInput;
}

let firstTurn = determineFirstTurn();

function determineFirstTurn(firstTurn){
	let firstPlayer = rollTheDice(20);
	let secondPlayer = rollTheDice(20);

if (firstPlayer > secondPlayer) {
	firstTurn = "First Player";
	console.log("First player attacks first!");
}
	else {
	firstTurn = "Second Player";
	console.log("Second player attacks first!");
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
	console.log(damageDealt);
	return damageDealt;
}


function playerOneAttack(){
	let playerOneAttack = determineDamageDealt();
	if (playerOneAttack > 0) {
		playerTwo.health = playerTwo.health - playerOneAttack;
	}
	else {
	playerOneAttack = 0;
	}
	console.log(playerTwo.health)
	return playerTwo.health
	}



function playerTwoAttack(){
	let playerTwoAttack = determineDamageDealt();
	if (playerTwoAttack > 0) {
		playerOne.health = playerOne.health - playerTwoAttack;
	}
	else {
	playerTwoAttack = 0;
	}
	console.log(playerOne.health)
	return playerOne.health
	}




let playerOne = {
	health: 100,
}

let playerTwo = {
	health: 100,
}


//starting the game first player will roll the dice which will determine attach power
//second player will roll the dice to determine defense points
// if attack is higher then the remainder will be dealt as damage
// if defense ends up being higher no damage will be dealt.
