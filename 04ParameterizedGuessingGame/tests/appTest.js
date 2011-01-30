/*global YUI, authorsName, rollDie, main, convertToDecimal, getUserGuess, isWinner, lowest, highest */
/*jslint onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true */
// Create new YUI instance, and populate it with the required modules
YUI().use('node', 'console', 'test', function(Y) {
 
  var unitTests, reporter;
  
  //
  // SUPPORT FUNCTIONS
  //
  function authorsNameExists() {
    return ( "string" === typeof(authorsName) ) ? true : false;
  }

  unitTests = new Y.Test.Case({
 
    name: "Testing Parameterized Guessing Game implementation",

    setUp :
    function () {
    },

    tearDown :
    function () {
    },


    "test that a global variable named authorsName exists" :
    function () {
      Y.assert( authorsNameExists(), "You need a global variable named authorsName defined in app.js located in the src folder" );
    },

    "test that the variable authorsName follows the proper format" :
    function () {
      var re, sourceString;
      
      re = /^[A-Za-z\'\-]+\s+[A-Za-z\'\-]+/;
      sourceString = authorsNameExists() ? authorsName : "";
      
      Y.Assert.isNotNull( sourceString.match(re), "The variable authorsName must have a value of 'Yourfirstname Yourlastname' (insert your own name)" );
    },

    "test that a global variable named lowest is properly defined" :
    function () {
      Y.Assert.areEqual( "number", typeof lowest, "You need a global variable named lowest that defines the minimum number possible in the game" );
      Y.Assert.areEqual( parseInt(lowest), lowest, "the variable lowest should be an integer" );
    },

    "test that a global variable named highest is properly defined" :
    function () {
      Y.Assert.areEqual( "number", typeof highest, "You need a global variable named highest that defines the maximum number possible in the game" );
      Y.Assert.areEqual( parseInt(highest), highest, "the variable highest should be an integer" );
    },

    "test that function rollDie is declared" :
    function () {
      Y.Assert.areEqual( "function", typeof rollDie, "You need a function that will allow users of your code to roll a six-sided die. This function must be named rollDie, and defined in app.js located in the src folder" );
      Y.Assert.areEqual( 2, rollDie.length, "function rollDie must have two input parameters: the min and the max number to return" );
     },
     
     "test that rollDie returns a numeric value" : 
     function () {
       Y.Assert.isNumber( rollDie(lowest, highest), "function rollDie should return a number" );
     },    

     "test that rollDie returns an integer numeric value" : 
     function () {
       var i, result;
       for(i = 0; i < 10; i = i + 1) {
         result = rollDie(lowest, highest);
         Y.Assert.areEqual( Math.floor(result), result, "function rollDie should return an integer (whole number)" );
       }
     },    

    "test that the highest rolled value is 6" :
    function () {
      var i, max = 0;
      for(i = 0; i < 100000; i = i + 1) {
        max = Math.max(max, rollDie(lowest, highest));
      }
      Y.Assert.areEqual( 6, max, "The maximimum possible die roll should be 6" );
    },

    "test that the lowest rolled value is 1" :
    function () {
      var i, min = 99;
      for(i = 0; i < 100000; i = i + 1) {
        min = Math.min(min, rollDie(lowest, highest));
      }
      Y.Assert.areEqual( 1, min, "The minimum possible die roll should be 1" );
    },


    "test that function getUserGuess is declared" :
    function () {
      Y.Assert.areEqual( "function", typeof getUserGuess, "You need a function that will prompt the user for input." );
      Y.Assert.areEqual( 2, getUserGuess.length, "function getUserGuess must now have TWO input parameters: the minimum and maximumnumbers to display to the uset" );
     }, 


    "test that function convertToDecimal is declared" :
    function () {
      Y.Assert.areEqual( "function", typeof convertToDecimal, "You need a function that will convert a string to a decimal." );
      Y.Assert.areEqual( 1, convertToDecimal.length, "function convertToDecimal must have one input parameter" );
     },
     
     "test that convertToDecimal returns a numeric value" : 
     function () {
       Y.Assert.isNumber( convertToDecimal("1"), "function convertToDecimal should return a number" );
     },    

     "test that convertToDecimal returns an integer numeric value" : 
     function () {
       var i, result;
       for(i = 0; i <= 10; i = i + 1) {
         result = convertToDecimal("0" + i);
         Y.Assert.areEqual( Math.floor(result), result, "function convertToDecimal should return an integer (whole number)" );
       }
     },    

    "test that convertToDecimal properly handles strings such as 08" :
    function () {
      Y.Assert.areEqual( 8, convertToDecimal("08"), "function convertToDecimal should treat all valid string inputs as decimal numbers" );
    },

    "test that convertToDecimal returns NaN for non-numeric string input" :
    function () {
      Y.Assert.isNaN( convertToDecimal(null), "if the user cancels the input prompt, convertToDecimal should return NaN" );
      Y.Assert.isNaN( convertToDecimal(""), "if the user types nothing, convertToDecimal should return NaN" );
      Y.Assert.isNaN( convertToDecimal("hello"), "if the user types a text string, convertToDecimal should return NaN" );
    },


    "test that function isWinner is declared" :
    function () {
      Y.Assert.areEqual( "function", typeof isWinner, "You need a function that will determine whether the user is a winner" );
      Y.Assert.areEqual( 2, isWinner.length, "function isWinner must have two input parameters" );
     },
     
     "test that isWinner returns true when the user's guess matches the random number" : 
     function () {
       Y.Assert.isTrue( isWinner(1, 1), "function isWinner should return true" );
     },    

     "test that isWinner returns false when the user's guess does not match the random number" : 
     function () {
       Y.Assert.isFalse( isWinner(1, 2), "function isWinner should return false" );
       Y.Assert.isFalse( isWinner(2, 1), "function isWinner should return false" );
     },

     "test that isWinner returns false when the user's input is not a number" : 
     function () {
       Y.Assert.isFalse( isWinner(1, NaN), "function isWinner should return false" );
     }

  });


  function logResultsToServer(data){
    var testResults, serverReporter;
    
    testResults = Y.Test.Runner.getResults();
    serverReporter = new Y.Test.Reporter("http://nwghost.com/tdd-collector.php", Y.Test.Format.TAP);
    serverReporter.addField("authorsName", authorsNameExists() ? authorsName : "UNKNOWN AUTHOR");
    serverReporter.report(testResults);
  }

  reporter = new Y.Console({
      newestOnTop: false
  });  

  reporter.render("#testReport");
  Y.Test.Runner.add(unitTests);
  Y.Test.Runner.subscribe(Y.Test.Runner.COMPLETE_EVENT, logResultsToServer);
  Y.Test.Runner.run();
  
 });
