// 🧩 1. Convert a string into an array of characters in uppercase
const word = "javascript";
let arr = Array.from(word, function (ele) {
  return ele.toUpperCase();
});
console.log(arr); // ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T']
console.log("\n".repeat(4));

// 🧩 2. Convert a Set to an array and double each number
const numbers = new Set([2, 4, 6]);
const doubbled = Array.from(numbers, (x) => x * 2);
console.log(doubbled);
console.log("\n".repeat(4));

// 🧩 4. Convert arguments into an array and print its length
function countArgs() {
  console.log(Array.from(arguments));
}
countArgs(1, 2, 3, 4); // Output: 4
console.log("\n".repeat(4));

// 🧩 5. Create an array of squares from 1 to 5
const sq = new Set([1, 2, 3, 4, 5]);
const squared = Array.from(sq, (x) => x ** 2);
console.log(squared);

// Array Within
let myArray = [10, 20, 30, 40, 50, "A", "B"];
myArray.copyWithin(1, -2, -1);
console.log(myArray);
// [10, "A", 30, 40, 50, "A", "B"];
