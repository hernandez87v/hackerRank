// HACKERRANK > 10 Days of Javascript > Day 2: Loops

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = 'aeiou';
  let letters = '';

  for (let a of s) {
    vowels.includes(a) ? console.log(a) : (letters += a + '\n');
  }
  console.log(letters);
}

vowelsAndConsonants('javascriptloops');
