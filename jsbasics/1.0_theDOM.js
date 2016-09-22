// document.onload(alert("HEY HEY HEY!!!"));


var hobbiesList = document.getElementById("hobby-list");
console.log(hobbiesList);

var hobbies = document.getElementsByClassName("hobby");
console.log(hobbies[0].innerHTML);
console.log(hobbies[1].innerHTML); //this is an array
console.log(hobbies[2].innerHTML);
console.log(hobbies[3].innerHTML);
console.log(hobbies[4].innerHTML);
console.log(hobbies[5].innerHTML);


var musicList = document.getElementById("music");
console.log("musicList");

var bestWorst = document.getElementsByClassName("musicians")
console.log(bestWorst[0].innerHTML);
console.log(bestWorst[1].innerHTML);
console.log(bestWorst[2].innerHTML);
console.log(bestWorst[3].innerHTML);
console.log(bestWorst[4].innerHTML);
console.log(bestWorst[5].innerHTML);

function favoriteSong() {
	document.getElementById("music").innerHTML = "I Still Believe";
};
favoriteSong();