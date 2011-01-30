var authorsName = "William Doane",
    lowest = 1,
    highest = 6;

function rollDie(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function getUserGuess(min, max) {
  return prompt("Guess a number from " + min + " to " + max);
}

function convertToDecimal(str) {
  return parseInt(str, 10);
}

function isWinner(num, guess) {
  if (num === guess) {
   return true;
  } else {
   return false;
  }
}

function main() {
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
  
}