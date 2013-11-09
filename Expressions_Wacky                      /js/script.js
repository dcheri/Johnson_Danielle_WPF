// Danielle Johnson | November 7, 2013 | Expressions_Wacky

var poolWidth = prompt("How many feet wide is your swimming pool?"); //Defines the width of the pool by asking the user
var poolLength = prompt("How many feet long is your swimming pool?"); //Defines the length of the pool by asking the user
var poolDepth = prompt("How many feet deep is your pool?"); //Defines the depth of the pool by asking the user
var cokeZero = [0.012532552083359998, 0.01671006944448, 0.025065104166719997]; //An array of standard CokeZero volumes in cubic feet - 12 oz, 16 oz, and 24 oz

var poolVolume = Number(poolWidth) * Number(poolLength) * Number(poolDepth); //Calculates the total volume of the pool
var sodaCans = Number(poolVolume) / cokeZero[1]; //Divides the volume of the pool by one of the three standard soda sizes

console.log("To fill your pool, you\'ll need " + sodaCans + " cans of Coke Zero.") //Prints the final answer out to the console