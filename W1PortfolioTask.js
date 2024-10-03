//Created By Eric Kopy u2483667
const ps = require("prompt-sync");
const prompt = ps();  // Prompt package used to solve prompt not working.

// Asking the user for input
const num1 = parseFloat(prompt("Enter the first number: "));  // Enter first number
const num2 = parseFloat(prompt("Enter the second number: ")); // Enter second number

// Performs Addition
const sum = num1 + num2; // Num 1 and 2 will be numbers used for the operations.
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum); // answer stored as sum.

const difference = num1 - num2;  // Operations for the substraction of num 1 and 2.
console.log('The difference between ' + num1 + ' and ' + num2 + ' is: ' + difference);
// Console. log communicates with the development environment. 
const product = num1 * num2;
console.log('The product of ' + num1 + ' and ' + num2 + ' is: ' + product);

const quotient = num1 / num2;
console.log('The quotient of ' + num1 + ' divided by ' + num2 + ' is: ' + quotient);
 // Result of divison is here.
// Array of multiple numbers for further calculations
const numbers = [12, 6, 3];  // Adds all numbers in the array


// Addition of multiple numbers  
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('The total sum of the numbers ' + numbers.join(', ') + ' is: ' + totalSum);

// text included for view in the terminal area.
