// Danielle Johnson | Nov. 16, 2013 | Conditionals_Industry

var newVisitor = prompt("Are you a current customer? \(Please answer yes or no.\)");
var signUp = prompt("Would you like to sign up for our newsletter? \(Please answer yes or no.\)");

if( signUp === "" || newVisitor === ""){
	alert("You forgot to enter something!");
}

(signUp === "yes" && newVisitor === "yes") ? console.log("Awesome! Thanks for being loyal and signing up!") : console.log("Hmm, you should stop by more often.");