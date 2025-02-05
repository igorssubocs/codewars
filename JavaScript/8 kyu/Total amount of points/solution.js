// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let totalPoints = 0;
  for (let game of games) {
    const [x, y] = game.split(":").map(Number);
    if (x > y) {
      totalPoints += 3;
    } else if (x === y) {
      totalPoints += 1;
    }
  }
  return totalPoints;
}