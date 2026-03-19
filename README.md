# JavaScript Functions Beginner Exercises

This series of problems will help you practice and get comfortable working with all the three types of javascript functions, passing arguments, the
return keyword and functions calling other functions.

## Table of Contents

- [JavaScript Functions Beginner Exercises](#javascript-functions-beginner-exercises)
  - [Table of Contents](#table-of-contents)
  - [Function Expressions](#function-expressions)
  - [Arrow Functions](#arrow-functions)
  - [Parameters and Arguments](#parameters-and-arguments)
  - [Understanding the `return` keyword](#understanding-the-return-keyword)
  - [Functions Calling other functions](#functions-calling-other-functions)
  - [Mixed Challenges](#mixed-challenges)
  - [Extra Challenges (Bonus)](#extra-challenges-bonus)

**Exercise 1.2: Calculate Rectangle Area**  
Create a function called `calculateArea` that takes `length` and `width` as parameters and returns the
area of a rectangle. Test it with different values.

**Exercise 1.3: Check Even or Odd**  
Write a function called `isEven` that takes a `number` as a parameter and returns `true` if the number is
even, and `false` if it's odd.

**Exercise 1.4: Sum of Two Numbers**  
Create a function called `add` that takes two numbers and returns their sum. This is a basic function to
practice parameters and return values.

## Function Expressions

**Exercise 2.1: Storing Functions in Variables**  
Create a function expression (not a declaration) called `multiply` that takes two parameters and returns
their product. Assign it to a variable.

**Exercise 2.2: Anonymous Function Expression**  
Create an anonymous function expression stored in a variable called `getFullName` that takes
`firstName` and `lastName` as parameters and returns them combined with a space.

**Exercise 2.3: Convert Celsius to Fahrenheit**  
Write a function expression called `celsiusToFahrenheit` that converts a temperature from Celsius to
Fahrenheit using the formula: (C × 9/5) + 32

## Arrow Functions

**Exercise 3.1: Basic Arrow Function**  
Write an arrow function called `square` that takes a `number` and returns its square (number × number).

**Exercise 3.2: Arrow Function with Multiple Parameters**  
Create an arrow function called `calculateDiscount` that takes a `price` and `discount` percentage, and
returns the final price after applying the discount.

**Exercise 3.3: Arrow Function with Single Parameter (No Parentheses)**  
Write an arrow function called `double` that takes one number and returns it multiplied by 2.
Remember: you can omit parentheses when there's only one parameter.

**Exercise 3.4: Arrow Function Returning an Object**  
Create an arrow function called `createUser` that takes `name` and `email`, and returns an object with
these properties. Remember: when returning an object, wrap it in parentheses.

## Parameters and Arguments

**Exercise 4.1: Function with Multiple Arguments**  
Write a function called `findMax` that takes three numbers as arguments and returns the largest one.

**Exercise 4.2: Default Parameters**  
Create a function called `greetWithTitle` that takes `name` and `title` as parameters. The title should have
a default value of 'Friend' if no title is provided.

**Exercise 4.3: Function with Optional Parameters**  
Write a function called `calculateTotal` that takes a `price` and an optional `tax rate` parameter. If no tax
rate is provided, use 0. Return price + (price × tax rate).

**Exercise 4.4: Arguments in Different Orders**  
Create a function called `buildEmail` that takes `username` and domain as parameters. Call this
function with different arguments and verify it works correctly

## Understanding the `return` keyword

**Exercise 5.1: Return Different Data Types**  
Write a function called `getInfo` that returns different data types based on an input parameter.
Example: if input is 'number', return a number; if 'string', return a string.

**Exercise 5.2: Return Boolean Values**  
Create a function called `isPositive` that takes a number and returns true if it's positive, false
otherwise. This demonstrates returning boolean values.

**Exercise 5.3: Return Arrays**  
Write a function called `getCoordinates` that takes x and y values and returns them as an array [x, y].

**Exercise 5.4: Return Objects**  
Create a function called `createStudent` that takes `name`, `studentID`, and `grade`, and returns an object
containing all three properties.

**Exercise 5.5: Early Return (Return with Conditions)**  
Write a function called `validatePassword` that takes a password string. Return 'Too short' if less than
8 characters, 'Valid' if 8+ characters. Use early return.

## Functions Calling other functions

**Exercise 6.1: Simple Function Chain**  
Create two functions:`addFive` (takes number, adds 5) and `double` (takes number, multiplies by 2).
Then create a function called `addFiveThenDouble` that calls both functions in sequence.

**Exercise 6.2: Calculate Total Price with Helper Functions**  
Write a function `applyDiscount` that takes price and discount. Write another function `applyTax` that
takes price and tax rate. Create a function `calculateFinalPrice` that uses both functions.

**Exercise 6.3: Nested Function Calls**  
Create three functions: `getBasePrice` (returns a number), applyDiscount (takes price, returns
discounted price), and `main` that calls `getBasePrice` and passes the result to `applyDiscount`.

**Exercise 6.4: Building a Calculator**  
Write individual functions for `addition`, `subtraction`, `multiplication`, and `division`. Then create a
`calculate function` that takes two numbers and an operation, and calls the appropriate function based
on the operation

## Mixed Challenges

**Exercise 7.1: Temperature Converter**  
Create two functions: `celsiusToFahrenheit` and `fahrenheitToCelsius`. Create a function
`convertTemperature` that takes temperature, current unit ('C' or 'F'), and target unit, then calls the
appropriate conversion function.

**Exercise 7.2: Grade Calculator**  
Write a function `calculateGrade` that takes three test scores. Create another function `getLetterGrade`
that takes an average and returns the letter grade (A, B, C, D, F). The main function should calculate
average and call `getLetterGrade`.

**Exercise 7.3: Budget Planner**  
Create functions: `calculateMonthlyBudget` (takes annual income), `allocateFunds` (takes budget and
categories), and `displayBudget` (displays result). Chain these functions together.

**Exercise 7.4: User Registration**  
Create functions: `validateEmail` (checks if email contains @), `validatePassword` (checks if 8+
characters), and `registerUser` (takes email, password, name and calls validation functions before
creating a user object).

**Exercise 7.5: All Function Types in One Project**  
Create a simple `shopping cart function`: Use a function declaration for initialization, a function
expression for adding items, and arrow functions for calculating totals and applying discounts. Make
functions call each other to process an order

## Extra Challenges (Bonus)

**Bonus 1: Factorial Calculator**
Write a function called `factorial` that takes a number and returns its factorial. Example: factorial(5) = 5
× 4 × 3 × 2 × 1 = 120

**Bonus 2: String Manipulation**
Create a function called `reverseString` that takes a string and returns it reversed. Then create a
function `isPalindrome` that uses reverseString to check if a word reads the same forwards and
backwards.

**Bonus 3: Array Processing**
Write a function called `findAverage` that takes an array of numbers and returns the average. Create
another function `getGrade` that uses findAverage to determine a grade.
