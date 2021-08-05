// HACKERRANK > 10 Days of Javascript > Day 1: Functions

/*
 * Create the function factorial here
 */
function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  }
  return 1;
}

console.log(factorial(4));
