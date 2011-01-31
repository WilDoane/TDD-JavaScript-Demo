var authorsName = "William Doane";

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function main() {
  alert( 'You rolled a ' + rollDie() );
}