// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  const numArray = numbers.split(" ").map(Number);
  const max = Math.max(...numArray);
  const min = Math.min(...numArray);
  return `${max} ${min}`
}