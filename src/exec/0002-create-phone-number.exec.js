/**
 * Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 */

const {
  createPhoneNumber,
  createPhoneNumberSolution1,
  createPhoneNumberSolution2,
  createPhoneNumberSolution3,
} = require("../challenge/0002-create-phone-number");

const { execMethod } = require("../helpers/exec-method");

execMethod("#MySolution", createPhoneNumber([1, 8, 2, 6, 7, 8, 9, 6, 4, 1]));

execMethod(
  "#Solution1",
  createPhoneNumberSolution1([1, 8, 2, 6, 7, 8, 9, 6, 4, 1])
);

execMethod(
  "#Solution2",
  createPhoneNumberSolution2([1, 8, 2, 6, 7, 8, 9, 6, 4, 1])
);

execMethod(
  "#Solution3",
  createPhoneNumberSolution3([1, 8, 2, 6, 7, 8, 9, 6, 4, 1])
);
