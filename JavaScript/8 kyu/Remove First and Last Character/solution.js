// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

const removeChar = str => str.substring(1, str.length-1);