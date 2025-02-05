// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hex) {
  return {
    "r": parseInt(hex.slice(1,3), 16), 
    "g": parseInt(hex.slice(3,5), 16), 
    "b": parseInt(hex.slice(5,7), 16)
    }
}