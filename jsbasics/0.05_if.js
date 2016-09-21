var isOn = true;
var isHot = false;

if(isOn) {
	console.log("Man, that light is really bright.");
}

if (isOn === true) {
	console.log("The mouthbreather works at Mutiny.");
}

if (isOn && isHot) {
	console.log("Wow, it is incredibly hot!  Kill the spotlights!")
}

if (isOn ||  isHot){
	console.log("The walkers are near.")
}

if (!isHot){
	console.log("You can't just push him out the window!");
}