var elevatorUp = true;
var elevatorDown = true;
var elevatorStop = true;
var elevatorBroke = true;

if (elevatorUp === true){
	console.log("Going up up up");
} else {
	 console.log("The elevator is either broken or going down.");
}

//Write one for elevator broken

//write one for elevator stop

//write one for elevator going down

if (elevatorBroke === true){
	console.log("We've broken down in the middle of nowhere!");
} else {
	console.log ("You have arrived at your destination")
}

if (elevatorStop === false){
	console.log("Do not open doors");
} else {
	console.log("Exit the elevator");
}

if (elevatorDown === false){
	console.log("We are moving");
} else {
	console.log("Going down into the abyss")
}


if (elevatorUp === true && elevatorBroke === false) {
	console.log("The elevator is moving!");
} else {
	console.log("Elevator is coming to rescue you");
}

if (elevatorDown || elevatorUp){
	console.log("Please keep your arms and legs in the elevator while it's moving");
} else {
	console.log ("You've reached your destination");
}