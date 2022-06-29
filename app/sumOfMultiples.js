/*
- Problem 1 - 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

Source: https://projecteuler.net/problem=1
*/

// Sums all multiples of n1 & n2 less than max
export const sumOfMultiples = (max, n1, n2) => {
  try {
    // check if parameters are valid
    if (!validParameters(max, n1, n2)) throw "Invalid parameter(s)";
    let totalSum = 0;

    // add all natural multiples
    for (let i = 1; i < max; i++) {
      if (isMultiple(i, n1, n2)) totalSum += i;
    }

    return totalSum;
  } catch (error) {
    console.error(error);
  }

  return null;
};

const isMultiple = (num, n1, n2) => {
  if (num % n1 == 0) return true;
  if (num % n2 == 0) return true;
  return false;
};

// Function to check for invalid inputs
const validParameters = (num, n1, n2) => {
  // no negative numbers
  if (num < 0 || n1 < 0 || n2 < 0) return false;

  // no invalid ranges
  if (n1 >= num || n2 >= num) return false;
  if (n1 === n2) return false;

  return true;
};
