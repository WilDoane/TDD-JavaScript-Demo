var authorsName = "William Doane";

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function getUserInput() {
  return prompt("Guess a number from 1 to 6");
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
  guess = getUserInput();
  guess = convertToDecimal(guess);
  
  while ( !isWinner(num, guess) ) {
    alert("Try again.");
    guess = getUserInput();
    guess = convertToDecimal(guess);
  }

  alert("You win!");
  
}