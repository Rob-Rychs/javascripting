// common interview whiteboard question "balanced parens problem"
// for '()()()()' are parentheses balanced?
// are '(((())))' are these?

// given a string that contains some number of parentheses, are they balanced?
function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    if (previous < 0) { return previous; }
    if (char === '(') { return ++previous; }
    if (char === ')') { return --previous; }
    return previous;
  }, 0);
}

balancedParens('((((');
balancedParens('(((())))');
balancedParens('(())()');
balancedParens(')(())(');