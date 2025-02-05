// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// https://www.codewars.com/kata/515e271a311df0350d00000f

const squareSum = numbers => numbers.reduce((sum , el) => sum + el * el,0);