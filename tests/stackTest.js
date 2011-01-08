// Create new YUI instance, and populate it with the required modules
YUI().use('node', 'console', 'test', function(Y) {
 
  // Test available, and ready for use.

  var foundationTests = new Y.Test.Case({

    name: "Test that necessary conditions for running tests have been met",
    
    "test that a function named stackInit exists in a file named stack.js" :
    function () {
      Y.Assert.areEqual( typeof(stackInit), "function", "You need a function named stackInit with no input parameters defined in stack.js located in the src folder" );
    }

  });

  var unitTests = new Y.Test.Case({
 
    name: "Testing Stack",

    setUp :
    function () {
      stackInit();
    },

    tearDown :
    function () {
    },

    "test that a function named stackSize exists" : 
    function () {
      Y.Assert.areEqual( typeof(stackSize), "function", "You need a function named stackSize with no input parameters" );
    },

    "test that a new stack is of length 0" : 
    function () {
      Y.Assert.areEqual( stackSize(), 0, "If no elements have been added to the stack, the stack should be of zero length" );
    },

    "test that a function named stackAdd exists" :
    function () {
      Y.Assert.areEqual( typeof(stackAdd), "function", "You need a function named stackAdd with one input parameter, the element to add" );
    },

    "test that a stack with 1 element is of length 1" :
    function () {
      stackAdd("a");

      Y.Assert.areEqual( stackSize(), 1, "If a stack has 1 element, it should be of length 1" );
    },

    "test that a function named stackGet exists" :
    function () {
      Y.Assert.areEqual( typeof(stackGet), "function", "You need a function named stackGet with no input parameters" );
    },

    "test that stackGet returns the last element added" :
    function () {
      stackAdd("a");
      stackAdd("b");

      Y.Assert.areEqual( stackGet(), "b", "Last element added should be returned" );
    },

    "test that stackGet removes the returned element from the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( stackGet(), "c", "Last element added should be returned" );
      Y.Assert.areEqual( stackGet(), "b", "next to last element added should be returned" );
      Y.Assert.areEqual( stackGet(), "a", "first element added should be returned" );
    },

    "test that stacks can contain 2 elements with the same value" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("a");

      Y.Assert.areEqual( stackGet(), "a", "Last element added should be returned" );
      Y.Assert.areEqual( stackGet(), "b", "next to last element added should be returned" );
      Y.Assert.areEqual( stackGet(), "a", "first element added should be returned" );
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
      Y.Assert.areEqual( result, objElement, "element should be an empty object {}" );
      Y.Assert.areEqual( typeof(result), "object", "element should be of type object" );

      result = stackGet();
      Y.Assert.areEqual( result, false, "element should be the boolean value false" );
      Y.Assert.areEqual( typeof(result), "boolean", "element should be of type boolean" );

      result = stackGet();
      Y.Assert.areEqual( result, true, "element should be the boolean value true" );
      Y.Assert.areEqual( typeof(result), "boolean", "element should be of type boolean" );

      result = stackGet();
      Y.Assert.areEqual( result, 1, "element should be the number value 1" );
      Y.Assert.areEqual( typeof(result), "number", "element should be of type number" );

      result = stackGet();
      Y.Assert.areEqual( result, "a", "element should be the boolean value true" );
      Y.Assert.areEqual( typeof(result), "string", "element should be of type string" );
      
     },

    "test that a function named stackPeek exists" :
    function () {
      Y.Assert.areEqual( typeof(stackPeek), "function", "You need a function named stackPeek with one optional input parameter, the element index to be returned" );
    },

    "test that stackPeek does not remove elements from the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( stackPeek(), "c", "Last element added should be returned" );
      Y.Assert.areEqual( stackPeek(), "c", "Last element added should be returned" );
      Y.Assert.areEqual( stackPeek(), "c", "Last element added should be returned" );
    },

    "test that stackPeek allows random access to elements of the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( stackPeek(0), "a", "0th element should be a" );
      Y.Assert.areEqual( stackPeek(1), "b", "1th element should be b" );
      Y.Assert.areEqual( stackPeek(2), "c", "2th element should be c" );
    },

    "test that a function named stackContains exists" :
    function () {
      Y.Assert.areEqual( typeof(stackContains), "function", "You need a function named stackContains with one input parameter, the element for which to search" );
    },

    "test that stackContains returns false, if the stack is empty" :
    function () {
      Y.Assert.areEqual( stackContains("a"), false, "a should not be in the stack" );
      Y.Assert.areEqual( stackContains("b"), false, "b should not be in the stack" );
      Y.Assert.areEqual( stackContains("c"), false, "c should not be in the stack" );
    },

    "test that stackContains returns true, if the sought element is in the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");
      stackAdd(1);
      stackAdd(2);
      stackAdd(3);

      Y.Assert.areEqual( stackContains("a"), true, "a should be in the stack" );
      Y.Assert.areEqual( stackContains("b"), true, "b should be in the stack" );
      Y.Assert.areEqual( stackContains("c"), true, "c should be in the stack" );
      Y.Assert.areEqual( stackContains(1), true, "1 should be in the stack" );
      Y.Assert.areEqual( stackContains(2), true, "2 should be in the stack" );
      Y.Assert.areEqual( stackContains(3), true, "3 should be in the stack" );
    },

    "test that stackContains returns false, if the sought element is not in the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");
      stackAdd(1);
      stackAdd(2);
      stackAdd(3);

      Y.Assert.areEqual( stackContains(""), false, "the empty string should not be in the stack" );
      Y.Assert.areEqual( stackContains("z"), false, "z should not be in the stack" );
      Y.Assert.areEqual( stackContains(4), false, "4 should not be in the stack" );
      Y.Assert.areEqual( stackContains(undefined), false, "undefined should not be in the stack" );
      Y.Assert.areEqual( stackContains(null), false, "null should not be in the stack" );
    },

    "test that stackGet should return undefined given an empty stack" :
    function () {
      Y.Assert.areEqual( stackGet(), undefined, "getting from an empty stack is undefined" );
    }

  });


  var r = new Y.Console({
      newestOnTop: false                   
  });  

  r.render("#testReport");
  
  Y.Test.Runner.add(foundationTests);
  Y.Test.Runner.add(unitTests);
  Y.Test.Runner.run();
 });
