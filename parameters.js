"use strict";
// ======QUESTION 4.1============
function findMax(param1, param2, param3) {
  const numbers = [param1, param2, param3];
  const sorted = numbers.toSorted((a, b) => a - b);
  return sorted.at(-1);
}
console.log(findMax(4, 2, 6));

// ======QUESTION 4.2============
function greetWithTitle(name, title = "Friend") {
  return `Hello ${title} ${name}`;
}
console.log(greetWithTitle("Dennis", "Mr"));

// ======QUESTION 4.3============
function calculateTotal(price, taxRate = 0) {
  const tax = (price * taxRate) / 100;
  return price + tax;
}
console.log(calculateTotal(560, 2.75));

// ======QUESTION 4.4============
function buildEmail(username, domain) {
  if (!domain.includes(".")) {
    return `Please provide a valid domain`;
  }
  return `${username}@${domain}`;
}
console.log(buildEmail("murimi", "gmail.com"));
console.log(buildEmail("dennis", "kebenei.com"));
