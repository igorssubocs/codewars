// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

// https://www.codewars.com/kata/57a386117cb1f31890000039

const parseF = s => isNaN(Number.parseFloat(s)) ? null : Number.parseFloat(s);