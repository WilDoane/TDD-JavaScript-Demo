TASK OVERVIEW
==============

The purpose of this task is to implement a STACK using JavaScript FUNCTIONS. 

A stack is a common data structure in computer programming. A stack begins empty. Elements can be added (pushed) onto the stack. You can retrieve the last element that was pushed onto the stack by popping the stack. Popping the stack returns the last element added and removes it from the stack. You can also peek at any element in the stack and check to see whether a stack contains a given element. Finally, at any time, you can get the current size of the stack; an empty stack is of size 0.  

Since we're always focused on the last element pushed onto the stack, a stack is a Last In, First Out (LIFO) data structure.

Functions are small blocks of code that, ideally, perform a single task. This a referred to as the Single Responsibility Principle (SRP). We don't want functions to have side effects (non-obvious behaviors). For example, a function that computes the sum of two integers should not also print out the result. Instead, it should simply return the result so that users of the summing function can decide what to do with the result: print it, use it in other computations, etc.

  var x;
  
  function sum(a, b) {
    return a + b;
  }

  x = sum(10, 20) * 2;
  alert(x);            // 60
  alert( sum(2, 3) );  // 5

Functions can take one or more inputs (e.g., a and b in the sum function) and can return a value. 

