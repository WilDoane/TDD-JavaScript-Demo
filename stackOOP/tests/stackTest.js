// Create new YUI instance, and populate it with the required modules
YUI().use('node', 'console', 'test', function(Y) {
 
  // Test available, and ready for use.

  var unitTests = new Y.Test.Case({
 
    name: "Testing object oriented stack implementation",

    setUp :
    function () {
      stackInitExists() ? stack.init() : null;
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

    "test that function init is declared in the stack object" :
    function () {
      Y.assert( "function" === typeof(stack.init), "You need a function that will allow users of your code to initialize a new stack. This function must be in a stack object, named init, and defined in stack.js located in the src folder" );
      Y.Assert.areEqual( 0, stack.init.length, "init must have no input parameter" );
     },

    "test that function size is declared in the stack object" : 
    function () {
      Y.assert( "function" === typeof(stack.size), "You need a function named stackSize that will allow users of your code to determine how many elements are in the stack" );
      Y.Assert.areEqual( 0, stack.size.length, "stackSize must have no input parameter" );
    },

    "test that stackSize returns a numeric value" : 
    function () {
      Y.Assert.isNumber( stack.size(), "stack.size() should return a number" );
    },

    "test that a new stack is of length 0" : 
    function () {
      Y.Assert.areEqual( 0, stack.size(), "If no elements have been added to the stack, stack.size() should return 0" );
    },

    "test that function push is declared in the stack object" :
    function () {
      Y.assert( "function" === typeof(stack.push), "You need a function named stack.push that allows users of your code to add elements to the stack" );
      Y.Assert.areEqual( 1, stack.push.length, "stack.push must have one input parameter, the element to add" );
    },

    "test that a stack with 1 element is of length 1" :
    function () {
      stack.push("a");

      Y.Assert.areEqual( 1, stack.size(), "If a stack has 1 element, stack.size() should return 1" );
    },

    "test that a stack with 3 elements is of length 3" :
    function () {
      stack.push("a");
      stack.push("b");
      stack.push("c");

      Y.Assert.areEqual( 3, stack.size(), "If a stack has 3 elements, stack.size() should return 3" );
    },

    "test that function pop is declared in the stack object" :
    function () {
      Y.assert( "function" === typeof(stack.pop), "You need a function named stack.pop that allows users of your code to get the last element added to the stack" );
      Y.Assert.areEqual( 0, stack.pop.length, "stack.pop must have no input parameter" );
    },

    "test that pop returns the last element added" :
    function () {
      stack.push("a");
      stack.push("b");

      Y.Assert.areEqual( "b", stack.pop(), "Last element added should be returned by stack.pop()" );
    },

    "test that pop removes the returned element from the stack" :
    function () {
      stack.push("a");
      stack.push("b");
      stack.push("c");

      Y.Assert.areEqual( "c", stack.pop(), "Last element added should be returned by stack.pop()" );
      Y.Assert.areEqual( "b", stack.pop(), "next to last element added should be returned by a second stack.pop()" );
      Y.Assert.areEqual( "a", stack.pop(), "first element added should be returned by a third stack.pop()" );
    },

    "test that stacks can contain 2 distinct elements with the same value" :
    function () {
      stack.push("a");
      stack.push("b");
      stack.push("a");

      Y.Assert.areEqual( "a", stack.pop(), "First call to stack.pop() should return last element added" );
      Y.Assert.areEqual( "b", stack.pop(), "Second call to stack.pop() should return second to last element added" );
      Y.Assert.areEqual( "a", stack.pop(), "Third call to stack.pop() should return third to last element added" );
    },

    "test that stacks can contain string, number, boolean, and object elements and preserve data types" :
    function () {
      stack.push("a");
      stack.push(1);
      stack.push(true);
      stack.push(false);
      var objElement = {};
      stack.push( objElement );
      
      var result = stack.pop();
      Y.Assert.areEqual( objElement, result, "element should be an empty object {}" );
      Y.Assert.areEqual( "object", typeof(result), "element should be of type object" );

      result = stack.pop();
      Y.Assert.areEqual( false, result, "element should be the boolean value false" );
      Y.Assert.areEqual( "boolean", typeof(result), "element should be of type boolean" );

      result = stack.pop();
      Y.Assert.areEqual( true, result, "element should be the boolean value true" );
      Y.Assert.areEqual( "boolean", typeof(result), "element should be of type boolean" );

      result = stack.pop();
      Y.Assert.areEqual( 1, result, "element should be the number value 1" );
      Y.Assert.areEqual( "number", typeof(result), "element should be of type number" );

      result = stack.pop();
      Y.Assert.areEqual( "a", result, "element should be the boolean value true" );
      Y.Assert.areEqual( "string", typeof(result), "element should be of type string" );
      
     },

    "test that function peek is declared in the stack object" :
    function () {
      Y.assert( "function" === typeof(stack.peek), "You need a function named stack.peek that allows users of your code to non-destructively access any element in the stack" );
      Y.Assert.areEqual( 1, stack.peek.length, "stack.peek must have one (optional) input parameter, the index of the element to be returned" );
    },

    "test that stack.peek does not remove elements from the stack" :
    function () {
      stack.push("a");
      stack.push("b");
      stack.push("c");

      Y.Assert.areEqual( "c", stack.peek(), "stack.peek() should return the last element added without removing it from the stack" );
      Y.Assert.areEqual( "c", stack.peek(), "stack.peek() should return the last element added without removing it from the stack" );
      Y.Assert.areEqual( "c", stack.peek(), "stack.peek() should return the last element added without removing it from the stack" );
    },

    "test that stack.peek() and stack.peek(int) return undefined given an empty stack" :
    function () {
      Y.Assert.areEqual( undefined, stack.peek(), "stack.peek() should return undefined for an empty stack" );
      Y.Assert.areEqual( undefined, stack.peek(5), "stack.peek(int) should return undefined for an empty stack" );
    },

    "test that stack.peek allows random access to elements of the stack" :
    function () {
      stack.push("a");
      stack.push("b");
      stack.push("c");

      Y.Assert.areEqual( "a", stack.peek(0), "0th element should be 'a'" );
      Y.Assert.areEqual( "b", stack.peek(1), "1th element should be 'b'" );
      Y.Assert.areEqual( "c", stack.peek(2), "2th element should be 'c'" );
      Y.Assert.areEqual( "a", stack.peek(0), "0th element should be 'a'" );
    },

    "test that function contains is declared in the stack object" :
    function () {
      Y.assert( "function" === typeof(stack.contains), "You need a function named stack.contains that allows users of your code to determine whether a given element occurs in the stack" );
      Y.Assert.areEqual( 1, stack.contains.length, "stack.contains must have one input parameter, the element for which to search" );
    },

    "test that stack.pop returns undefined given an empty stack" :
    function () {
      Y.Assert.areEqual( undefined, stack.pop(), "stack.pop() should return undefined for an empty stack" );
    },

    "test that stack.contains returns false, if the stack is empty" :
    function () {
      Y.Assert.areEqual( false, stack.contains("a"), "'a' should not be in the stack" );
      Y.Assert.areEqual( false, stack.contains("b"), "'b' should not be in the stack" );
      Y.Assert.areEqual( false, stack.contains("c"), "'c' should not be in the stack" );
      Y.Assert.areEqual( false, stack.contains(1), "1 should not be in the stack" );
      Y.Assert.areEqual( false, stack.contains(2), "2 should not be in the stack" );
      Y.Assert.areEqual( false, stack.contains(3), "3 should not be in the stack" );
    },

    "test that stack.contains returns true, if the sought element is in the stack" :
    function () {
      stack.push("a");
      stack.push("b");
      stack.push("c");
      stack.push(1);
      stack.push(2);
      stack.push(3);

      Y.Assert.areEqual( true, stack.contains("a"), "'a' should be in the stack" );
      Y.Assert.areEqual( true, stack.contains("b"), "'b' should be in the stack" );
      Y.Assert.areEqual( true, stack.contains("c"), "'c' should be in the stack" );
      Y.Assert.areEqual( true, stack.contains(1), "1 should be in the stack" );
      Y.Assert.areEqual( true, stack.contains(2), "2 should be in the stack" );
      Y.Assert.areEqual( true, stack.contains(3), "3 should be in the stack" );
    },

    "test that stack.contains returns false, if the sought element is not in the stack" :
    function () {
      stack.push("a");
      stack.push("b");
      stack.push("c");
      stack.push(1);
      stack.push(2);
      stack.push(3);

      Y.Assert.areEqual( false, stack.contains(""), "the empty string should not be in the stack" );
      Y.Assert.areEqual( false, stack.contains("z"), "'z' should not be in the stack" );
      Y.Assert.areEqual( false, stack.contains(4), "4 should not be in the stack" );
      Y.Assert.areEqual( false, stack.contains(undefined), "undefined should not be in the stack" );
      Y.Assert.areEqual( false, stack.contains(null), "null should not be in the stack" );
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
    return ( "function" === typeof(stack.init) ) ? true : false;
  }
  
 });
