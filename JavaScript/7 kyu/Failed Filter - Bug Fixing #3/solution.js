// Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the Filter Number function to remove all the numbers from the string.

// https://www.codewars.com/kata/55c606e6babfc5b2c500007c

let FilterNumbers = function(str) {
  return str.split('').filter(c => !c.match(/\d/)).join('');
}