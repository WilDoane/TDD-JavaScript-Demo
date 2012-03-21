/*global YUI, app, authorsName */
/*jslint onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true */
// Create new YUI instance, and populate it with the required modules
YUI().use('node', 'console', 'test', function(Y) {
 
  var unitTests, reporter;
   
  //
  // SUPPORT FUNCTIONS
  //
  var isDeclared = function (objName) {
    return ( window.hasOwnProperty(objName) ) ? true : false;
  };

  // Should always be called as the second part of && so that eval(objName) 
  // isn't attempted on undeclared ojbects
  //
  // if ( isDeclared("x") && isDefined("x") )
  //
  var isDefined = function (objName) {
    return ( "undefined" !== typeof eval(objName) ) ? true : false;
  };

  var authorsNameExists = function () {
    return ( isDeclared("authorsName") && isDefined("authorsName") ) ? true : false;
  };

  unitTests = new Y.Test.Case({
 
    name: "Testing Object Oriented Programming implementation",

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
     
     "test that person is an object" :
     function () {
      Y.Assert.isObject( person, "You need to define a new Object called person declared in app.js located in the src/ directory" );
     },
     
     "test that person has a first name attribute" :
     function () {
      Y.Assert.isString( person.firstName, "You must define firstName as an attribute to the object person. Attributions should be defined as strings" );
     },
     
     "test that person has a last name attribute" :
     function () {
      Y.Assert.isString( person.lastName, "You must define lastName as an attribute to the object person. Attributions should be defined as strings" );
     },
     
     

	

  });


  var logResultsToServer = function (data){
    var testResults, serverReporter;
    
    testResults = Y.Test.Runner.getResults();
    serverReporter = new Y.Test.Reporter("http://nwghost.com/tdd-collector.php", Y.Test.Format.TAP);
    serverReporter.addField("authorsName", authorsNameExists() ? authorsName : "UNKNOWN AUTHOR");
    serverReporter.report(testResults);
  };

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
