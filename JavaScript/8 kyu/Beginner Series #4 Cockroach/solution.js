// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

function cockroachSpeed(s) {
  return Math.floor(s * 100000 / 3600);
}