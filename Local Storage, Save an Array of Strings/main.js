// Select the input field where user types new items
let dataInput = document.querySelector("#dataInput");

// Select the button to add new items
let addBtn = document.querySelector("#addBtn");

// Select the <ul> element where the list items will be displayed
let myList = document.querySelector("#myList");

// Function to display items stored in localStorage
function displayItems() {
  // Retrieve the 'items' array from localStorage; if none, use empty array
  let items = JSON.parse(localStorage.getItem("items")) || [];

  // Clear the current list in the UI to avoid duplicates
  myList.innerHTML = "";

  // Loop through each item in the array
  items.forEach(function (item) {
    // Create a new <li> element for each item
    let li = document.createElement("li");

    // Set the text inside the <li> to the item string
    li.textContent = item;

    // Append the new <li> to the <ul> in the DOM
    myList.appendChild(li);
  });
}

// Event listener for the Add button click
addBtn.addEventListener("click", function () {
  // Get the current items array or start with an empty one
  let items = JSON.parse(localStorage.getItem("items")) || [];

  // Add the new item from the input field to the array
  items.push(dataInput.value);

  // Save the updated array back to localStorage as a    string
  localStorage.setItem("items", JSON.stringify(items));

  // Clear the input field for better user experience
  dataInput.value = "";

  // Update the displayed list to show the new item
  displayItems();
});

// When the page loads, show any previously saved items
window.onload = function () {
  displayItems();
};
