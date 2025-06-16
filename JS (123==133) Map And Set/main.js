// 🧩 1. Clone the array and add a new number at the end
const nums = [10, 20, 30];
console.log([...nums, 40]);
// Expected output: [10, 20, 30, 40]

console.log("\n".repeat(3));

// 2.🧩 Merge two objects into one
const user = { name: "Zain" };
const info = { age: 25, country: "Jordan" };
console.log({ ...user, ...info });
// Expected output:
// { name: "Zain", age: 25, country: "Jordan" }

console.log("\n".repeat(3));

// 3. 🧩 Convert this string into an array of characters
const word = "spread";
console.log([...word]);
// Expected output:
// ["s", "p", "r", "e", "a", "d"]

console.log("\n".repeat(3));

// 🧩 4. Remove duplicates from this array
const numbers = [5, 3, 5, 2, 3, 8, 2];
const unique = new Set(numbers);
console.log([...unique]);
// Expected output: [5, 3, 2, 8]

console.log("\n".repeat(5));
console.log("\n Elzero Assignments");
console.log("\n".repeat(2));

// التكليف 01

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
// Print the whole Set
console.log(setOfNumbers); // Expected: Set(3) {10, 20, 2}
// Print the last element
console.log([...setOfNumbers].pop()); // Expected: 2

console.log("\n".repeat(2));

// التكليف 02

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// First, create a Set to remove duplicates
let uniqueFriends = new Set(myFriends);
// Then, sort the Set by converting it back to an array
console.log([...uniqueFriends].sort());
console.log("\n".repeat(2));

// التكليف 03

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let map = new Map(Object.entries(myInfo));
console.log(map); // ✅ Prints the Map content
console.log(map.size); // ✅ Prints number of elements (3)
console.log(map.has("role")); // ✅ Checks if "role" exists (true)

console.log("\n".repeat(2));

// التكليف 04

let theNumber = 100020003000;

console.log(
  Number(
    [...new Set((100020003000).toString())]
      .filter((char) => char !== "0")
      .join("")
  )
);

// let solution = theNumber.toString();
// let filtler = new Set(solution);
// filtler.delete("0");
// let result = [...filtler].join("");
// console.log(Number(result));

// Output: 123
console.log("\n".repeat(2));

// التكليف 05

let theName = "Elzero";
// Needed Output in  5 different ways : ['E', 'l', 'z', 'e', 'r', 'o']

console.log([...theName]); // 1st solution
console.log(theName.split("")); // 2nd solution
console.log(Array.from(theName)); // 3rd solution

let result = [];
for (let char of theName) {
  result.push(char);
}
console.log(result); // 4th solution

let risultato = [];
[...theName].forEach((char) => risultato.push(char));
console.log(result); // 5th solution

console.log("\n".repeat(2));


// Assignment-6

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// chars.sort();
// chars.copyWithin(0, 3, 6);

// console.log(chars);

// // Needed Output
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// chars.sort();
// chars.copyWithin(0, 4, 8);

// console.log(chars);

// // Needed Output
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

chars.copyWithin(2);

console.log(chars);

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]


// التكليف 07 : Join Arrays in 3 ways

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log([...arr1, ...arr2]); // solution 1
let merged1 = arr1.concat(arr2);

console.log(merged1); // solution 2

let merged2 = [arr1, arr2].flat();
console.log(merged2); // solution 3

console.log("\n".repeat(2));

// التكليف 08 challenge

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1)) * [...n1, ...n2].length);
// Needed Output
// 210

