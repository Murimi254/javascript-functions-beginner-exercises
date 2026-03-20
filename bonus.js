"use strict";

// ====================================== BONUS 1 =========================================
function factorial(number) {
  let product = 1;
  for (let i = number; i > 0; i--) {
    product = product * i;
  }
  return product;
}
console.log(factorial(5));

// ====================================== BONUS 2 =========================================
function reverseString(string) {
  const reversedString = string.toLowerCase().split("").reverse().join("");
  return reversedString;
}

function isPalindrome(string) {
  const reversedString = reverseString(string);
  if (reversedString === string.toLowerCase()) {
    return `${string} is Palindrome✅`;
  }
  return `${string} is not Palindrome❌`;
}

console.log(isPalindrome("RaceCar"));
console.log(isPalindrome("money"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("level"));

// ====================================== BONUS 3 =========================================
function findAverage(numbers) {
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  return sum / numbers.length;
}

const getGrade = averageScore => {
  if (averageScore >= 90) return "A";
  if (averageScore >= 65) return "B";
  if (averageScore >= 50) return "C";
  if (averageScore >= 40) return "D";
  if (averageScore >= 0) return "F";
  return "Invalid average score";
};

console.log(getGrade(findAverage([84, 56, 78, 23, 67, 85, 50, 40])));
