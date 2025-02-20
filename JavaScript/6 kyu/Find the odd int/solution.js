// https://www.codewars.com/kata/54da5a58ea159efa38000836

let findOdd = (A) => A.reduce((acc, num) => acc ^ num, 0);