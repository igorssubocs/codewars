// Implement a function that takes a word as input and returns the correct number.

// EXAMPLE
// For the word lettuce, the repeated letter is t, which is the 20th letter in the alphabet.

// The correct answer is 20 × 3 = 60.

// NOTE
// You may assume that the given string will

// always contain exactly one pair of consecutive identical letters.

// consist only of lowercase English letters.

// https://www.codewars.com/kata/5c563cb78dac1951c2d60f01

function passTheDoorMan(word){
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) return (word.charCodeAt(i) - 96) * 3;
  }
}
