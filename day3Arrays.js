// HACKERRANK > 10 Days of Javascript > Day 3: Arrays
/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/

const nums = [2, 3, 6, 6, 5];

function getSecondLargest(nums) {
  // Complete the function
  let max = -Infinity,
    result = -Infinity;

  for (const value of nums) {
    const nr = Number(value);

    if (nr > max) {
      [result, max] = [max, nr]; // save previous max
    } else if (nr < max && nr > result) {
      result = nr; // new second biggest
    }
  }
  return result;
}

console.log(getSecondLargest(nums)); // 5
