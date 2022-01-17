/**
 * Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 */

const {
  createPhoneNumber,
  createPhoneNumberSolution1,
  createPhoneNumberSolution2,
  createPhoneNumberSolution3,
} = require("./0002-create-phone-number");

console.time("#MySolution");
console.log(createPhoneNumber([1, 8, 2, 6, 7, 8, 9, 6, 4, 1]));
console.timeEnd("#MySolution");

console.time("#Solution1");
console.log(createPhoneNumberSolution1([1, 8, 2, 6, 7, 8, 9, 6, 4, 1]));
console.timeEnd("#Solution1");

console.time("#Solution2");
console.log(createPhoneNumberSolution2([1, 8, 2, 6, 7, 8, 9, 6, 4, 1]));
console.timeEnd("#Solution2");

console.time("#Solution3");
console.log(createPhoneNumberSolution3([1, 8, 2, 6, 7, 8, 9, 6, 4, 1]));
console.timeEnd("#Solution3");
