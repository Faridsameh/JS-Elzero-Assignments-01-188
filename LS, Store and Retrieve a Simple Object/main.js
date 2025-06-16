let saveUserBtn = document.querySelector("#saveUserBtn");
let displayUserInfo = document.querySelector("#displayUserInfo");

let user = { name: "Alex", age: 25 };

// Convert the user object to a JSON string for storage
let myJSON = JSON.stringify(user);

// When the save button is clicked, save the JSON string in localStorage under the key "user"
saveUserBtn.addEventListener("click", function () {
  localStorage.setItem("user", myJSON);
});

// When the page loads...
window.onload = function () {
  // Retrieve the JSON string from localStorage
  let text = localStorage.getItem("user");

  // Parse the JSON string back into an object (if there is stored data)
  if (text) {
    let obj = JSON.parse(text);
    // Display the user's name and age in a readable format
    displayUserInfo.textContent = `Name: ${obj.name}, Age: ${obj.age}`;
  }
};
