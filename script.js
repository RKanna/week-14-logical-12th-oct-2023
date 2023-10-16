"use strict";

//1.Write a JavaScript function isPrime(n) that takes an integer n as input and returns true if n is a prime number, and false if it is not.

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
};
console.log(isPrime(15));
console.log(isPrime(23));
console.log(isPrime(1));

//2.Write a JavaScript function reverseString(str) that takes a string str as input and returns the reverse of the string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));
console.log(reverseString(""));

//3.Write a JavaScript function calculateFactorial(n) that calculates the factorial of a non-negative integer n.
const calculateFactorial = (n) => {
  if (n < 0) return "Factorial is undefined for negative numbers";
  return n <= 1 ? 1 : n * calculateFactorial(n - 1);
};
console.log(calculateFactorial(5));
console.log(calculateFactorial(0));

//4.Write a JavaScript function isPalindrome(str) that checks if a given string str is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("Hello, World!"));
console.log(isPalindrome("A man a plan a canal Panama"));

//5.Write a JavaScript function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string str.
function countVowels(str) {
  const vowelCount = (str.match(/[aeiouAEIOU]/g) || []).length;
  return vowelCount;
}
console.log(countVowels("The quick brown fox"));
console.log(countVowels("Rhythm"));

//6.Write a JavaScript function findMax(arr) that finds and returns the maximum number in an array arr.
const findMax = (arr) =>
  arr.length ? arr.reduce((max, current) => Math.max(max, current)) : undefined;
console.log(findMax([9, 23, 5, 17, 11]));
console.log(findMax([-1, -5, -2, -8, -3]));

//7.Write a JavaScript function reverseWords(str) that reverses the order of words in a given string str.
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("A B C D E"));
console.log(reverseWords("SingleWord"));

//8.Write a JavaScript function isLeapYear(year) that determines whether a given year year is a leap year. A leap year is divisible by 4, but not divisible by 100 unless it is also divisible by 400.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2100));
console.log(isLeapYear(2000));
console.log(isLeapYear(2022));
