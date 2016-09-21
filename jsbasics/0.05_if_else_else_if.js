var bankAccount = 500;
var appleWatch = 400;
var appleWatchGold = 10000;

if (bankAccount > appleWatch) {
	console.log("Make it rain!")
} else if (bankAccount < appleWatchGold) {
	console.log("Start selling plasma to get this!")
} else {
	console.log ("Get a job you hippie!")
}

//create a personAge then use if/elseif/else to check
//if that person is eligible to vote

// var personAge = 18

// if (personAge >= 18) {
// 	console.log("You can vote!");
// } else if (personAge <= 18) {
// 	console.log("Try again next year!");
// } else {
// 	console.log("You're too young to vote.");
// }

var personAge = 20;
var votingAge = 18;
var regVote = true;

 if ((personAge >= votingAge) && (regVote === true)) {
	console.log("You can vote!");
} else if ((personAge >= votingAge) && (regVote === false)) {
	console.log("Try again next year!");
} else {
	console.log("You're too young to vote.");
}

//challenge: creat a var and assignit a value
//next create an if, else if, else statement to evaluate if the number is divisable by 2
//or three and console.log it

// var numOne = 4;
// var divisibleNumTwo = true;
// var divisibleNumThree = false;

// if ((numOne === 4) && (divisibleNumTwo === true)) {
// 	console.log("That number is divisible by two!");
// } else if ((numOne === 4) && (divisibleNumThree === false)) {
// 	console.log("This number is not divisible by three.");
// } else {
// 	console.log("Try your math again");
// }


//experiment with the order of the conditionals
var numberOne = 6;

if ((numberOne % 2 === 0) && (numberOne % 3 === 0)) {
	console.log("Number is divisible by 2 and 3");
} else if ((numberOne % 2 === 0)) {
	console.log("Number is divisible by 2");
} else if ((numberOne % 2 === 0)) {
	console.log("Number is divisible by 3");
} else {
	console.log("This number is not divisible by two or 3");
}

















