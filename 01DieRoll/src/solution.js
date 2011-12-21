var authorsName = "William Doane";

var rollDie = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var main = function () {
  alert( 'You rolled a ' + rollDie() );
};