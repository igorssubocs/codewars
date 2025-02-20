// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

// https://www.codewars.com/kata/5426d7a2c2c7784365000783

function balancedParens(n) {
  const result = [];
  
  function generate(current, openCount, closeCount) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        
        if (openCount < n) {
            generate(current + '(', openCount + 1, closeCount);
        }
        
        if (closeCount < openCount) {
            generate(current + ')', openCount, closeCount + 1);
        }
    }
    
    generate('', 0, 0);
    
    return result;
}