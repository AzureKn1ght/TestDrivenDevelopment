import { sumOfMultiples } from "./app/sumOfMultiples.js";
import { nthPrimeNumber } from "./app/prime10001.js";
import figlet from "figlet";

// main function
const main = () => {
  try {
    //First question: Problem 7
    //What is the 10 001st prime number?
    question1(10001);

    //Second question: Problem 1
    //Find the sum of all the multiples of 3 or 5 below 1000.
    question2(1000, 3, 5);
  } catch (error) {
    console.error(error);
  }
};

// question 1 function
const question1 = (n) => {
  console.log(
    figlet.textSync("Problem 7", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );
  console.log(
    "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number?\n"
  );

  let result = nthPrimeNumber(n);
  console.log(`Answer: ${result}\n`);
};

// question 2 function
const question2 = (max, n1, n2) => {
  console.log(
    figlet.textSync("Problem 1", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );
  console.log(
    "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.\n"
  );

  let result = sumOfMultiples(max, n1, n2);
  console.log(`Answer: ${result}\n`);
};

main();
