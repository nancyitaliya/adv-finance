function boxDropOffs (a,b,c) {
	var numboxes = a;
	var priceBox = b;
	var labor = c;
	var dropOffFee = 0;
	var boxDropOffPL;

	boxDropOffPL = dropOffFee - ((numboxes * priceBox) + labor);
	console.log (boxDropOffPL);
}

boxDropOffs (2,1.99,15);

boxDropOffs (3,4,10);

var array = [
	[2,1.99,15,0],
	[4,2.99,15,0]
];

// Second Example (you break down one big function into two different functions)

function boxCost () {
	var numBoxes = 2;
	var priceBox = 1.99;

	boxCost = (numBoxes * priceBox);
	calculateBoxDropOffPL (boxCost);
}

function calculateBoxDropOffPL () {

	var labor = 15;
	var dropOffFee = 0;
	var boxDropOffPl;

	boxDropOffPl = dropOffFee - ( labor + labor);
	console.log (boxDropOffPl);
}

boxCost ();

// Scope (you want to be defining bariables globally rather than locally)

priceBox = 

function boxCost () {
	var numBoxes = 2;
	var priceBox = 1.99;

	boxCost = (numBoxes * priceBox);
	calculateBoxDropOffPL (boxCost);
}