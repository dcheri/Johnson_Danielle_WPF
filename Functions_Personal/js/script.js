// Danielle Johnson | November 21, 2013 | Functions_Personal

var originalPrice = prompt("What is the original price of the item? \($xx.xx\)");
var percentDiscount = prompt("What is the percentage off the original price of the item? \(XX\))");

var blackFridayPrice = function dealFinder ( originalPrice, percentDiscount) {
	var finalPrice = originalPrice - (originalPrice * ( Number(percentDiscount) / 100 ));
	return finalPrice;
}