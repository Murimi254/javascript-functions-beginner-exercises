"use strict";
// ======QUESTION 5.1============
function getInfo(param) {
  return typeof param;
}
console.log(getInfo(85));

// ======QUESTION 5.2============
function isPositive(number) {
  if (number >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isPositive(-6));

// ======QUESTION 5.3============
function getCoordinates(x, y) {
  return [x, y];
}
console.log(getCoordinates(45.6, 23.5));

// ======QUESTION 5.4============
function createStudent(name, studentId, grade) {
  return { name, studentId, grade };
}
console.log(createStudent("Dennis", "2517", "A"));

// ======QUESTION 5.5============
function validatePassword(password) {
  if (password.length < 8) {
    return "Password too Short";
  } else {
    return "Valid password.";
  }
}
console.log(validatePassword("password123"));
