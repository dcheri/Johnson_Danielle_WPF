// Danielle Johnson | November 15, 2013 | Conditionals_Personal

var schoolDay = true; //Is today a school day? - Defines whether today is a weekday or weekend
var jacksBehavior = prompt("Did Jack behave in school today? \(Please answer yes or no\)"); //Defines jacks behavior based on what the user enters
var jillsBehavior = prompt("Did Jill behave in school today? \(Please answer yes or no\)"); //Defines jills behavior based on what the user enters
//var iceCreamParty = console.log("Yay! We're going to have ice cream!"); //Let's us know we're having ice cream after school by printing to the console
//var sorryCharlie = console.log("Maybe next time, we\'re going home."); //Let's us know we're headed home after school by printing to the console

if(jacksBehavior === "yes" && jillsBehavior === "yes"){ //If Jack and Jill BOTH have good behavion, then we'll go have ice cream
	console.log("Yay! We're going to have ice cream!"); //Let's us know we're having ice cream after school by printing to the console
}else{
	console.log("Maybe next time, we\'re going home."); //Let's us know we're headed home after school by printing to the console
}