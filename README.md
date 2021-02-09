# Eloquent JavaScript exercises
Welcome! This repo serves as a collection of the [Eloquent JavaScript](https://eloquentjavascript.net/) exercises ending each chapter. If you enjoy Eloquent JavaScript as much as I do please consider supporting the author directly by purchasing a paperback copy! 

## Where to begin
In the `exercises` directory you will find a file for each unit with the exercise prompts and some boiler-plating to get you started.

**Note:** Currently only exercises through Chapter 5: *Higher-Order Functions* have been written. As I continue reading the book exercises and companion tests will be added accordingly.

## Testing your functions
Tests are written with [Jest](https://jestjs.io/). Install via `npm install` and then simply run all tests with `npm test`. 

**Note:** Tests are skipped by default. To enable them open the corresponding file in the tests directory (i.e. ```./tests/<chapter>.test.js```) and remove the `x` before the `describe` or `test` keyword at the start of each unit block you wish to test. 
For example removing the `x` in lines 5 of 'tests/2-program-structure.test.js' releases the tests for Chapter 2 and removing the `x` on line 11 releases the first round of tests for 'Looping a Triangle'.

## Possible solutions
Included in this repo is a 'solutions' branch that has different ways I came up with to accomplish each task and examples of solutions that pass all of the corresponding tests. These are by no means an exhaustive or "one true answer". For other possible solutions check out [solutions from the author](https://github.com/marijnh/Eloquent-JavaScript/tree/master/code/solutions).

**Happy coding!**