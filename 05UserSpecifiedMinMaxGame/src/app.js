var authorsName = "William Doane",
    lowest,
    highest;

function rollDie(min, max) {
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
  
  lowest = getUserInput("What is the lowest number I should use?");
  lowest = convertToDecimal(lowest);
  
  highest = getUserInput("What is the highest number I should use?");
  highest = convertToDecimal(highest);
  
  num = rollDie(lowest, highest);
  guess = getUserInput("Guess a number from " + lowest + " to " + highest);
  guess = convertToDecimal(guess);
  
  while ( !isWinner(num, guess) ) {
    alert("Try again.");
    guess = getUserInput("Guess a number from " + lowest + " to " + highest);
    guess = convertToDecimal(guess);
  }

  alert("You win!");
  
}