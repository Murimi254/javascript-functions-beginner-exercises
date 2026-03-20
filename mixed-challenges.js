"use strict";
// ======QUESTION 7.1============
const celsiusToFahrenheit = temperatureInFahrenheit => temperatureInFahrenheit * 1.8 + 32;
const fahrenheitToCelsius = temperatureInCelcius => ((temperatureInCelcius - 32) * 5) / 9;
function convertTemperature({ temperature, currentUnit, targetUnit }) {
  console.log(temperature, currentUnit, targetUnit);
  if (targetUnit === "C" && currentUnit === "F") {
    console.log("Converting to Celcius...");
    return `${fahrenheitToCelsius(temperature)} °C`;
  }

  if (targetUnit === "F" && currentUnit === "C") {
    console.log("Converting to Fahrenheit...");
    return `${celsiusToFahrenheit(temperature)} °F`;
  }
  return "Invalid Parameters. Confirm and try again.";
}
console.log(convertTemperature({ temperature: 100, currentUnit: "C", targetUnit: "F" }));

// ======QUESTION 7.2==================================================================
const calculateAverageScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const calculateLetterGrade = averageScore => {
  if (averageScore >= 90) return "A";
  if (averageScore >= 65) return "B";
  if (averageScore >= 50) return "C";
  if (averageScore >= 40) return "D";
  if (averageScore >= 0) return "F";
  return "Invalid average score";
};
function calculateGrade(score1, score2, score3) {
  const averageScore = calculateAverageScore(score1, score2, score3);
  const grade = calculateLetterGrade(averageScore);
  return `${grade} of ${Math.trunc(averageScore)} points.`;
}

console.log(calculateGrade(80, 50, 50));

// ======QUESTION 7.3==================================================================
const calculateMonthlyBudget = annualIncome => {
  const monthlyIncome = annualIncome / 12;
  const tax = 0.2 * monthlyIncome;
  return monthlyIncome - tax;
};

function allocateFunds(monthlyIncome, categories) {
  const categoryEntries = Object.entries(categories);

  const trans = categoryEntries.map(category => {
    const allocatedAmount = (category[1] * monthlyIncome) / 100;
    return [category[0], Math.round(allocatedAmount)];
  });

  return Object.fromEntries(trans);
}

function displayBudget(budget) {
  const budgetItems = Object.entries(budget);
  console.log("🫰HERE IS YOUR BUDGET🫰");
  budgetItems.map(item => {
    console.log(`${item[0]}:${item[1]}`);
  });
}

function main(annualIncome, categories) {
  //calculate monthly income
  const monthlyIncome = calculateMonthlyBudget(annualIncome);

  //Allocate the monthly budget to categories
  const allocatedBudget = allocateFunds(monthlyIncome, categories);

  //Display the budget
  displayBudget(allocatedBudget);
}

main(600_000, { Rent: 30, Food: 20, Transport: 15, Entertainment: 10, Savings: 25 });

// ======QUESTION 7.4==================================================================
const validateEmail = email => email.includes("@");
const validatePassword = password => password.length >= 8;
function registerUser(name, email, password) {
  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);

  if (isValidEmail && isValidPassword) {
    return {
      name,
      email,
      password,
    };
  }

  return "Invalid email or password";
}

console.log(registerUser("Dennis", "deno@gmail.com", "Pass@123"));

// ======QUESTION 7.5=============================================================
//create the cart.
const cart = [];

//This would be used to add items to cart
const addItemToCart = function (orderItem) {
  cart.push(orderItem);
};

const applyDiscount = totalPrice => {
  //(Assuming 5% discount on every order)
  const discount = (totalPrice * 5) / 100;
  return totalPrice - discount;
};

const calculateTotals = order => {
  // Calculate subtotals
  const subTotaledOrder = order.map(product => {
    const subtotal = product.quantity * product.price;
    return { ...product, subtotal };
  });

  //Calculate the total cost
  const totalPrice = subTotaledOrder.reduce((total, product) => total + product.subtotal, 0);
  return totalPrice;
};

//Populate the cart
addItemToCart({ productName: "Wireless Headphones", quantity: 2, price: 49.99 });
addItemToCart({ productName: "Mechanical Keyboard", quantity: 1, price: 89.99 });
addItemToCart({ productName: "USB-C Hub", quantity: 3, price: 24.99 });
addItemToCart({ productName: "Webcam HD", quantity: 2, price: 34.99 });
addItemToCart({ productName: "Mouse Pad XL", quantity: 4, price: 14.99 });

function shoppingCart(order) {
  const total = calculateTotals(order);
  const discountedTotal = applyDiscount(total);
  return Number(discountedTotal.toFixed(2));
}

console.log(shoppingCart(cart));
