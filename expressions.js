"use strict";

// ======QUESTION 2.1============
const multiply = function (param1, param2) {
  return param1 * param2;
};
console.log(multiply(34, 53));

// ======QUESTION 2.2============
const getFullName = function (firstName, secondName) {
  return `${firstName} ${secondName}`;
};
console.log(getFullName("dennis", "njeru"));

// ======QUESTION 2.3============
const celsiusToFahrenheit = function (celcius) {
  return `${(celcius * 9) / 5 + 32} Fahrenheit.`;
};
console.log(celsiusToFahrenheit(25));
