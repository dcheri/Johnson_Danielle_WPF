// Danielle Johnson | November 21, 2013 | Functions_Personal


var blackFridayPrice = dealFinder (prompt("What is the original price of the item? \($xx.xx\)"), prompt("What is the percentage off the original price of the item? \(XX\))"));
	function dealFinder(originalPrice, percentDiscount) {
		var finalPrice = originalPrice - (originalPrice * ( Number(percentDiscount)/100));
		return finalPrice;
	}

console.log("The sale price of your item is $" + Number(blackFridayPrice) + ".");