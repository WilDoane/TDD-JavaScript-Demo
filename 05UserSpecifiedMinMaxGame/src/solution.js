var authorsName = "William Doane",
    lowest,
    highest;

function rollDie(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function getUserGuess(min, max) {
  return prompt("Guess a number from " + min + " to " + max);
}

function getUserLowest() {
  return prompt("What is the lowest number I should use?");
}

function getUserHighest() {
  return prompt("What is the highest number I should use?");
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
  
}