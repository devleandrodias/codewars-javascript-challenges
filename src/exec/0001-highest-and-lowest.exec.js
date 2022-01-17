/**
 * In this little assignment you are given a string of space
 * separated numbers, and have to return the highest and lowest number.
 */

const {
  highAndLow,
  highAndLowSolution1,
  highAndLowSolution2,
} = require("../challenge/0001-highest-and-lowest");

const { execMethod } = require("../helpers/exec-method");

execMethod("#MyVersion", highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
execMethod("#Solution1", highAndLowSolution1("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
execMethod("#Solution2", highAndLowSolution2("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
