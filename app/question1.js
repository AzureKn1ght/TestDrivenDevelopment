/*
- Problem 7 - 
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

Source: https://projecteuler.net/problem=7
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
