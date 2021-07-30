// HACKERRANK > 10 Days of Javascript > Day 3: Try, Catch, and Finally

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  var splitString = s.split('');

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join('');

  return joinArray;
}

console.log(reverseString('1234'));
