OVERVIEW
========

This is a programming exercise designed using a Test-Driven Learning (TDL) approach, developed by William E. J. Doane and Brian A. Danielak. TDL is based on the agile software development practice of Test-Driven Development (TDD) in the service of teaching programming. 

In TDD, a programmer or a pair of programmers works to first write a "unit test" for some functionality desired in an application. In TDL, unit tests written by instructors serve to guide student code writing. Since the test is written before the code being tested, the test will initially fail when run. This is referred to as being RED: a failed test. 

Once a test fails, the programmer (or, if pair-programming, the other programmer) then writes just enough code to make the test pass. In other words, you "do the simplest thing that can possibly work" (DTSTTCPW -- a motto of the Agile Development community) to make the test pass. Passing a test is referred to as being GREEN. Consider a test which says:

  assert.isNumber( computeGPA() );

Think about how much this one assertion tells us about the code we're expected to write: to pass this test, we must define a function (or method) named computeGPA and that function should allow for zero input parameters. Whatever else computeGPA does, it must return a number.

The simplest thing that could be written to pass this test (in JavaScript) is:

  function computeGPA() {
    return 0;
  }

While this is obviously not a very accurate function at the moment (surely not everyone's GPA is zero!), it would pass the test. In other words, we would get to GREEN with respect to that test. Other tests would then refine how computeGPA behaves, forcing us to improve the function's implementation.

At some point, while tests are GREEN, it may be desirable to change the organization of our code (without trying to add any functionality). This is referred to as REFACTORING and can be done safely, given that we can re-run our tests to ensure the continued proper behavior of our code.

This cycle– RED-GREEN-REFACTOR– is at the heart of test-driven development. It's a way of requiring programmers to think about how their code should behave before they begin to write the code itself. It provides a structure within which we are free to improve our code, so long as our tests continue to pass.

Any time a test goes from RED to GREEN, that's a good thing (assuming our tests are well written). However, when a test goes from GREEN to RED, we've broken some behavior. We need to stop, figure out why the test now fails, and fix the problem, before moving on.

TDL affords instructors the benefit of being able to encode their expectations for programming projects (thus providing an automatic assessment tool when students submit their work) and affords students the ability to get immediate feedback on the state of their code at any time of day or night. Students need not wonder whether their code meets expectations– they can simply run the tests. As a benefit, students develop habits valuable in collaborative coding contexts such as functional decomposition, unit testing, not breaking the build, etc.


THIS REPOSITORY
===============

This repository is organized into distinct tasks. At the highest level, you'll find a list of project directories with various names, this README.txt file, and the yui folder. 

  README.txt An overview of the organization and purpose of the repository
  yui        The Yahoo! framework that provides the unit testing 
              tools we need.

Each task directory is organized into two main directories and includes its own README.txt file describing that particular task:

  README.txt A description of a given task
  src        The source code that you'll write to satisfy the tests.
  tests      The collection of tests for code stored in src.

In the tests directory, you'll find a typical test harness (just enough structure to bootstrap the running of the tests)

  runTests.html

The test harness is intended to be run from within a typical web browser. Launch your preferred web browser and, optionally, activate the debugging tools provided therein (see "Web Browser Debugging Tools", below). Then, select

  File > Open...

navigate to the tests directory and open the runTests.html file.

If successful, you should see a LOG console displayed that shows the test results for each of the tests defined in the tests directory. Initially, the test results will all be RED, since you haven't written any code yet to pass them.

Feel free to look at the tests, but do not change anything in those files. The only changes you should make will be in the src directory.

You can (and SHOULD!) reload runTests.html often in order to re-run the tests. As you write code to pass the tests, they will go GREEN, reflecting a passed test. When all tests pass, you've completed the primary task and, if you haven't yet done so, to refactor your code. You can do so safely, knowing that, if you break the expected behavior of your code, one or more tests will go RED and you'll be able to address the problem right away.


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


PLAIN TEXT EDITORS
==================

Source code– the code humans write that is then interpreted or compiled by the computer in order to create object code, which can be executed by the computer– is just plain text. "Plain text" is a technical term of art that refers to a very simple file format that contains only letters, numbers, punctuation, and whitespace characters and NOT a word processor file format. Word processor files, even if you've only typed text and saved the file, contain additional information such as font details, printing details, page dimensions, and so on. A plain text file contains nothing but the characters you type.

There are many plain text editors available for free; your computer may already have one installed (Notepad or Textedit, for example). Programmers tend to prefer plain text editors that provide certain kinds of support that help visualize the source code: line numbers, syntax coloring, etc.

  Macintosh   TextWrangler     http://www.barebones.com/products/textwrangler/

  Windows     Notepad++        http://notepad-plus-plus.org/

  Linux


WEB BROWSER'S DEBUGGING TOOLS
=============================

Most modern web browsers provide special purpose debuggers to help programmers see where and when errors are occurring in code. Here are the steps to display the debugger in several popular browsers. Some of them provide better debugging capabilities than others; which you ultimately use is up to you.

The JavaScript console allows you to inspect variables and test small code snippets. It also displays failures not otherwise handled by the TDD testing framework, and so can be a valuable tool.

  Google 
    Chrome    View > Developer > JavaScript Console

  Safari      Safari > Preferences > Advanced > Show develop menu in menu bar
              Develop > Show Error Console

  Firefox     First, install the Firebug add-on
              Tools > Firebug > Open Firebug
              Then, select the "Console"

  Internet 
    Explorer  