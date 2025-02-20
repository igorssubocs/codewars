// Task
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// https://www.codewars.com/kata/571effabb625ed9b0600107a

const getLength = arr => arr.length
const getFirst = arr => arr[0]
const getLast = arr => arr.splice(-1)[0];
const pushElement = arr => (arr.push(1), arr)
const popElement = arr => (arr.pop(), arr)