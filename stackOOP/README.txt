TASK OVERVIEW
==============

The purpose of this task is to implement a STACK using JavaScript OBJECTS. 

A stack is a common data structure in computer programming. A stack begins empty. Elements can be added (pushed) onto the stack. You can retrieve the last element that was pushed onto the stack by popping the stack. Popping the stack returns the last element added and removes it from the stack. You can also peek at any element in the stack and check to see whether a stack contains a given element. Finally, at any time, you can get the current size of the stack; an empty stack is of size 0.  

Since we're always focused on the last element pushed onto the stack, a stack is a Last In, First Out (LIFO) data structure.

Objects allow the programmer to encapsulate within the object all the functions, variables, etc. that are needed for an implementation. In other words, objects allow one to remove the variable and function names from the global scope, which allows code from multiple implementations to be loaded into the same page.

  var x;
  
  var accumulator = (function () {
    var storage = 0;
    
    return {
      sum: function (a, b) {
        var c = a + b;
        storage = storage + c;
        return c;
      },  

      total: function () {
        return storage;
      },  

      reset: function () {
        storage = 0;
      }  

    };

  }());

  x = accumulator.sum(10, 20) * 2;
  alert(x);                        // 60
  alert( accumulator.sum(2, 3) );  // 5
  alert( accumulator.total() );    // 35
  accumulator.reset();
  alert( accumulator.total() );    // 0



