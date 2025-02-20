// Write a function which calculates the average of the numbers in a given array.

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}