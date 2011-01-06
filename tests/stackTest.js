// Create new YUI instance, and populate it with the required modules
YUI().use('node', 'console', 'test', function(Y) {
 
  // Test available, and ready for use.

  var testCase = new Y.Test.Case({
 
    name: "Testing Stack Functionality",

    setUp : function () {
        stack = new Array();
      },

    tearDown : function () {

      },

    "test A new stack should be empty" : function () {
        Y.Assert.areEqual( stackSize(), 0, "If no stack is defined, it should be of zero length" );
      },

    "test singleItemStackIsLengthOne" : function () {
        stackAdd("a");

        Y.Assert.areEqual( stackSize(), 1, "If stack has one item, it should be of length 1" );
      },

    "test lastItemAddedShouldBeReturned" : function () {
        stackAdd("a");
        stackAdd("b");

        Y.Assert.areEqual( stackGet(), "b", "Last item added should be returned" );
      },

    "test stackGetShouldBeDestructive" : function () {
        stackAdd("a");
        stackAdd("b");
        stackAdd("c");

        Y.Assert.areEqual( stackGet(), "c", "Last item added should be returned" );
        Y.Assert.areEqual( stackGet(), "b", "next to last item added should be returned" );
        Y.Assert.areEqual( stackGet(), "a", "first item added should be returned" );
      },

    "test stackPeekShouldBeNondestructive" : function () {
        stackAdd("a");
        stackAdd("b");
        stackAdd("c");

        Y.Assert.areEqual( stackPeek(), "c", "Last item added should be returned" );
        Y.Assert.areEqual( stackPeek(), "c", "Last item added should be returned" );
        Y.Assert.areEqual( stackPeek(), "c", "Last item added should be returned" );
      },

    "test stackPeekShouldAllowRandomIndexing" : function () {
        stackAdd("a");
        stackAdd("b");
        stackAdd("c");

        Y.Assert.areEqual( stackPeek(0), "a", "0th item should be a" );
        Y.Assert.areEqual( stackPeek(1), "b", "1th item should be b" );
        Y.Assert.areEqual( stackPeek(2), "c", "2th item should be c" );
      },

    "test stackContainsShouldFindExistingElement" : function () {
        stackAdd("a");
        stackAdd("b");
        stackAdd("c");

        Y.Assert.areEqual( stackContains("a"), true, "a should be in the stack" );
        Y.Assert.areEqual( stackContains("b"), true, "b should be in the stack" );
        Y.Assert.areEqual( stackContains("c"), true, "c should be in the stack" );
      },

    "test stackContainsShouldNotFindNonexistingElement" : function () {
        stackAdd("a");
        stackAdd("b");
        stackAdd("c");

        Y.Assert.areEqual( stackContains("z"), false, "z should not be in the stack" );
      },

    "test stackGetShouldBeUndefinedOnAnEmptyStack" : function () {
        Y.Assert.areEqual( stackGet(), undefined, "getting an empty stack is undefined" );
      }

  });

  var r = new Y.Console({
      newestOnTop: false                   
  });  

  r.render("#testReport");
  
  Y.Test.Runner.add(testCase);
  Y.Test.Runner.run();
 });
