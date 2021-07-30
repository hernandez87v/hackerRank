// HACKERRANK > 10 Days of Javascript > Day 2: Loops

// var random = 'Hello there 12563';

// const re = /hello/gi;

// console.log(re.test(random));
// console.log(re.exec(random));
// console.log(random.match(re)); // array of matched word
// console.log(random.search(re)); // position of where word is found
//--------------------------

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  var re = /^([aeiou]).+\1$/;
  /*
   * Do not remove the return statement
   */
  return re;
}
