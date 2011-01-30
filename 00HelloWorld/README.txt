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

Let's follow the process outlined in the main README.txt file.

First, let's run the tests for this task. Open tests/tunTests.html in your web browser. This will be your first step when you begin each task. You'll want to keep that browser window open so that you can easily reload the tests after each change.

The tests will all fail because they expect your code to be contained in a file in the src/ directory named app.js and no such file exists yet.

Now, also using your plain text editor, create a new file in src/ named app.js

In that file, begin by defining a GLOBAL VARIABLE. A variable can be thought of as a way to refer to an object. You're probably already familiar with the idea of a variable from high school algebra class, where you might see a statement, such as

  x = 5

where x is a variable (a reference to something that can change value over time). A global variable in programming is a variable that is accessible from anywhere within your application... it is "global". You'll see other variables later that are "local" and can only be accessed within a small part of your application.

Looking at the first failed test, you're told that "You need a global variable named authorsName defined in app.js located in the src/ directory"

To DTSTTCPW, you need to add that variable to your app.js file by writing

  var authorsName = "Jane Doe";

The "var" label tells JavaScript that you're about to declare a variable for the first time. Since this variable isn't being declared within a function, it will be a global variable. You've specified the name of the variable and indicated that you're done with that line of code by placing a semi-colon at the end. (note: You shouldn't indent your variable definition; it's shown indented here only as an example. Also, be sure to put YOUR name, and not Jane Doe.)

Now, rerun the tests by switching to your browser and clicking the reload button or pressing the keyboard equivalent. You should now see one test passing.






