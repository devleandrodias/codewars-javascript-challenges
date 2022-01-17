function highAndLow(numbers) {
  const arrayOfNumbers = numbers
    .split(" ")
    .map((x) => Number(x))
    .sort((a, b) => a - b);

  const low = arrayOfNumbers[0];

  const high = arrayOfNumbers[arrayOfNumbers.length - 1];

  return `${high} ${low}`;
}

function highAndLowSolution1(numbers) {
  numbers = numbers.split(" ").map(Number);
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLowSolution2(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max.apply(0, numbers)} ${Math.min.apply(0, numbers)}`;
}

module.exports = { highAndLow, highAndLowSolution1, highAndLowSolution2 };
