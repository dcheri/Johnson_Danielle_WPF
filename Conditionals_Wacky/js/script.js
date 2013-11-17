// Danielle Johnson | Nov. 16, 2013 | Conditionals_Wacky

var christmasSpirit = prompt("Do you have the Christmas spirit? \(Please answer yes or no.\)"); //Asks the user if they have Christmas spirit
var yourNaughty = prompt("On a scale of 1-10 \(10 being the worst\) how naughty were you this year?"); //Asks the user how naughty they've been
var yourNice = prompt("On a scale of 1-10 \(1 being an angel\) how nice were you this year?"); //Asks the user how nice they've been
var theResult = (Number(yourNaughty) + Number(yourNice))/2; //Calculates your naughty to nice score

if(theResult < 5){
	console.log("Congratulations, you're on the nice list!");
}else{
	console.log("So Sorry, you're on the naughty list!");
}