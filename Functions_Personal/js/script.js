// Danielle Johnson | November 21, 2013 | Functions_Personal


var blackFridayPrice = dealFinder (originalPrice, percentDiscount);
	function dealFinder() {
		var finalPrice = originalPrice - (originalPrice * ( Number(percentDiscount)/100));
		return finalPrice;
	}

var originalPrice = prompt("What is the original price of the item? \($xx.xx\)");
var percentDiscount = prompt("What is the percentage off the original price of the item? \(XX\))");

console.log("The sale price of your item is $" + Number(blackFridayPrice) + ".");