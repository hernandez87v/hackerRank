// HACKERRANK > 10 Days of Javascript > Day 2: Conditional Statements: Switch

let s = 'adfgt';

function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
    case 'aeiou'.includes(s[0]):
      letter = 'A';
      break;
    case 'bcdfg'.includes(s[0]):
      letter = 'B';
      break;
    case 'hjklm'.includes(s[0]):
      letter = 'C';
      break;
    case 'npqrstvwxyz'.includes(s[0]):
      letter = 'D';
      break;
  }
  return letter;
}

console.log(getLetter(s));

// -------------------------------------Extra code way-----------------------------------
// function getLetter(s) {
//   let letter;
//   // Write your code here
//   let firstLetter = s.charAt(0);
//   switch (firstLetter) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       letter = 'A';
//       break;
//     case 'b':
//     case 'c':
//     case 'd':
//     case 'f':
//     case 'g':
//       letter = 'B';
//       break;
//     case 'h':
//     case 'j':
//     case 'k':
//     case 'l':
//     case 'm':
//       letter = 'C';
//       break;
//     case 'n':
//     case 'p':
//     case 'q':
//     case 'r':
//     case 's':
//     case 't':
//     case 'v':
//     case 'w':
//     case 'x':
//     case 'y':
//     case 'z':
//       letter = 'D';
//       break;
//   }
//   return letter;
// }
