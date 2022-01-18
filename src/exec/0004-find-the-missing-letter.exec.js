/**
 * #Find the missing letter
 *
 * Write a method that takes an array of consecutive (increasing) letters as
 * input and that returns the missing letter in the array.
 *
 * You will always get an valid array. And it will be always exactly one letter
 * be missing. The length of the array will always be at least 2.
 *
 * The array will always contain letters in only one case.
 *
 * Example: ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
 */

const {
  findMissingLetter,
  findMissingLetterSolution1,
  findMissingLetterSolution2,
} = require("../challenge/0004-find-the-missing-letter");

const { execMethod } = require("../helpers/exec-method");

execMethod("#MySolution", findMissingLetter(["a", "b", "c", "d", "f"]));
execMethod("#MySolution", findMissingLetter(["O", "Q", "R", "S"]));

execMethod("#Solution1", findMissingLetterSolution1(["a", "b", "c", "d", "f"]));
execMethod("#Solution1", findMissingLetterSolution1(["O", "Q", "R", "S"]));

execMethod("#Solution2", findMissingLetterSolution2(["a", "b", "c", "d", "f"]));
execMethod("#Solution2", findMissingLetterSolution2(["O", "Q", "R", "S"]));
