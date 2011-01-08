// Create new YUI instance, and populate it with the required modules
YUI().use('node', 'console', 'test', function(Y) {
 
  // Test available, and ready for use.

  var foundationTests = new Y.Test.Case({

    name: "Test that necessary conditions for running tests have been met",
    
    "test that a method named stackInit exists" :
    function () {
      Y.Assert.areEqual( typeof(stackInit), "function", "You need a function named stackInit with no input parameters" );
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

    "test that a method named stackSize exists" : 
    function () {
      Y.Assert.areEqual( typeof(stackSize), "function", "You need a function named stackSize with no input parameters" );
    },

    "test that a new stack is of length 0" : 
    function () {
      console.log(stack);
      Y.Assert.areEqual( stackSize(), 0, "If no elements have been added to the stack, the stack should be of zero length" );
    },

    "test that a method named stackAdd exists" :
    function () {
      Y.Assert.areEqual( typeof(stackAdd), "function", "You need a function named stackAdd with one input parameter, the element to add" );
    },

    "test that a stack with 1 element is of length 1" :
    function () {
      stackAdd("a");

      Y.Assert.areEqual( stackSize(), 1, "If a stack has 1 element, it should be of length 1" );
    },

    "test that a method named stackGet exists" :
    function () {
      Y.Assert.areEqual( typeof(stackGet), "function", "You need a function named stackGet with no input parameters" );
    },

    "test that stackGet returns the last element added" :
    function () {
      stackAdd("a");
      stackAdd("b");

      Y.Assert.areEqual( stackGet(), "b", "Last item added should be returned" );
    },

    "test that stackGet removes elements from the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( stackGet(), "c", "Last element added should be returned" );
      Y.Assert.areEqual( stackGet(), "b", "next to last element added should be returned" );
      Y.Assert.areEqual( stackGet(), "a", "first element added should be returned" );
    },

    "test that a method named stackPeek exists" :
    function () {
      Y.Assert.areEqual( typeof(stackPeek), "function", "You need a function named stackPeek with one optional input parameter, the element index to be returned" );
    },

    "test that stackPeek does not remove elements from the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( stackPeek(), "c", "Last item added should be returned" );
      Y.Assert.areEqual( stackPeek(), "c", "Last item added should be returned" );
      Y.Assert.areEqual( stackPeek(), "c", "Last item added should be returned" );
    },

    "test that stackPeek allows random access to elements of the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( stackPeek(0), "a", "0th item should be a" );
      Y.Assert.areEqual( stackPeek(1), "b", "1th item should be b" );
      Y.Assert.areEqual( stackPeek(2), "c", "2th item should be c" );
    },

    "test that a method named stackContains exists" :
    function () {
      Y.Assert.areEqual( typeof(stackContains), "function", "You need a function named stackContains with one input parameter, the element for which to search" );
    },

    "test that stackContains finds an element, if that element is in the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( stackContains("a"), true, "a should be in the stack" );
      Y.Assert.areEqual( stackContains("b"), true, "b should be in the stack" );
      Y.Assert.areEqual( stackContains("c"), true, "c should be in the stack" );
    },

    "test that stackContains does not find an element, if that element is not in the stack" :
    function () {
      stackAdd("a");
      stackAdd("b");
      stackAdd("c");

      Y.Assert.areEqual( stackContains("z"), false, "z should not be in the stack" );
    },

    "test that stackGet should return undefined given an empty stack" :
    function () {
      Y.Assert.areEqual( stackGet(), undefined, "getting an empty stack is undefined" );
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
