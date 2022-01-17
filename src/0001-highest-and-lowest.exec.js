/**
 * In this little assignment you are given a string of space
 * separated numbers, and have to return the highest and lowest number.
 */

const {
  highAndLow,
  highAndLowSolution1,
  highAndLowSolution2,
} = require("./0001-highest-and-lowest");

console.time("#MyVersion");
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.timeEnd("#MyVersion");

console.time("#Solution1");
console.log(highAndLowSolution1("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.timeEnd("#Solution1");

console.time("#Solution2");
console.log(highAndLowSolution2("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.timeEnd("#Solution2");
