// HACKERRANK > 10 Days of Javascript > Day 2: Conditional Statements: If-Else

// function getGrade(score) {
//   let grade;
//   // Write your code here
//   if (score < 25 && score <= 30) {
//     return 'A';
//   } else if (score < 20 && score <= 25) {
//     return 'B';
//   } else if (score < 15 && score <= 20) {
//     return 'C';
//   } else if (score < 10 && score <= 15) {
//     return 'D';
//   } else if (score < 5 && score <= 10) {
//     return 'E';
//   } else if (score <= 0 && score <= 5) {
//     return 'F';
//   }
//   return grade;
// }

// const score = 11;

function getGrade(score) {
  let grade;
  // Write your code here
  if (score <= 5) {
    grade = 'F';
  } else if (score <= 10) {
    grade = 'E';
  } else if (score <= 15) {
    grade = 'D';
  } else if (score <= 20) {
    grade = 'C';
  } else if (score <= 25) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  return grade;
}

console.log(getGrade(11));
