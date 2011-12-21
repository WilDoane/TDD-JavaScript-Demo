TASK OVERVIEW
==============

In this task, you'll revise your code so that instead of using "magic numbers" such as 1 and 6 to define the minimum and maximum values, you PARAMETERIZE those values: change them to variables that you can set as a parameter to your function calls.

For example, a non-parameterized function might look something like

  var sayItFast = function () {
    var i = 0;
    while ( i < 5 ) {
      alert( "double bubble" );
      i = i + 1;
    }
  };
  
When I call sayItFast() using

  sayItFast();

it produces 5 alert boxes, each of which says "double bubble" -- a form of tongue twister. The scalar value 5 here is a so-called "magic number" in that someone else looking at this code doesn't know why 5 was chosen or whether it has some deeper meaning. This code is limited in that it can only output its message 5 times; never more, never less.

Similarly, the only message sayItFast() can output is the string literal "double bubble". If we wanted to output a different message, we would have to re-write the source code.

As an alternative, a parameterized version of this function might look something like

  var sayItFast = function ( times, message ) {
    var i = 0;
    while ( i < times ) {
      alert( message );
      i = i + 1;
    }
  };

Here, the number of times you want the message to repeat and the message to be output are EXTRACTED from the body of the function to the PARAMETER LIST of the function: the list of inputs the function accepts.

I can now use the parameterized version to produce the same output as the non-parameterized version by calling it thus

  sayItFast( 5, "double bubble" );

I also now have the flexibility to output the message any given number of times

  sayItFast( 2, "double bubble" );

or to change the message that is output

  sayItFast( 5, "wonder woman" );

or to change both at the same time

  sayItFast( 10, "willy wonka" );

