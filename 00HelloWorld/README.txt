TASK OVERVIEW
==============

In this task, you'll be introduced to the structure of tasks that we'll follow from now on. Each task contains a README.txt file that describes the purpose of that task and introduces core programming concepts.

  src    The source code for your application. Your code will go in app.js
         runApp.html is loaded in your web browser to execute your application

  tests  Tests that have been written to ensure that your src/app.js behaves 
         as expected. runTests.html is loaded in your web browser to execute
         the tests. If any tests fail, you'll need to write or update code
         in src/app.js in order to make them pass. You should reload 
         runTests.html each time you've updated your code to be sure that
         any passed tests are still passed and to work toward making all
         failed tests pass, too.

Let's follow the process outlined in the main README.txt file. If you get stuck and your tests are NOT passing, compare the code you've written in src/app.js with our example code in src/appExample.js and see whether you can spot the critical difference. Only this initial task has appExample.js 

First, let's run the tests for this task. Open tests/tunTests.html in your web browser. This will be your first step when you begin each task. You'll want to keep that browser window open so that you can easily reload the tests after each change.

The tests will all fail because they expect your code to be contained in a file in the src/ directory named app.js and no such file exists yet.

Now, also using your plain text editor, create a new file in src/ named app.js

In that file, to begin, DECLARE a GLOBAL VARIABLE called authorsName. A variable can be thought of as a way to refer to an object. You're probably already familiar with the idea of a variable from high school algebra class, where you might see a statement, such as

  x = 5

where x is a variable (a reference to something that can change value over time). 

A global variable in programming is a variable that is accessible from anywhere within your application... it is "global". You'll see other variables later that are "local" and can only be accessed within a small part of your application.

Looking at the first failed test, you're told that 

  You need a global variable named authorsName is 
  declared in app.js located in the src/ directory

To DTSTTCPW, you need to add that variable to your app.js file by writing

  var authorsName;

The "var" keyword tells JavaScript that you're about to declare a variable for the first time. Since this variable isn't being declared within a function, it will be a global variable. You've specified the name of the variable and indicated that you're done with that line of code by placing a semi-colon at the end. (note: You shouldn't indent your variable definition; it's shown indented here only as an example.)

Now, rerun the tests by switching to your browser and clicking the reload button or pressing the keyboard equivalent. You should now see one test passing. It's time to move on to the next failed test.

  The variable authorsName must have a value 
  of 'Yourfirstname Yourlastname' (insert your own name)
  
  Unexpected: null (object)

This suggests that, even though authorsName is declared, it is not yet defined. "Unexpected: null" tells you that when the test checked the value of authorsName, rather then the expected value (something of the general form "Jane Doe") it found null: JavaScript's term for "nothing".

To pass this test, you need to modify the code you've already written, but only slightly, to include a value for authorsName

  var authorsName = "Yourfirstname Yourlastname";

(Be sure to replace those placeholders with your real first and last names)

Switch to your browser and rerun the tests. You should now be passing that test. If you're not, check the format of your code in src/app.js very carefully. Capitalization matters. Punctuation matters.

The next failed test tells us that. 

  You need to define a function that will allow users of your 
  code to get the greeting string. This function must be named 
  greetings, and defined in app.js located in the src/ directory

FUNCTIONS are short blocks of source code that 

  (a) accept zero or more inputs, 
  (b) perform a given task, and 
  (c) returns zero or one output

at least in JavaScript; other programming languages may differ slightly.

There are several ways to define functions in JavaScript. For now, you'll use the most basic method and, later, you'll improve upon that. You'll need to add this below the definition of authorsName
  
  function greetings() {
  
  }

Switch to your browser and rerun the tests. You should now be passing that test, as well. So, we check the next failed test

  function greetings should return a string

At the moment, greetings() doesn't return anything. To DTSTTCPW, we need to revise that function to return a STRING. A string is computer-speak for "a sequence of characters" and is usually denoted either by single- or double-quotation marks

  'this is a string'
  "this too!"
  '12345'

Note that last one carefully. It's a string, so the computer treats it as only a sequence of characters. It's NOT a number, as far as the computer is concerned, just like a photograph of a car is not a car. A string of digit characters is not a number. You'll revisit this distinction in the next few tasks.

We could choose any string value to return at this point, but there's a special, minimal string in most computer languages commonly called the EMPTY STRING or the NULL STRING and it's denoted as

  ""  

That's two double-quotation marks with nothing– not even a space– between them. A space is itself a character, so the string with a single space in it

  " "

is not the same as the empty string

  ""

So, to DTSTTCPW for this test, let's return the empty string

  function greetings() {
    return "";
  }

Switch to your browser and rerun the tests. You should now be passing that test, as well. So, we check the final failed test

  function greetings should return the string "Hello, " 
  concatenated with the value of authorsName

CONCATENATING strings means to append one string to another. For example

  "Hello, " + "Brian Danielak"
  
results is a new, single string

  "Hello, Brian Danielak"

In this case, we want to concatenate "Hello, " with the current value of authorsName, so that the greeting will be updated for each person who completes this task. To concatenate a string with a variable, the variable name must not be inside of quotation marks. Otherwise, how would the computer tell the difference between

  "Hello, authorsName"
  
and

  "Hello, " + authorsName

So, once again, we need to revise greetings()

  function greetings() {
    return "Hello, " + authorsName;
  }

Switch to your browser and rerun the tests. You should now be passing all tests!

Once all your tests are passing, try opening src/runApp.html in your web browser to see how the application behaves. This will typically be your final step in each task. You can try running the application earlier, but you may see odd behaviors because your code wasn't finished until you passed all the tests.

This task introduced you to

  * the structure of a task
  * variables
  * global variables
  * functions
  * function return values
  * strings
  * string concatenation
  * the empty string
  * the process of test-driven learning.

Future tasks will provide much less detail, but you'll be expected to use the  techniques and processes learned here to complete all tasks.