// HACKERRANK > 10 Days of Javascript > Day 4: Create a Rectangle Object
/*
 * Complete the Rectangle function
 */
// let a = 4;
// let b = 5;

function Rectangle(a, b) {
  var obj = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };

  return obj;
}

console.log(Rectangle(4, 5));
