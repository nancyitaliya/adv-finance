function totalCustomerPL (boxDropOffPL,moveInPL,storagePL,deliveryPL) {
	var boxDropOffPL;
	var moveInPL;
	var storagePL;
	var deliveryPL;
	var totalCustomerPL;

	totalCustomerPL = boxDropOffPL + moveInPL + storagePL + deliveryPL;
	console.log ("TotalCustomer PL = " + totalCustomerPL);
}

// MOVE IN P/L
function moveInPL (totalMoveInCost,b) {
	var totalMoveInCost;
	var pickUpFee = b;
	
	moveInPL = b - totalMoveInCost;
	console.log ("moveInPL = " + moveInPL)
	}	

function totalMoveInCost (c,moveInCost) {
		var contractCost = c;
		var moveInCost;
		
		totalMoveInCost = c + moveInCost;
		console.log	 ("totalMoveInCost = " + totalMoveInCost)
		}
	

function moveInCost (e,moveLaborCost,g) {
		var truckCost = e;
		var moveLaborCost;
		var additionalCost = g;

		moveInCost = e + moveLaborCost + g;
		console.log ("MoveInCost = " + moveInCost)
		}
		
function moveLaborCost (h,i,j) {
		var noEmployees = h;
		var laborrate = i;
		var laborhours = j;

		moveLaborCost = (h * i * j)
		console.log ("moveLaborCost = " + moveLaborCost)
		}

moveLaborCost (2,15,1.5);
moveInCost (15.82,moveLaborCost,26.07);
totalMoveInCost (0, moveInCost);
moveInPL (totalMoveInCost, 0);

console.log (" ")

// BOX DROP OFF PL
function boxDropOffPL (totalBoxDropCost,b) {
	var totalBoxDropCost;
	var pickUpFee = b;
	
	boxDropOffPL = b - totalBoxDropCost;
	console.log ("BoxDroppOffPL = " + boxDropOffPL)
	}	

function totalBoxDropCost (c,boxDropCost) {
		var contractCost = c;
		var boxDropCost;
		
		totalBoxDropCost = c + boxDropCost;
		console.log	 ("totalBoxDropCost = " + totalBoxDropCost)
		}

function boxDropCost (e,laborCost,g) {
		var truckCost = e;
		var boxLaborCost;
		var additionalCost = g;

		boxDropCost = e + laborCost + g;
		console.log ("boxDropCost = " + boxDropCost)
		}
		
function boxLaborCost (h,i,j) {
		var noEmployees = h;
		var laborrate = i;
		var laborhours = j;

		boxLaborCost = (h * i * j)
		console.log ("boxLaborCost = " + boxLaborCost)
		}

boxLaborCost ((1/15),15,9);
boxDropCost (0,boxLaborCost,44.23);
totalBoxDropCost (0, boxDropCost);
boxDropOffPL (totalBoxDropCost, 0);

console.log (" ")

// STORAGE OFF PL
function storagePL (totalStorageCost,b) {
	var totalStorageCost;
	var stripeFee = b;
	
	storagePL = totalStorageCost - b;
	console.log ("storagePL = " + storagePL)
	}	

function totalStorageCost (c,netStorageRevenue) {
		var noMonths = c;
		var netStorageRevenue;
		
		totalStorageCost = c * netStorageRevenue;
		console.log	 ("totalStorageCost = " + totalStorageCost)
		}

function netStorageRevenue (monthlyRent,discountTotal) {
		var monthlyRent;
		var discountTotal;

		netStorageRevenue = monthlyRent - discountTotal;
		console.log ("netStorageRevenue = " + netStorageRevenue)
		}

function discountTotal (h,i,monthlyRent) {
		var discountAmt = h;
		var couponAmt = i;

		discountTotal = (h*monthlyRent) + (i*monthlyRent)
		console.log ("discountTotal = " + discountTotal)
		}

function monthlyRent (d,e,f,g) {
		var boxNo = d;
		var itemNo = e;
		var boxPrice = f;
		var itemPrice = g;

		monthlyRent = (d*f) + (e*g)
		console.log ("monthlyRent = " + monthlyRent)
		}

monthlyRent (5,0,12,25);
discountTotal (0,0,monthlyRent);
netStorageRevenue (monthlyRent,discountTotal);
totalStorageCost (4,netStorageRevenue);
storagePL (totalStorageCost, 31.11);

console.log (" ")


//DELIVERY PL

var deliveryPL = -62.63

totalCustomerPL (moveInPL, deliveryPL, storagePL, boxDropOffPL)



