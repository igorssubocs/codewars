// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

function removeExclamationMarks(s) {
  let r = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '!') {
            r += s[i];
        }
    }
    return r;
}