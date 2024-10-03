const ps = require("prompt-sync");
const prompt = ps();

// Created by Eric Kopy- u2483667
const num1 = 5; // These values have two constants and give them different values which can be changed.
const num2 = 3;
const sum = num1 + num2;  // The sum: Number 1 and 2 added together.
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum); // answer gets stored in the "sum".
const number = parseInt(prompt("Enter a number: ")); 
// Check if a number is Positive, Negative, or Zero
const numberToCheck = 7; // Value can be checked. 

if (numberToCheck > 0) {  // Instruction that checks if the number is greater than.
    console.log(numberToCheck + " is a positive number."); // checks if the number is positive.
} else if (numberToCheck < 0) {    // Uses an If statement to check
    console.log(numberToCheck + " is a negative number."); // checks if the number is negative.
} else {
    console.log(numberToCheck + " is zero."); // Instruction commands the system to check if the selected number is 0 or not.
}