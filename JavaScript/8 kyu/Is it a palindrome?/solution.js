// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
  x = x.toLowerCase();
  return x === x.split('').reverse().join('');
}