// sets up a variable called authorsName with a value of "William Doane"
var authorsName = "William E. J. Doane";

// setting up a fuction called rollDie that works by using the random function that generates a random number x, where 0 <= x < 1, which is then multiplied by 6 and rounded down. The end result is a number between 0 and 5. Finally, 1 is added so that our range becomes 1 to 6, just like a six sided die.
//
var rollDie = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// setting up a function called main that creates an alert box that displays: You rolled a (the value in rollDie).
//
var main = function () {
  alert( 'You rolled a ' + rollDie() );
};