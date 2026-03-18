"use strict";
// ======QUESTION 6.1============
const addFive = number => number + 5;
const double = number => number * 2;
function addFiveThenDouble(number) {
  const numberPlusFive = addFive(number);
  const doubledNumber = double(numberPlusFive);
  return doubledNumber;
}
console.log(addFiveThenDouble(5));

// ======QUESTION 6.2============
const applyDiscount = (price, percentageDiscount) => {
  const discount = (price * percentageDiscount) / 100;
  return price - discount;
};

const applyTax = (price, taxRate) => {
  const tax = (price * taxRate) / 100;
  return price + tax;
};

function calculateFinalPrice(price, percentageDiscount, taxRate) {
  const discountedPrice = applyDiscount(price, percentageDiscount);
  const finalPrice = applyTax(discountedPrice, taxRate);
  return finalPrice;
}
console.log(calculateFinalPrice(200, 10, 3.4));

// ======QUESTION 6.3============
const getBasePrice = () => 600; //Can return any value of your choice
const applyDiscount2 = price => price - (price * 5) / 100;
const main = () => applyDiscount2(getBasePrice());
console.log(main());

// ======QUESTION 6.4============
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
function calculate(num1, num2, operation) {
  switch (operation) {
    case "add":
      const sum = add(num1, num2);
      return sum;
    case "subtract":
      const difference = subtract(num1, num2);
      return difference;
    case "multiply":
      const product = multiply(num1, num2);
      return product;
    case "divide":
      const result = divide(num1, num2);
      return result;
    default:
      return "Invalid Operation";
  }
}
console.log("------------------------------------------------------");
console.log(calculate(34, 10, "add"));
console.log(calculate(34, 10, "subtract"));
console.log(calculate(34, 10, "multiply"));
console.log(calculate(34, 10, "divide"));
