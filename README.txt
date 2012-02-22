OVERVIEW
========

This is a programming exercise designed using an approach to instruction that incorporates instructor-written, Test-Driven Development-style code, developed by William E. J. Doane and Brian A. Danielak, which has been designed to give pedagogically useful feedback to students as they learn to program. 

In TDD, a programmer or a pair of programmers works to first write a UNIT TEST for some functionality desired in an application. In our approach, unit tests written by instructors serve to guide the student's code writing. Since the test is written before the code being tested, the test will initially fail when run. This is referred to as being RED: a failed test. 

Once a test fails, the programmer (or, if pair-programming, the other programmer) then writes just enough code to make the test pass. In other words, you "do the simplest thing that can possibly work" (DTSTTCPW -- a motto of the Agile Development community) to make the test pass. Passing a test is referred to as being GREEN. Consider a test which says:

  Y.Assert.isNumber( computeGPA() );

We need not understand the full details of how this test is executed in order to learn what behaviors are expected from the code being tested. What does this one assertion tell us about the code we're expected to write? To pass this test:

  * we must create something named computeGPA
      [because that's what's being referred to within the assertion]
  * computeGPA must be defined as a FUNCTION 
      [because the label computeGPA is followed immediately by ()] 
  * it must allow for zero input PARAMETERS 
      [because nothing appears between the ()]
  * it must return a number when given zero input parameters 
      [because the assertion being made is that computeGPA() "isNumber"]

There may well be other requirements for computeGPA(), but as disciplined TDD programmers, we're only going to focus on getting this one test to pass. 

So, let's DTSTTCPW. The simplest thing that could be written to pass this test (in JavaScript) is:

  var computeGPA = function () {
    return 0;
  };

