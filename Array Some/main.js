// 🧩 1. Check if an array contains any negative numbers
// Expected output: true
const numbers = [3, 7, -2, 8, 5];
let checkNeg = numbers.some((num) => num < 0);
console.log(checkNeg);
console.log("\n".repeat(3));

// 🧩 2. Check if any name is shorter than 4 characters
// Expected output: true

let names = ["Ali", "Zara", "Mohammed", "Sal"];
let longNames = names.some((name) => name.length < 4);
console.log(longNames);
console.log("\n".repeat(3));

// 🧩 3. Check if any product is out of stock
// Expected output: true

let products = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
  { name: "Keyboard", inStock: true },
];
let checkProducts = products.some((product) => product.inStock === false);
console.log(checkProducts);
console.log("\n".repeat(3));

// 🧩 4. Check if any number is a multiple of 10
// ✅ Use `some()` with an arrow function
// ✅ Check if any number is divisible by 10

// Expected output: true
const nums = [3, 15, 22, 40, 8];
let divisibleByTen = nums.some((num) => num % 10 === 0);
console.log(divisibleByTen);
