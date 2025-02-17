// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

// https://www.codewars.com/kata/5966847f4025872c7d00015b

const averageString = str => {
  const nums = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
  let sum = 0, count = 0, word = "";
  
  for (let c of str + " ") {
    if (c === " ") {
      if (!(word in nums)) return "n/a";
      sum += nums[word];
      count++;
      word = "";
    } else word += c;
  }
  
  return count ? Object.keys(nums)[sum / count | 0] : "n/a";
}