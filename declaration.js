"use strict";

// ======QUESTION 1.1============
function greetUser(name) {
  return `Hello ${name}! Welcome to JavaScript.`;
}
console.log(greetUser("Dennis"));

// ======QUESTION 1.2============
function calculateArea(length, width) {
  return `${length * width} m²`;
}
console.log(calculateArea(4, 5));

// ======QUESTION 1.3============
function isEven(number) {
  if (number % 2 == 0) {
    return `${number} is an even number.`;
  } else {
    return `${number} is an odd number.`;
  }
}
console.log(isEven(48658));
console.log(isEven(9485628653));

// ======QUESTION 1.4============
function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("Parameters MUST be number for addition to work as expected.");
    return `Both parameters MUST be numbers.`;
  }
  return num1 + num2;
}
console.log(add(1, 4));
