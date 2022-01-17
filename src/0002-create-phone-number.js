function createPhoneNumber(numbers) {
  let part1 = "";
  let part2 = "";
  let part3 = "";

  for (const [i, v] of numbers.entries()) {
    if (i <= 2) part1 += v;
    if (i > 2 && i <= 5) part2 += v;
    if (i > 5) part3 += v;
  }

  return `(${part1}) ${part2}-${part3}`;
}

function createPhoneNumberSolution1(numbers) {
  let format = "(xxx) xxx-xxxx";

  for (const n of numbers) {
    format = format.replace("x", n);
  }

  return format;
}

function createPhoneNumberSolution2(numbers) {
  numbers = numbers.join("");

  const part1 = numbers.substring(0, 3);
  const part2 = numbers.substring(3, 6);
  const part3 = numbers.substring(6);

  return `(${part1}) ${part2}-${part3}`;
}

function createPhoneNumberSolution3(numbers) {
  return numbers.join("").replace(/(...)(...)(.*)/g, "($1) $2-$3");
}

module.exports = {
  createPhoneNumber,
  createPhoneNumberSolution1,
  createPhoneNumberSolution2,
  createPhoneNumberSolution3,
};
