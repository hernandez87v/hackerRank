// HACKERRANK > 10 Days of Javascript > Day 1: Let and Const

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}
//--------------------------START Solution--------------------------------

function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  //   let r = readLine(r);  // this line for solution
  let r = 2.6; // this line to pass outside of HackerRank(IDE, VSCode)
  let area = PI * r * r;
  let perimeter = 2 * PI * r;
  // Print the area of the circle:
  console.log(area);
  // Print the perimeter of the circle:
  console.log(perimeter);
  //---------------------------END Solution---------------------------------
  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

console.log(main(2.6));
