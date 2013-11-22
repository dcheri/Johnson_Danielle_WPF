// Danielle Johnson | November 21, 2013 | Functions_Wacky


var dogFoodCost = foodCalculator (prompt("Is this a leap year? \(Please answer true or false.\)"), prompt("How many cups of food does your dog eat per day? \(XX\)"), prompt("Estimate how much each cup of food costs. \($X.XX\))")); //Defines the dog food cost variable and gets the users input for the type of year, how many cups are fed each day, and how much each cup costs
	function foodCalculator (daysPerYear, cupsPerDay, costPerCup) { //Tells the function called foodCalculator that we'll be passing three variables to it
		(daysPerYear === "true") ? daysPerYear = 366 : daysPerYear = 365; //This determines if the current year is a leap year or not
		var annualPrice = Number(daysPerYear) * Number(cupsPerDay) * Number(costPerCup); //The discount price calculation
		return annualPrice; //Returns the value
	}

console.log("The cost to feed your dog for a year is $" + Number(dogFoodCost) + "."); //Prints the result to the console
