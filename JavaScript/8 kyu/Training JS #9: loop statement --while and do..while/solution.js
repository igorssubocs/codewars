// Task
// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

// https://www.codewars.com/kata/57216d4bcdd71175d6000560

const padIt = (str, n) => {
  let i = 0;
  while (i < n) {
    str = (i % 2 === 0) ? '*' + str : str + '*';
    i++;
  }
  return str;
};