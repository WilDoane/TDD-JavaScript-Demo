var authorsName = "William Doane",
    min = 1,
    max = 6;

function rollDie() {
  return Math.floor(Math.random() * max) + min;
}

function getUserInput(str) {
  return prompt(str);
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
  
  num = rollDie();
  guess = getUserInput("Guess a number from " + min + " to " + max);
  guess = convertToDecimal(guess);
  
  while ( !isWinner(num, guess) ) {
    alert("Try again.");
    guess = getUserInput("Guess a number from " + min + " to " + max);
    guess = convertToDecimal(guess);
  }

  alert("You win!");
  
}