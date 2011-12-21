var authorsName = "William Doane",
    lowest,
    highest;

var rollDie = function (min, max) {
  return Math.floor(Math.random() * max) + min;
};

var getUserGuess = function (min, max) {
  return prompt("Guess a number from " + min + " to " + max);
};

var getUserLowest = function () {
  return prompt("What is the lowest number I should use?");
};

var getUserHighest = function () {
  return prompt("What is the highest number I should use?");
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
  
  lowest = getUserLowest();
  lowest = convertToDecimal(lowest);
  
  highest = getUserHighest();
  highest = convertToDecimal(highest);
  
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