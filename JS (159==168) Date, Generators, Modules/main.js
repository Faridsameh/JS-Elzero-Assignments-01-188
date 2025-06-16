// Assignment One  //
let now = new Date();
let birthDay = new Date("jun 1, 1999");

let diffMs = now - birthDay.getTime(); // difference in milliseconds

// Calculate in various units
let seconds = Math.floor(diffMs / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let months = Math.floor(days / 30); // Approximate months as 30 days
let years = Math.floor(days / 365); // Approximate years as 365 days

console.log(seconds + " Seconds");
console.log(minutes + " Minutes");
console.log(hours + " Hours");
console.log(days + " Days");
console.log(months + " Months");
console.log(years + " Years");

console.log("#".repeat(50));

// Assignment Three //

let date = new Date(2022, 3, 30, 18, 13, 20);
console.log(date.toString());

let lastDay = new Date(date.getFullYear(), date.getMonth(), 0);

let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(
  `Previous Month Is ${
    monthNames[lastDay.getMonth()]
  } And Last Day Is ${lastDay.getDate()}`
);
console.log("#".repeat(50));

// Assignment 5

let start = performance.now(); // Record the start time

for (let i = 0; i <= 10000; i++) {
  console.log(i); // Print numbers from 0 to 10000
  Math.sqrt(i); // Do a square root calculation
}

let end = performance.now(); // Record the end time
console.log(`Code took ${(end - start).toFixed(0)} milliseconds`);

console.log("#".repeat(50));

// Assignment 6

function* generateSequence() {
  let value = 14;
  let step = 140;

  while (true) {
    yield value;
    value += step;
    step += 200;
  }
}

let generator = generateSequence();

console.log(generator.next()); // { value: 14, done: false }
console.log(generator.next()); // { value: 154, done: false }
console.log(generator.next()); // { value: 494, done: false }
console.log(generator.next()); // { value: 1034, done: false }
console.log(generator.next()); // { value: 1774, done: false }
console.log(generator.next()); // { value: 2714, done: false }
console.log(generator.next()); // { value: 3854, done: false }
console.log(generator.next()); // { value: 5194, done: false }
console.log(generator.next()); // { value: 6734, done: false }
