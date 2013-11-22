// Danielle Johnson | November 21, 2013 | Functions_Personal

var blackFridayPrice = function dealFinder ( originalPrice, percentDiscount) {
	var finalPrice = originalPrice - (originalPrice * ( Number(percentDiscount) / 100 ));
	return finalPrice;
}