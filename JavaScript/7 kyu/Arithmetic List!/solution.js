// In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :

// first the first term in the sequence
// c the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l the number of terms that should be returned
// Useful link: Sequence

// Be sure to check out my Arithmetic sequence Kata first ;)
// Don't forget about the indexing pitfall ;)

// https://www.codewars.com/kata/541da001259d9ca85d000688

var seqlist = function(first,c,l){
  return Array.from({ length: l }, (_, i) => first + i * c);
}