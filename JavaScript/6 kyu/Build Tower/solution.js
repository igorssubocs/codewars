// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

const towerBuilder= (nFloors) => {
  let tower = [];

  for (let i = 0; i < nFloors; i++) {
    let spaces = " ".repeat(nFloors - i - 1);
    let stars = "*".repeat(2 * i + 1);
    tower.push(spaces + stars + spaces);
  }

  return tower;
}