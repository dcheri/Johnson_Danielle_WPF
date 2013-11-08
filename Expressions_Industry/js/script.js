// Danielle Johnson | November 7, 2013 | Expressions_Industry

var pageCount = prompt("How many pages are in the document to be printed?"); //Asks the user how many pages they have
var copyCount = prompt("How many copies need to be printed?"); //Asks the user how many copies they need
var pageCost = prompt("How much is being charged per page?"); //Asks the user how much they are being charged for each page

var finalCost = (Number(pageCount) * Number(copyCount)) * Number(pageCost); //Calculates the information taken above

console.log("The cost of your copy job is $" + finalCost); //Prints the total cost to the console