While this is obviously not a very accurate function at the moment (surely not everyone's GPA is zero!), it would pass the test. In other words, we would get to GREEN with respect to that test. Other tests would then refine how computeGPA behaves, forcing us to improve the function's IMPLEMENTATION (the code that appears within the function).

At some point, while tests are GREEN, it may be desirable to change the organization of our code (without trying to add any functionality). This is referred to as REFACTORING and can be done safely, given that we can re-run our tests to ensure the continued proper behavior of our code after each change we make. There are even collections of REFACTORING PATTERNS that have been published that can help guide us as we make changes to code, but more on that later.

This cycle-- RED-GREEN-REFACTOR-- is at the heart of test-driven development. It's a way of requiring programmers to think about how their code should behave before they begin to write the code itself. It provides a structure within which we are free to improve our code, so long as our tests continue to pass.

Any time a test goes from RED to GREEN, that's a good thing (assuming our tests are well written). However, when a test goes from GREEN to RED, we've broken some behavior. We need to stop, figure out why the test now fails, and fix the problem, before moving on.

This approach affords instructors the benefit of being able to encode their expectations for programming projects (thus providing an automatic assessment tool when students submit their work) and affords students the ability to get immediate feedback on the state of their code at any time of day or night. Students need not wonder whether their code meets expectations-- they can simply run the tests. As a benefit, students develop habits valuable in collaborative coding contexts such as TDD, functional decomposition, unit testing, not breaking the build, etc.

WHY JAVASCRIPT?
===============

The question of which programming language to use for introducing newcomers to programming concepts is a long-standing debate; there is unlikely to be a correct answer. One chooses a programming language based on the problem domain: most languages have been designed or evolved to serve a specific purpose... to solve some broad type of problem.

JavaScript is a language that is most widely used in Web development. Until 2009, it was used primarily in the user's Web browser. Projects such as V8 and Node.js are allowing programmers to use JavaScript more widely, too.

If you've used http://maps.google.com or almost any other dynamic website, then you have interacted with a JavaScript-based tool.

JavaScript is installed in all popular Web browsers, so you already have it installed on your computer.

Also, JavaScript, like most programming languages, uses "source code" files that can be written using any plain text editor (but more on that below).


JAVASCRIPT REFERENCE
====================

As you work your way through the tasks, you'll likely need to look-up additional JavaScripts functions and examples. For example, when writing code to roll a die, you will likely need to generate a random number. Most programming languages have a function that does this, but the details of how to use those functions changes from one language to the next.

To find information about a language feature, you can often search the Web for it, being sure to include the name of the language you're programming in:

  javascript random number
  
A more structured resource for JavaScript exists at

  https://developer.mozilla.org/en/JavaScript/Reference
  
where, for example, you can look-up "Math" and then "random"-- language features are often presented in that sort of hierarchic structure.


ABOUT THIS COLLECTION OF CODE
=============================

This repository is organized into distinct tasks. At the highest level, you'll find a list of project directories with various names, this README.txt file, and the yui/ directory. 

  README.txt  An overview of the organization and purpose of the repository
  yui/        The Yahoo! framework that provides the unit testing 
               tools we need.

Each task directory is organized into two main directories and includes its own README.txt file describing that particular task:

  README.txt  A description of a given task
  src/        The source code that you'll write to satisfy the tests.
  tests/      The collection of tests for code stored in src.

In the src/ directory, you'll find a typical APPLICATION LOADER (just enough structure to bootstrap the running of the application) named

  runApp.html

In the tests/ directory, you'll find a typical TEST LOADER (just enough structure to bootstrap the running of the tests) named

  runTests.html

These are intended to be run from within a typical web browser, as described below.


YOUR PROCESS
============

Your goal is to get all the tests from RED to GREEN. In order to do this, we strongly recommend the following process.

  * You'll need to work on getting just one test at a time from RED to GREEN. 
  * Work from the top of the LOG results. 
  * Find the first failed test.
  * Using your favorite plain text editor, write just enough code to 
    pass that test.
  * Save your new code.
  * Re-run the tests (by reloading runTests.html) until you pass the test.
  * Only then should you move on to the next failed test.
  * You'll find that you need to rewrite code you've already written.
    This is normal. Just be sure to (a) re-run the tests
    after each change you make, (b) identify any previously passed tests that
    now fail, and (c) immediately fix them so that they pass again.

To begin, launch your preferred web browser (Firefox, Safari, Chrome, Internet Explorer, etc.) and, optionally, activate the debugging tools provided therein (see "Web Browser Debugging Tools", below). Then, select

      File > Open...

navigate to the tests directory and open the runTests.html file.

If successful, you should see a LOG console displayed that shows the test results for each of the tests defined in the tests directory. Initially, the test results will all be RED, since you haven't written any code yet to pass them.

Feel free to look at the tests, but do not change anything in those files. The only changes you should make will be in the src directory.

You can (and SHOULD!) reload runTests.html often in order to re-run the tests. As you write code to pass the tests, they will go GREEN, reflecting a passed test. When all tests pass, you've completed the primary task and, if you haven't yet done so, you can refactor your code to improve its organization. You can do so safely, knowing that, if you break the expected behavior of your code, one or more tests will go RED and you'll be able to address the problem right away.

Once your tests are green, you can open the runApp.html file in the src/ directory in order to see your application running in the browser.

When one task is closely related to the previous task, you should begin by copying your previous app.js file from the src/ directory of the previous task to the src/ directory of the new task.


PLAIN TEXT EDITORS
==================

SOURCE CODE-- the code humans write that is then INTERPRETED or COMPILED by the computer in order to create OBJECT CODE, which can be executed by the computer-- is just plain text. PLAIN TEXT is a technical term of art that refers to a very simple file format that contains only letters, numbers, punctuation, and whitespace characters and is NOT a word processor file format. Word processor files, even if you've only typed text and saved the file, contain additional information such as font details, printing details, page dimensions, and so on. A plain text file contains nothing but the characters you type.

There are many plain text editors available for free; your computer may already have one installed (Notepad or TextEdit, for example). Programmers tend to prefer plain text editors that provide certain kinds of support that help visualize the source code: line numbers, syntax coloring, etc.

  Macintosh   TextWrangler     http://www.barebones.com/products/textwrangler/

  Windows     Notepad++        http://notepad-plus-plus.org/

  Linux       vim              http://www.vim.org/
              Geany            http://www.geany.org/


WEB BROWSER'S DEBUGGING TOOLS
=============================

Most modern web browsers provide special purpose DEBUGGERS to help programmers see where and when errors are occurring in code. DEBUGGING is the process of eliminating errors from your source code. Debugging is a reference to the early days of computing when computers were built using bright, hot vacuum tubes. Flying bugs tended to be drawn to these tubes and sometimes shorted them out requiring technicians to go into the computer and remove the bugs or debug the system. If you search http://images.google.com for the terms

  first computer bug

you'll likely see images of a journal page belonging to Grace Hopper-- an early computer programmer and later a Rear Admiral in the United States Navy-- and taped to the page is a bug she found.

Here are the steps to display a modern debugger in several popular browsers. Some of them provide better debugging capabilities than others; which you ultimately use is up to you.

The JavaScript CONSOLE allows you to inspect variables and test small code snippets. It also displays failures not otherwise handled by the TDD testing framework, and so can be a valuable tool.

  Google 
    Chrome    View > Developer > JavaScript Console

  Safari      Safari > Preferences > Advanced > Show develop menu in menu bar
              Develop > Show Error Console

  Firefox     First, install the Firebug add-on: Tools > Add-ons 
              Tools > Firebug > Open Firebug
              Then, select the "Console"

  Internet 
    Explorer  
