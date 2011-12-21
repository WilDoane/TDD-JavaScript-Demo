var authorsName = "William Doane",
    lowest = 1,
    highest = 6;

var rollDie = function (min, max) {
  return Math.floor(Math.random() * max) + min;
};

var getUserGuess = function (min, max) {
  return prompt("Guess a number from " + min + " to " + max);
};

var convertToDecimal = function (str) {
  return parseInt(str, 10);
};

var isWinner = function (num, guess) {
  if (num === guess) {
   return true;
  } else {
   return false;
  }
};

var main = function () {
  var num, guess;
  
  num = rollDie(lowest, highest);
  guess = getUserGuess(lowest, highest);
  guess = convertToDecimal(guess);
  
  while ( !isWinner(num, guess) ) {
    alert("Try again.");
    guess = getUserGuess(lowest, highest);
    guess = convertToDecimal(guess);
  }

  alert("You win!");
  
};