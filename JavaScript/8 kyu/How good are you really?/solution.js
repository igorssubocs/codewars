// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
  let totalScore = 0;
  for (let i = 0; i < classPoints.length; i++) {
    totalScore += classPoints[i];
  }
  const average = totalScore / classPoints.length;
  return yourPoints > average;
}