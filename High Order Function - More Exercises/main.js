//                >>>>>>>>>>>>>>>>>>>      map()          <<<<<<<<<<<<<<<<<<<<

//  1- Capitalize the First letter

let names = ["alice", "farid", "mario", "foad"];
let capitalizedNames = names.map(function (ele) {
  return ele.charAt(0).toUpperCase() + ele.slice(1);
});
console.log(capitalizedNames);

// 2- Convert an Array  of Prices from Dollars to Euros.
const PricesInDollars = [300, 20, 30, 40, 50];
let pricesInEuro = PricesInDollars.map(function (Price) {
  return Price * 0.9;
});

console.log(pricesInEuro);

console.log("################");

//                >>>>>>>>>>>>>>>>>>>      filter()          <<<<<<<<<<<<<<<<<<<<

//  Exercise 1: Filter Out Short Words: You are given an array of words. Use filter() to return a new array that only contains words with more than 4 letters.

let words = ["book", "pencil", "cat", "notebook", "pen"];

let shortWords = words.filter(function (ele) {
  return ele.length > 4;
});
console.log(shortWords); // ["pencil", "notebook"]
console.log("################");

// Exercise 2: Filter Out Adults Use filter() to create a new array that only includes the ages 18 and above (i.e., adults).

const ages = [12, 17, 18, 21, 16, 30, 14, 25];
const filteredAges = ages.filter(function (age) {
  return age >= 18;
});
console.log(filteredAges); // [18, 21, 30, 25]
console.log("################");

// Exercise 3: Filter Words That Start with a Vowel
let mix = [
  "apple",
  "banana",
  "orange",
  "umbrella",
  "grape",
  "Elephant",
  "kiwi",
];

// Use filter to keep only the words that start with a vowel
let filteredWords = mix.filter(function (word) {
  // Get the first character of the word and convert it to lowercase
  let firstChar = word.charAt(0).toLowerCase();

  // Check if the first character is a vowel
  // If it is, return true (keep the word in the new array)
  // If not, return false (remove the word)
  return ["a", "e", "i", "o", "u"].includes(firstChar);
});

console.log(filteredWords);
// Output: ["apple", "orange", "umbrella", "Elephant"]
console.log("################");

// Exercise 4: Filter Out Negative Numbers
const numbers = [10, -5, 20, -3, 0, 15, -8];
const positiveNumbers = numbers.filter(function (posNum) {
  return posNum >= 0;
});
console.log(positiveNumbers);
console.log("@##@#@#@#@##@#@#@#@##@#@#@#@##@#@#@#@##@");

//                >>>>>>>>>>>>>>>>>>>      reduce()          <<<<<<<<<<<<<<<<<<<<

// Exercise 1: Find the Total Price
const prices = [5, 10, 7, 3, 12];
const totalPrice = prices.reduce(function (acc, num) {
  return acc + num;
});
console.log(totalPrice); // 37
console.log("################");

// Exercise 2: Exercise: Find the Longest Word

const friuts = ["apple", "banana", "cherry", "Watermelon"];

const longestWord = friuts.reduce(function (acc, fr) {
  return acc.length > fr.length ? acc : fr;

  /*
  First comparison:   acc = "apple", fr = "banana" → "banana" is longer → new acc = "banana"
  Next:   acc = "banana", fr = "cherry" → same length → keep "banana"
  Next:   acc = "banana", fr = "Watermelon" → "Watermelon" is longer → new acc = "Watermelon"
  Final result: "Watermelon"
  */
}, "");
console.log(longestWord);
console.log("################");

// Exercise 3: Get the Maximum Number

let Nums = [8, 3, 22, 5, 13, 7];
let biggestN = Nums.reduce(function (acc, num) {
  return acc > num ? acc : num;
});
console.log(biggestN);
console.log("################");

//     >>>>>>>>>>>>>>     filter()    &  reduce()   <<<<<<<<<<<<<<<<<<<
// Exercise 1: Sum of Even Numbers

let Numbers = [10, 15, 20, 25, 30, 35, 40];
let finalR = Numbers.filter(function (num) {
  return num % 2 === 0;
}).reduce(function (acc, num) {
  return acc + num;
});
console.log(finalR);
console.log("################");

// Exercise 2: Sum of Positive Numbers Greater Than 10
const mixedNums = [5, 12, -3, 7, 15, 22, -10, 9];
const result = mixedNums
  .filter(function (num) {
    return num > 10 && num > 0; // Check for positive numbers greater than 10
  })
  .reduce(function (acc, num) {
    return acc + num;
  });
console.log(result);
console.log("################");

// Exercise 3: Product of Odd Numbers > get only the odd numbers and multiply them together.

let nN = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Filter out only the odd numbers, and then calculate the product of those numbers
let productOfOddNumbers = nN
  // Filter to get only odd numbers
  .filter(function (num) {
    return num % 2 !== 0; // Odd numbers have a remainder when divided by 2
  })
  // Reduce to calculate the product of the odd numbers
  .reduce(function (product, oddNumber) {
    return product * oddNumber; // Multiply the current product by the odd number
  });
// Output the final result (product of all odd numbers)
console.log(productOfOddNumbers); // 945
console.log("################");

//                >>>>>>>>>>>>>>>>>>>      forEach()          <<<<<<<<<<<<<<<<<<<<

// Exercise 1: Print Squares of Numbers

let NUMBERS = [2, 4, 6, 8];
NUMBERS.forEach(function (num) {
  console.log(num ** 2);
});
console.log("################");

// Exercise 2: Uppercase All Strings

let mixedNames = ["hello", "world", "javascript", "is", "awesome"];
let uppercaseNames = [];
mixedNames.forEach(function (word) {
  uppercaseNames.push(word.toUpperCase());
});
console.log(uppercaseNames); // ["HELLO", "WORLD", "JAVASCRIPT", "IS", "AWESOME"]
