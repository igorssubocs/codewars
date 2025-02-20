// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// https://www.codewars.com/kata/559590633066759614000063

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}