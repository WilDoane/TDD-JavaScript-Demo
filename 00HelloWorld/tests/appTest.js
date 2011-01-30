/*global YUI, app, authorsName */
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
 
    name: "Testing Hello World implementation",

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

    "test function greetings" :
    function () {
      Y.Assert.areEqual( "function", typeof greetings, "You need to define a function that will allow users of your code to get the greeting string. This function must be named greetings, and defined in app.js located in the src/ directory" );
      Y.Assert.areEqual( 0, greetings.length, "this function must have no input parameter" );
     },
     
     "test that greetings returns a string value" : 
     function () {
       Y.Assert.isString( greetings(), "function greetings should return a string" );
     },

     "test that greetings returns the correct string" : 
     function () {
       Y.Assert.areEqual( "Hello, " + authorsName, greetings(), "function greetings should return the proper greeting" );
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
