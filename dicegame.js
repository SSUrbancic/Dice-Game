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


// let firstPlayer = getPlayerInput("Player Name:");
// let secondPlayer = getPlayerInput("Player Name:");
// // let thirdPlayer = getPlayerInput("Player Name:");
// // let fourthPlayer = getPlayerInput("Player Name:");

// console.log(firstPlayer + " is Player One!");
// console.log(secondPlayer + " is Player Two!");

function getPlayerInput (question) {
	playerInput = prompt(question);
	return playerInput;
}



function determineFirstPlayer(){
	let firstPlayer = rollTheDice(20);
	let secondPlayer = rollTheDice(20);
	let thirdPlayer = rollTheDice(20);
	let fourthPlayer = rollTheDice(20);
	let firstTurn;
if (firstPlayer > secondPlayer && thirdPlayer && fourthPlayer) {
	firstTurn = firstPlayer;
	console.log("First player goes first!");
}
	else if (secondPlayer > firstPlayer && thirdPlayer && fourthPlayer) {
	firstTurn = secondPlayer;
	console.log("Second player goes first!");
}
	else if (thirdPlayer > firstPlayer && secondPlayer && fourthPlayer) {
	firstTurn = thirdPlayer;
	console.log("Third player goes first!");
}
	else {
	firsturn = fourthPlayer;
	console.log("Fourth player goes first!");
}
return firstTurn;
}

function attack(){
	let attackPoints = rollTheDice(20) + rollTheDice(6) + rollTheDice(4)
	return attackPoints
}

function defense(){
	let defensePoints = rollTheDice(20) + rollTheDice(12) + rollTheDice(4)
	return defensePoints	
}

console.log(defense())
console.log(attack())
//starting the game first player will roll the dice which will determine attach power
//second player will roll the dice to determine defense points
// if attack is higher then the remainder will be dealt as damage
// if defense ends up being higher no damage will be dealt.
