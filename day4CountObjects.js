// HACKERRANK > 10 Days of Javascript > Day 4: Count Objects
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
let objects = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];

function getCount(objects) {
  let n = 0;

  for (let o of objects) {
    n += o.x == o.y;
  }
  return n;
}

console.log(getCount(objects));

// Cleaner solution using reduce()-------------------------------------
// function getCount(objects) {
//   return objects.reduce((count, o) => count + (o.x == o.y), 0);
// }
