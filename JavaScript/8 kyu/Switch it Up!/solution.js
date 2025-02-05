// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp(number){
  return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number];
}