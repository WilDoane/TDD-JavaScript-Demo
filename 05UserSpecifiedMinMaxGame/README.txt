TASK OVERVIEW
==============

In this task, you'll revise the code so that the values for the minimum and maximum numbers to use are not hard-coded in the source code, but instead are entered by the user when they run the code. 

This will require several changes. First, we have to be able to get input from the user. In JavaScript, this is done using the prompt() function thus

  var userInput = prompt( "Enter what you'd like me to know" );
  
The user will be presented with a dialog box that has a text field into which he or she can type letters, numbers, and punctuation from the keyboard.

Second, userInput is of datatype string. That is, what the user enters into the text field is initially treated as a simple series of characters. We can verify this by JavaScript's built-in typeof keyword

  typeof userInput;

For our guessing game, we want to treat the input as a number; specifically as an integer. To convert a string to a number, JavaScript provides two functions

  parseInt(...)
  parseFloat(...)

The parseInt(...) function attempts to convert a string to an integer, while parseFloat(...) attempts to convert a string to a floating point number. Here, parseInt(...) is the correct choice, since the user should only be guess whole numbers.

To use parseInt(...), we first obtain the user's input, then attempt to parse it as a base-10 integer

  var userInput = prompt( "Enter a whole number decimal value" );
  userInput = parseInt( userInput, 10 );

If successful, the userInput variable will now be of datatype number

  typeof userInput;
  
As you've learned, however, each of these steps will need to be separated into dedicated functions in this task.

