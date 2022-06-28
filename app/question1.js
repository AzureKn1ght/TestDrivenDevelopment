/*
- Problem 1 - 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

Source: https://projecteuler.net/problem=1
*/

// Function to find the nth prime number
export const nthPrimeNumber = (n) => {
  try {
    let numPrimes = 0;
    let result = 1;

    // loop until we find n primes
    while (numPrimes < n) {
      result++;
      if (isPrime(result)) numPrimes++;
    }

    return result;
  } catch (error) {
    console.error(error);
  }

  return null;
};

// Function to check if num is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};
