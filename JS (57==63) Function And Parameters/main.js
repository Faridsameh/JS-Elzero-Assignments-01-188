//Assignment 1

function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  }
  if (theGender === "Female") {
    console.log(`Hello Mrs ${theName}`);
  }
  if (theGender === undefined) {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("===============");

//Assignment 2

function calculate(firstNum, secondNum, operation) {
  // If secondNum is missing
  if (secondNum === undefined) {
    console.log("The second number is not found");
    return; // Exit the function early since secondNum is required for any operation
  }

  // Default operation if none is provided
  if (operation === undefined) {
    operation = "add"; // Default to addition if no operation is passed
  }

  // Perform operation based on the given operation
  if (operation === "add") {
    console.log(firstNum + secondNum);
  }
  if (operation === "subtract") {
    console.log(firstNum - secondNum);
  }
  if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Test cases
calculate(20); // Second Number Not Found
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
calculate(20, 30); // 50 (defaults to addition)
console.log("===============");

// Assignment 3 Age calculator in all time units.

function ageInTime(theAge) {
  if (theAge >= 10 && theAge < 100) {
    console.log(`Your Age in Months is ==> ${theAge * 12} Months`);
    console.log(`Your Age in Weeks is ==> ${theAge * 52.143} Weeks`);
    console.log(`Your Age in Days is ==> ${theAge * 365} days`);
    console.log(`Your Age in Hours is ==> ${theAge * 8760} Hours`);
    console.log(`Your Age in Minutes is ==> ${theAge * 525600} Minutes`);
    console.log(`Your Age in Seconds is ==> ${theAge * 31536000} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}
// Needed Output
ageInTime(20); // Age Out Of Range

console.log("===============");

// Assignment 5

function genYears(start, end) {
  document.write("<select>");

  for (let i = start; i <= end; i++) {
    document.write(`<option value= "${i}"> ${i} </option>`);
  }
  document.write("</select>");
}

genYears(2010, 2025);

/// Solved

// Assignment 6: Age calculator in all time units.

function multiply(...numbers) {
  let result = 1;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    }
    let intNum = Math.floor(numbers[i]);

    result *= intNum;
  }

  console.log(`The multiplication of the provided numbers is: \n \n ${result}`);
}

multiply(2, 50, 30.4, "A"); // 3000  Solved!

console.log("===============");
