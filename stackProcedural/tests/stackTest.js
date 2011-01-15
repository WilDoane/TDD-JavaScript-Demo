// Create new YUI instance, and populate it with the required modules
YUI().use('node', 'console', 'test', function(Y) {
 
  // Test available, and ready for use.

  var unitTests = new Y.Test.Case({
 
    name: "Testing procedural stack implementation",

    setUp :
    function () {
      stackInitExists() ? stackInit() : null;
    },

    tearDown :
    function () {
    },

    "test that a global variable named authorsName exists" :
    function () {
      Y.assert( authorsNameExists(), "You need a global variable named authorsName defined in stack.js located in the src folder" );
    },

    "test that the variable authorsName follows the proper format" :
    function () {
      var re = /^[A-Za-z\'\-]+\s+[A-Za-z\'\-]+/;
      
      var sourceString = authorsNameExists() ? authorsName : "";
      
      Y.Assert.isNotNull( sourceString.match(re), "The variable authorsName must have a value of 'Yourfirstname Yourlastname' (insert your own name)" );
    },

    "test that function stackInit is declared" :
    function () {
      Y.assert( "function" === typeof(stackInit), "You need a function that will allow users of your code to initialize a new stack. This function must be named stackInit defined in stack.js located in the src folder" );
      Y.Assert.areEqual( 0, stackInit.length, "stackInit must have no input parameter" );
     },

    "test that function stackSize is declared" : 
    function () {
      Y.assert( "function" === typeof(stackSize), "You need a function named stackSize that will allow users of your code to determine how many elements are in the stack" );
      Y.Assert.areEqual( 0, stackSize.length, "stackSize must have no input parameter" );
    },

    "test that stackSize returns a numeric value" : 
    function () {
      Y.Assert.isNumber( stackSize(), "stackSize() should return a number" );
    },

    "test that a new stack is of length 0" : 
    function () {
      Y.Assert.areEqual( 0, stackSize(), "If no elements have been added to the stack, stackSize() should return 0" );
    },

    "test that function stackAdd is declared" :
    function () {
      Y.assert( "function" === typeof(stackAdd), "You need a function named stackAdd that allows users of your code to add elements to the stack" );
      Y.Assert.areEqual( 1, stackAdd.length, "stackAdd must have one input parameter, the element to add" );
    },

    "test that a stack with 1 element is of length 1" :
    function () {
      stackAdd("a");

      Y.Assert.areEqual( 1, stackSize(), "If a stack has 1 element, stackSize() should return 1" );
    },

    "test that a stack with 3 elements is of length 3" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( 3, stackSize(), "If a stack has 3 elements, stackSize() should return 3" );
    },

    "test that function stackGet is declared" :
    function () {
      Y.assert( "function" === typeof(stackGet), "You need a function named stackGet that allows users of your code to get the last element added to the stack" );
      Y.Assert.areEqual( 0, stackGet.length, "stackGet must have no input parameter" );
    },

    "test that stackGet returns the last element added" :
    function () {
      stackAdd("a");
      stackAdd("b");

      Y.Assert.areEqual( "b", stackGet(), "Last element added should be returned by stackGet()" );
    },

    "test that stackGet removes the returned element from the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( "c", stackGet(), "Last element added should be returned by stackGet()" );
      Y.Assert.areEqual( "b", stackGet(), "next to last element added should be returned by a second stackGet()" );
      Y.Assert.areEqual( "a", stackGet(), "first element added should be returned by a third stackGet()" );
    },

    "test that stacks can contain 2 distinct elements with the same value" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("a");

      Y.Assert.areEqual( "a", stackGet(), "First call to stackGet() should return last element added" );
      Y.Assert.areEqual( "b", stackGet(), "Second call to stackGet() should return second to last element added" );
      Y.Assert.areEqual( "a", stackGet(), "Third call to stackGet() should return third to last element added" );
    },

    "test that stacks can contain string, number, boolean, and object elements and preserve data types" :
    function () {
      stackAdd("a");
      stackAdd(1);
      stackAdd(true);
      stackAdd(false);
      var objElement = {};
      stackAdd( objElement );
      
      var result = stackGet();
      Y.Assert.areEqual( objElement, result, "element should be an empty object {}" );
      Y.Assert.areEqual( "object", typeof(result), "element should be of type object" );

      result = stackGet();
      Y.Assert.areEqual( false, result, "element should be the boolean value false" );
      Y.Assert.areEqual( "boolean", typeof(result), "element should be of type boolean" );

      result = stackGet();
      Y.Assert.areEqual( true, result, "element should be the boolean value true" );
      Y.Assert.areEqual( "boolean", typeof(result), "element should be of type boolean" );

      result = stackGet();
      Y.Assert.areEqual( 1, result, "element should be the number value 1" );
      Y.Assert.areEqual( "number", typeof(result), "element should be of type number" );

      result = stackGet();
      Y.Assert.areEqual( "a", result, "element should be the boolean value true" );
      Y.Assert.areEqual( "string", typeof(result), "element should be of type string" );
      
     },

    "test that function stackPeek is declared" :
    function () {
      Y.assert( "function" === typeof(stackPeek), "You need a function named stackPeek that allows users of your code to non-destructively access any element in the stack" );
      Y.Assert.areEqual( 1, stackPeek.length, "stackPeek must have one (optional) input parameter, the index of the element to be returned" );
    },

    "test that stackPeek does not remove elements from the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( "c", stackPeek(), "stackPeek() should return the last element added without removing it from the stack" );
      Y.Assert.areEqual( "c", stackPeek(), "stackPeek() should return the last element added without removing it from the stack" );
      Y.Assert.areEqual( "c", stackPeek(), "stackPeek() should return the last element added without removing it from the stack" );
    },

    "test that stackPeek() and stackPeek(int) return undefined given an empty stack" :
    function () {
      Y.Assert.areEqual( undefined, stackPeek(), "stackPeek() should return undefined for an empty stack" );
      Y.Assert.areEqual( undefined, stackPeek(5), "stackPeek(int) should return undefined for an empty stack" );
    },

    "test that stackPeek allows random access to elements of the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( "a", stackPeek(0), "0th element should be 'a'" );
      Y.Assert.areEqual( "b", stackPeek(1), "1th element should be 'b'" );
      Y.Assert.areEqual( "c", stackPeek(2), "2th element should be 'c'" );
      Y.Assert.areEqual( "a", stackPeek(0), "0th element should be 'a'" );
    },

    "test that function stackContains is declared" :
    function () {
      Y.assert( "function" === typeof(stackContains), "You need a function named stackContains that allows users of your code to determine whether a given element occurs in the stack" );
      Y.Assert.areEqual( 1, stackContains.length, "stackContains must have one input parameter, the element for which to search" );
    },

    "test that stackGet returns undefined given an empty stack" :
    function () {
      Y.Assert.areEqual( undefined, stackGet(), "stackGet() should return undefined for an empty stack" );
    },

    "test that stackContains returns false, if the stack is empty" :
    function () {
      Y.Assert.areEqual( false, stackContains("a"), "'a' should not be in the stack" );
      Y.Assert.areEqual( false, stackContains("b"), "'b' should not be in the stack" );
      Y.Assert.areEqual( false, stackContains("c"), "'c' should not be in the stack" );
      Y.Assert.areEqual( false, stackContains(1), "1 should not be in the stack" );
      Y.Assert.areEqual( false, stackContains(2), "2 should not be in the stack" );
      Y.Assert.areEqual( false, stackContains(3), "3 should not be in the stack" );
    },

    "test that stackContains returns true, if the sought element is in the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");
      stackAdd(1);
      stackAdd(2);
      stackAdd(3);

      Y.Assert.areEqual( true, stackContains("a"), "'a' should be in the stack" );
      Y.Assert.areEqual( true, stackContains("b"), "'b' should be in the stack" );
      Y.Assert.areEqual( true, stackContains("c"), "'c' should be in the stack" );
      Y.Assert.areEqual( true, stackContains(1), "1 should be in the stack" );
      Y.Assert.areEqual( true, stackContains(2), "2 should be in the stack" );
      Y.Assert.areEqual( true, stackContains(3), "3 should be in the stack" );
    },

    "test that stackContains returns false, if the sought element is not in the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");
      stackAdd(1);
      stackAdd(2);
      stackAdd(3);

      Y.Assert.areEqual( false, stackContains(""), "the empty string should not be in the stack" );
      Y.Assert.areEqual( false, stackContains("z"), "'z' should not be in the stack" );
      Y.Assert.areEqual( false, stackContains(4), "4 should not be in the stack" );
      Y.Assert.areEqual( false, stackContains(undefined), "undefined should not be in the stack" );
      Y.Assert.areEqual( false, stackContains(null), "null should not be in the stack" );
    },

  });


  var r = new Y.Console({
      newestOnTop: false
  });  

  r.render("#testReport");
  
  Y.Test.Runner.add(unitTests);

  Y.Test.Runner.subscribe(Y.Test.Runner.COMPLETE_EVENT, logResultsToServer);
  
  Y.Test.Runner.run();
  
  function logResultsToServer(data){
    //get results
    var testResults = Y.Test.Runner.getResults();
  
    var reporter = new Y.Test.Reporter("http://nwghost.com/tdd-collector.php", Y.Test.Format.TAP);
  
    reporter.addField("authorsName", authorsNameExists() ? authorsName : "UNKNOWN AUTHOR");
    
    reporter.report(testResults);
    //reporter.destroy();
  }
  
  function authorsNameExists() {
    return ( "string" === typeof(authorsName) ) ? true : false;
  }

  function stackInitExists() {
    return ( "function" === typeof(stackInit) ) ? true : false;
  }
  
 });
