TASK OVERVIEW
==============

In this task, you'll simulate the rolling of a single six-sided die by writing a FUNCTION. Keep in mind that a typical six-sided die has faces numbered from 1 to 6.

Functions are small blocks of code that, ideally, perform a single task. This is a version of the Single Responsibility Principle (SRP) [1]. We don't want functions to have side effects (non-obvious behaviors). For example, a function that computes the sum of two integers should not also print out the result. Instead, it should simply return the result so that users of the summing function can decide what to do with the result: print it, use it in other computations, etc.

  var x;
  
  var sum = function (a, b) {
    return a + b;
  };

  x = sum(10, 20) * 2;
  alert(x);            // 60
  alert( sum(2, 3) );  // 5

Functions may take zero or more inputs (e.g., a and b in the sum function) and may return a value. 


[1] http://www.butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod