// Assignment 1

window.onload = function () {
  let userInput = prompt("Print Number From - To", "Example: 5-20");

  let parts = userInput.split("-");
  let start = parseInt(parts[0]);
  let end = parseInt(parts[1]);

  let outputDiv = document.getElementById("output");

  let from = Math.min(start, end);
  let to = Math.max(start, end);

  let result = "";
  for (let i = from; i <= to; i++) {
    result += i + "<br>";
  }

  outputDiv.innerHTML = result;
};

// Assignment 2

window.onload = function () {
  // Get the container and the close button
  let container = document.querySelector(".container");
  let closeButton = document.querySelector("button");

  // Initially hide the container
  container.style.display = "none";

  // Show the container after 5 seconds
  setTimeout(function () {
    container.style.display = "block"; // Show the container after 5 seconds
  }, 5000);

  // Add an event listener to the close button
  closeButton.addEventListener("click", function () {
    // Hide the container when the "X" button is clicked
    container.style.display = "none";
  });
};

//  Assignment 3, 4,
let div = document.getElementById("countdown");
function countdown() {
  div.innerHTML -= 1;

  // Assignment 5
  if (div.innerHTML === "5") {
    window.open(
      "https://elzero.org/",
      "_blank",
      "width=500,height=500,top=200,left=650"
    );
  }
  //   Assignment 4
  if (div.innerHTML === "0") {
    //   location.href = "https://elzero.org/";
    clearInterval(counter);
  }
}
//
let counter = setInterval(countdown, 1000);
