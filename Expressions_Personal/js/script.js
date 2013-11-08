// Danielle Johnson | November 7, 2013 | Expressions_Personal

var girlCount = prompt("How many girls are you buying gifts for this year?"); //Defines the girlCount variable
var boyCount = prompt("How many boys are you buying gifts for this year?"); //Defines the boyCount variable
var giftCount = prompt("How many gifts are you buying per person?"); //Defines the giftCount variable
var giftPrice = prompt("What is the most you want to spend on each gift?"); //Defines the giftPrice variable

var totalGifts = (girlCount + boyCount) * giftCount; //Calculates total Christmas haul count
var totalPrice = totalGifts * giftPrice; //Calculates total Christmas haul price

console.log("The total gifts in your Christmas haul: " + totalGifts "\n" "The cost of your Christmas haul is " + totalPrice + "dollars."); //Print solutions it out the console
alert("The total gifts in your Christmas haul: " + totalGifts "\n" "The cost of your Christmas haul is " + totalPrice + "dollars."); //Print solutions it out the console
