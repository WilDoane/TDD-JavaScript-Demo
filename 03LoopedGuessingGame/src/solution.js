// setting up a variable named authorsName with a value of "William Doane"
//
var authorsName = "William Doane";

// setting up a fuction called rollDie that works by using the random function that generates a random number x, where 0 <= x < 1, which is then multiplied by 6 and rounded down. The end result is a number between 0 and 5. Finally, 1 is added so that our range becomes 1 to 6, just like a six sided die.
//
var rollDie = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// setting up a variable that returns a prompt: Guess a number from min to max. In this case min is 1 and max is 6.
//
var getUserGuess = function () {
  return prompt("Guess a number from 1 to 6");
};

// takes the variable getUserGuess and converts it from a string to a decimal integer. 
//
var convertToDecimal = function (str) {
  return parseInt(str, 10);
};

// creates a function called isWinner that checks to see if num and guess are equal to each other. if they are equal then it returns true else it returns false.
//
var isWinner = function (num, guess) {
  if (num === guess) {
   return true;
  } else {
   return false;
  }
};

//creates a fuction called main
//
var main = function () {

//creates two variables one called num and one called guess
//
  var num, guess;
  
//num is set equal to rollDie function
//
  num = rollDie();

//guess is set equal to getUserGuess function
//
  guess = getUserGuess();

//guess is then set equal to convertToDeimal a.k.a the users guess
//
  guess = convertToDecimal(guess);
  
//setting up a while loop that is num and guess are not equal to each other will display an alert message "Try again" and reset the value of guess
//
  while ( !isWinner(num, guess) ) {
    alert("Try again.");
    guess = getUserGuess();
    guess = convertToDecimal(guess);
  }

// else (in this case) if guess and num are equal to each other it will display an alert message "You Win!"
//  
  alert("You win!");
  
};