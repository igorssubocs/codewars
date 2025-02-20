// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p){
  const digits = Array.from(String(n), Number);
  let totalSum = digits.reduce((sum, digit, index) => {
    return sum + Math.pow(digit, p + index);
  }, 0);
  return totalSum % n === 0 ? totalSum / n : -1;
}