// Danielle Johnson | November 21, 2013 | Functions_Wacky


var dogFoodCost = dealFinder (prompt("What is the original price of the item? \($xx.xx\)"), prompt("What is the percentage off the original price of the item? \(XX\))")); //Defines the black Friday price variable and gets the users price and discount amount for the calculation
	function dealFinder(daysPerYear, cupsPerDay, costPerCup) { //Tells the function called dealFinder that we'll be passing two variables to it
		var finalPrice = originalPrice - (originalPrice * ( Number(percentDiscount)/100)); //The discount price calculation
		return finalPrice; //Returns the value
	}

console.log("The sale price of your item is $" + Number(blackFridayPrice) + "."); //Prints the result to the console