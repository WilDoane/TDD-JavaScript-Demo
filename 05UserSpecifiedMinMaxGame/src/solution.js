// setting up a variable named authorsName with a value of "William Doane"
//
var authorsName = "William Doane",
    lowest,
    highest;

// setting up a fuction called rollDie that works by using the random function that generates a random number x, where 0 <= x < 1, which is then multiplied by max and rounded down. The end result is a number between min - 1 and max - 1. Finally, 1 is added so that our range becomes min to max, just like a die with max number of sides.
//
var rollDie = function (min, max) {
  return Math.floor(Math.random() * max) + min;
};

// setting up a variable that returns a prompt: Guess a number from min to max. In this case min is 1 and max is 6.
//
var getUserGuess = function (min, max) {
  return prompt("Guess a number from " + min + " to " + max);
};

// setting up a variable that returns a prompt: Assign a minimum value to the rollDie function.
//
var getUserLowest = function () {
  return prompt("What is the lowest number I should use?");
};

// setting up a variable that returns a prompt: Assign a maximum value to the rollDie function.
//
var getUserHighest = function () {
  return prompt("What is the highest number I should use?");
};

// takes the variable getUserGuess and converts it from a string to a decimal integer. 
//
var convertToDecimal = function (str) {
  return parseInt(str, 10);
};

// creates a function called isWinner that checks to see if num and guess are equal to each other. if they are then it returns true else it returns false.
//
var isWinner = function (num, guess) {
  if (num === guess) {
   return true;
  } else {
   return false;
  }
};

// creates a function called main
//
var main = function () {

// creates two variables one called num and one called guess
//
  var num, guess;

// setting the variable lowest to the value of the variable getUserLowest.
//  
  lowest = getUserLowest();

// converts the value of lowest from a string to a decimal number.
//
  lowest = convertToDecimal(lowest);

// setting the variable highest to the value of the variable getUserHighest.
//
  highest = getUserHighest();

// converts the value of highest from a string to a decimal number.
//
  highest = convertToDecimal(highest);

// num is equal to rollDie function
//
  num = rollDie(lowest, highest);

// guess is set equal to getUserGuess function
//
  guess = getUserGuess(lowest, highest);

// converts the value of guess from a string to a decimal number.
//
  guess = convertToDecimal(guess);

// setting up a while loop that if num and guess are not equal to each other will display an alert message "Try again" and reset the value of guess
// 
  while ( !isWinner(num, guess) ) {
    alert("Try again.");
    guess = getUserGuess(lowest, highest);
    guess = convertToDecimal(guess);
  }

// else (in this case) if guess and num are equal to each other it will display an alert message "You Win!"
  alert("You win!");
  
};