/*global YUI, app, authorsName, rollDie */
/*jslint onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true */
// Create new YUI instance, and populate it with the required modules
YUI().use('node', 'console', 'test', function(Y) {
 
  var unitTests, reporter;
  
  //
  // SUPPORT FUNCTIONS
  //
  function isDeclared(objName) {
    return ( window.hasOwnProperty(objName) ) ? true : false;
  }

  // Should always be called as the second part of && so that eval(objName) 
  // isn't attempted on undeclared ojbects
  //
  // if ( isDeclared("x") && isDefined("x") )
  //
  function isDefined(objName) {
    return ( "undefined" !== typeof eval(objName) ) ? true : false;
  }

  function authorsNameExists() {
    return ( isDeclared("authorsName") && isDefined("authorsName") ) ? true : false;
  }

  unitTests = new Y.Test.Case({
 
    name: "Testing Die Roll implementation",

    setUp :
    function () {
    },

    tearDown :
    function () {
    },

    "test that a global variable named authorsName is declared" :
    function () {
      Y.assert( isDeclared("authorsName"), "You need a global variable named authorsName declared in app.js located in the src/ directory" );
    },

    "test that the variable authorsName follows the proper format" :
    function () {
      var re, sourceString;
      
      re = /^[A-Za-z\'\-]+\s+[A-Za-z\'\-]+/;
      sourceString = authorsNameExists() ? authorsName : "";
      
      Y.Assert.isNotNull( sourceString.match(re), "The variable authorsName must have a value of 'Yourfirstname Yourlastname' (insert your own name)" );
    },

    "test that function rollDie is declared" :
    function () {
      Y.Assert.areEqual( "function", typeof rollDie, "You need a function that will allow users of your code to roll a six-sided die. This function must be named rollDie, and defined in app.js located in the src/ directory" );
      Y.Assert.areEqual( 0, rollDie.length, "function rollDie must have no input parameter" );
     },
     
     "test that rollDie returns a numeric value" : 
     function () {
       Y.Assert.isNumber( rollDie(), "function rollDie should return a number" );
     },    

     "test that rollDie returns an integer numeric value" : 
     function () {
       var i, result;
       for(i = 0; i < 10; i = i + 1) {
         result = rollDie();
         Y.Assert.areEqual( Math.floor(result), result, "function rollDie should return an integer (whole number)" );
       }
     },    

    "test that the highest rolled value is 6" :
    function () {
      var i, max = 0;
      for(i = 0; i < 100000; i = i + 1) {
        max = Math.max(max, rollDie());
      }
      Y.Assert.areEqual( 6, max, "The maximum possible die roll should be 6" );
    },

    "test that the lowest rolled value is 1" :
    function () {
      var i, min = 99;
      for(i = 0; i < 100000; i = i + 1) {
        min = Math.min(min, rollDie());
      }
      Y.Assert.areEqual( 1, min, "The minimum possible die roll should be 1" );
    },


    "test that function main is declared" :
    function () {
      Y.Assert.areEqual( "function", typeof main, "You need a function that will allow users to execute your code" );
      Y.Assert.areEqual( 0, rollDie.length, "function main must have no input parameter" );
    },

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
  if ( !( isDeclared("phoneHome") && (phoneHome === false) ) ) {
    Y.Test.Runner.subscribe(Y.Test.Runner.COMPLETE_EVENT, logResultsToServer);
  } 
  Y.Test.Runner.run();
  
 });
