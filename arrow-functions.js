"use strict";
// ======QUESTION 3.1============
const square = number => `Square: ${number * number}`;
console.log(square(8));

// ======QUESTION 3.2============
const calculateDiscount = (price, discountPercentage) => {
  const discount = (price * discountPercentage) / 100;
  return `Buying Price: ${price - discount}`;
};
console.log(calculateDiscount(230, 5));

// ======QUESTION 3.3============
const double = number => `Double: ${number * 2}`;
console.log(double(4));

// ======QUESTION 3.4============
const createUser = (name, email) => ({ name, email });
console.log(createUser("Dennis", "deno@gmail.com"));
