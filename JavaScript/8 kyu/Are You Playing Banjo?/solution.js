// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r" 
    ? `${name} plays banjo` 
    : `${name} does not play banjo`;
}