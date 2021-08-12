// HACKERRANK > 10 Days of Javascript > Day 3: Throw
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

// const a = [3, 1, 2, 3];

// function isPositive(a) {
//   if (a > 0) {
//     return 'YES';
//   } else {
//     throw a === 0 ? new Error('Zero Error') : new Error('Negative Error');
//   }
// }

// Cleaner solution ---------------------
function isPositive(a) {
  return a > 0 ? 'YES' : a === 0 ? 'Zero Error' : 'Negative Error';
}

console.log(isPositive(3));
console.log(isPositive(1));
console.log(isPositive(2));
console.log(isPositive(3));
