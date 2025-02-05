// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

function sum (numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  return sum;
}