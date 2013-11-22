// Danielle Johnson | November 21, 2013 | Functions_Industry


var finalPrice = priceCalculator (prompt("How wide is your poster? \(in inches\)"), prompt("How long is your poster? \(in inches\))"), prompt("Do you need this poster printed in color? \(Please answer true or false.\))")); //Defines the posterPrice variable and gets the users file size and color choice for the calculation
	function priceCalculator (width, length, pricePerSqFt) { //Tells the function called priceCalculator that we'll be passing three variables to it
		if (pricePerSqFt === "true"){ //If the poster is in color, the cost will be $7.25/sqft
			pricePerSqFt = 7.25;
		} else if (pricePerSqFt == ""){ //Makes sure the user answers the question
			alert("Hey! You have to answer this question");
			prompt("Do you need this poster printed in color? \(Please answer true or false.\))")
		} else { //If the poster is not in color, the cost will be $3.20/sqft
			pricePerSqFt = 3.20;
		}

		var posterPrice = ((Number(width) * Number(length))/144) * Number(pricePerSqFt) //This calculates the final cost per poster
		return posterPrice; //This returns the value
	}


console.log("The cost per poster is $" + Number(finalPrice) + "."); //Prints the result to the console

var priceDiscount = function (finalPrice, discount){ //The discount price calculation
	var extraSavings = finalPrice - (finalPrice * ( Number(discount)/100));
	return extraSavings; //Returns the value
}

var discount = "25"; //This defines a percentage discount for the item
console.log("If you use your " + discount + "% discount, your cost per poster will be $" + priceDiscount(finalPrice, discount)); //This prints out the discount information to the console