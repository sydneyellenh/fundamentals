//bronze

//how i did my code
function antiqueNameBuy (x,y) {
	var antiqueOne = "Jumpsuit";
	var antiqueTwo = "Typewriter";
	console.log(antiqueOne + " and " + antiqueTwo);
}
antiqueNameBuy();

//J&P code - correct code

function combineWords (wordOne, wordTwo){
	return wordOne + wordTwo;
};

console.log(combineWords("Red ", "Blue"));

//silver

//my code

function calcBillPay (x) {
	var utilitiesBill = 450;
	var creditcardBill = 200;
	var studentLoanBill = 350;

	console.log(utilitiesBill + creditcardBill + studentLoanBill);
}

calcBillPay();

//j&p code - correct code

function monthlyBills(rent, phone, dateNight){
	return (rent, phone, dateNight);
}

console.log(monthlyBills(200, 50, 1000));




//gold

function purchaseSodaCost (x, y, z){
	return x * y + z;
}

console.log(100 + " sodas will cost you $" + purchaseSodaCost(100, .99, 6.93));


//J&P code -- correct code


function calculatePrice(quantity, price, item, tax) {
	// var tax = 0.07%;
	var totalTax = (quantity * price * tax);
	var totalPrice = quantity * price + totalTax;
	return quantity + " " + " will cost you $" + totalPrice;
}
console.log(calculatePrice(132, .88, "cups of coffee", 1.07));