function nullStackIsEmpty() {
  
  assertEquals( stackSize(), 0, "If no stack is defined, it should be of zero length");
}

function singleItemStackIsLengthOne() {
  stackAdd("a");
  
  assertEquals( stackSize(), 1, "If stack has one item, it should be of length 1");
}

function lastItemAddedShouldBeReturned() {
  stackAdd("a");
  stackAdd("b");

  assertEquals( stackGet(), "b", "Last item added should be returned");
}

function stackGetShouldBeDestructive() {
  stackAdd("a");
  stackAdd("b");
  stackAdd("c");

  assertEquals( stackGet(), "c", "Last item added should be returned");
  assertEquals( stackGet(), "b", "next to last item added should be returned");
  assertEquals( stackGet(), "a", "first item added should be returned");
}

function stackPeekShouldBeNondestructive() {
  stackAdd("a");
  stackAdd("b");
  stackAdd("c");

  assertEquals( stackPeek(), "c", "Last item added should be returned");
  assertEquals( stackPeek(), "c", "Last item added should be returned");
  assertEquals( stackPeek(), "c", "Last item added should be returned");
}

function stackPeekShouldAllowRandomIndexing() {
  stackAdd("a");
  stackAdd("b");
  stackAdd("c");

  assertEquals( stackPeek(0), "a", "0th item should be a");
  assertEquals( stackPeek(1), "b", "1th item should be b");
  assertEquals( stackPeek(2), "c", "2th item should be c");
}

function stackContainsShouldFindExistingElement() {
  stackAdd("a");
  stackAdd("b");
  stackAdd("c");

  assertEquals( stackContains("a"), true, "a should be in the stack");
  assertEquals( stackContains("b"), true, "b should be in the stack");
  assertEquals( stackContains("c"), true, "c should be in the stack");
}

function stackContainsShouldNotFindNonexistingElement() {
  stackAdd("a");
  stackAdd("b");
  stackAdd("c");

  assertEquals( stackContains("z"), false, "z should not be in the stack");
}


function stackGetShouldBeUndefinedOnAnEmptyStack() {
  assertEquals( stackGet(), undefined, "getting an empty stack is undefined");
}

stack = new Array();
  nullStackIsEmpty();
stack = new Array();
  singleItemStackIsLengthOne();
stack = new Array();
  lastItemAddedShouldBeReturned();
stack = new Array();
  stackGetShouldBeDestructive();
stack = new Array();
  stackPeekShouldBeNondestructive();
stack = new Array();
  stackGetShouldBeUndefinedOnAnEmptyStack();
stack = new Array();
  stackPeekShouldAllowRandomIndexing();
stack = new Array();
  stackContainsShouldFindExistingElement();
stack = new Array();
  stackContainsShouldNotFindNonexistingElement();



if (assert.count == 0) {
  alert("All tests passed");
}