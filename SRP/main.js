const addition = require("./addition");
const subtraction = require("./subtraction");
const multiplication = require("./multiplication");
const division = require("./division");

const num1 = 10;
const num2 = 5;

console.log(`Addition: ${addition(num1, num2)}`);
console.log(`Subtraction: ${subtraction(num1, num2)}`);
console.log(`Multiplication: ${multiplication(num1, num2)}`);
console.log(`Division: ${division(num1, num2)}`);
