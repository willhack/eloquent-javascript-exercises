// CHAPTER 2: PROGRAM STRUCTURE

// FUNCTION TRIANGLE
/*
  Write a loop that makes seven calls to console.log
  to output the following triangle:

  #
  ##
  ###
  ####
  #####
  ######
  #######

*/
function triangle() {
  // YOUR CODE HERE
}

// FUNCTION FIZZBUZZ
/*
  Write a program that uses console.log to print all the numbers from
  1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
  instead of the number, and for numbers divisible by 5, print "Buzz" instead.
  Example:
    1
    2
    Fizz
    4
    Buzz
    ...
*/
function fizzBuzz() {
  // YOUR CODE HERE
}

// FUNCTION FIZZBUZZ: EXTENSION
/*
  The same as above but...
  For numbers divisible by both 3 and 5 print "FizzBuzz" instead.
  Example:
    ...
    9
    Buzz
    11
    Fizz
    13
    14
    FizzBuzz
    ...
*/
function fizzBuzzExtension() {
  // YOUR CODE HERE
}

// FUNCTION CHESSBOARD
/*
  Write a program that creates a string that represents an 8x8 grid,
  using new-line characters to separate lines. At each position of the grid
  there is either a space or a # character. The characters should form
  a chessboard. Passing this string to console.log should show something like:

  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #

*/
function chessboard() {
  // YOUR CODE HERE
}

// FUNCTION CHESSBOARD: EXTENSION
/*
 Modify your above chessboard function to define a binding `size = 8` and
 change the program so that it works for any size, outputting a grid
 of the given width and height where with and height are both equal to size.

 Note: in the below example and for the tests we are using the parameter `size`
 as our binding. This way we can call `chessboardExtension(8)` and it would print
 the standard 8x8 sized board. If you are unclear on functions feel free to
 continue to Chapter 3: Functions, and then come back to complete this later on.
*/
function chessboardExtension(size) {
  // YOUR CODE HERE
}

module.exports = {
  triangle, fizzBuzz, fizzBuzzExtension, chessboard, chessboardExtension,
};
