/**
 * Make a program that filters a list of strings and returns a list with only your friends name in it.
 * If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
 * Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
 */

const { friend, friendSolution1 } = require("../challenge/0003-friend-or-foe");
const { execMethod } = require("../helpers/exec-method");

execMethod("#MySolution", friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));

execMethod(
  "#Solution1",
  friendSolution1(["Ryan", "Jimmy", "123", "4", "Cool Man"])
);
