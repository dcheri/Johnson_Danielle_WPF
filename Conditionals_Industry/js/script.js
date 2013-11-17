// Danielle Johnson | Nov. 16, 2013 | Conditionals_Industry

var newVisitor = prompt("Are you a current customer? \(Please answer yes or no.\)"); //Asks the user if they are a current customer
var signUp = prompt("Would you like to sign up for our newsletter? \(Please answer yes or no.\)"); //Asks the user if they want to sign up for the newsletter

if( signUp === "" || newVisitor === ""){ //If either of the questions are left unanswered, an alert will appear
	alert("You forgot to enter something!"); //Has an alert pop up telling the user they missed an entry
}

(signUp === "yes" && newVisitor === "yes") ? console.log("Awesome! Thanks for being loyal and signing up!") : console.log("Hmm, you should stop by more often."); //Ternary conditional statement if both answers are yes, the user is praised, if not, the user is scolded.