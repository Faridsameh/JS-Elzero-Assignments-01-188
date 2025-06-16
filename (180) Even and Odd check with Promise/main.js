// Step 1: Create a new Promise
const checkNumber = new Promise((resolve, reject) => {
  let number = 4; // You can change this to any number (e.g., 5, 7, 10)

  // Step 2: Check if the number is even
  if (number % 2 === 0) {
    // If it's even, call resolve
    resolve("Even number");
  } else {
    // If it's odd, call reject
    reject("Odd number");
  }
});

// Step 3: Use .then() to handle the result
checkNumber.then(
  function (message) {
    // This function runs if the promise is resolved
    console.log("Success:", message);
  },
  function (error) {
    // This function runs if the promise is rejected
    console.log("Error:", error);
  }
);
