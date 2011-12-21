var authorsName = "William Doane";

var rollDie = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var getUserGuess = function () {
  return prompt("Guess a number from 1 to 6");
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
  
  num = rollDie();
  guess = getUserGuess();
  guess = convertToDecimal(guess);
  
  if ( isWinner(num, guess) ) {
    alert("You win!");
  } else {
    alert("Sorry. The answer was: " + num);
  }
  
};