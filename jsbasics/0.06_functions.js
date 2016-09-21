

//declaration of a function
function helloWorld () {
	console.log ("Hello World!");
}

//Call 
helloWorld ();



function printMyName () {
	console.log("Sydney Ellen Haggard");
}

printMyName();

//Declaration number 2
var name = function () {
 console.log("Sydney");
}
//the call to make it print
name();

//Scope

function addNumbers () {
	var x = 10;
	var y = 10;
	console.log(x + y);
}

addNumbers();


function multiplyNumbers () {
	var a = 8;
	var b = 5;
	console.log(a * b);
}

multiplyNumbers();

//Parameters and Arguments

function randomNumber(x) {
	console.log("The number you entered was: " + x)
} 
randomNumber(89);

//bank pin challenge
function bankPin(wxyz) {
	var pin = 4567;
	if (pin != wxyz){
		console.log("Pin not accepted");
} else {
	console.log("Pin accepted");
}
}

bankPin(4567);


function numAdd (a, b){
	return a + b;
}

console.log(numAdd ("sydney" , "spencer"));
console.log(numAdd(1,2));




/*BRONZE: 
	Write a function with two strings as arguments.
	The function should concatentate the string.*/
/*-----------------------------------------------------------









SILVER:
	Write a function that will help me easily 
	calculate monthly bills.*/












/*-----------------------------------------------------------
GOLD:
Write a function that helps me calculate the cost of my buying 100 sodas
 at $.99 each(or whatever and however many I feel like buying)
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93."
*/











