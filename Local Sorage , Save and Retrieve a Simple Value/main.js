// Save and Retrieve a Simple Value

let nameInput = document.querySelector("#nameInput");
let saveBtn = document.querySelector("#saveBtn");
let displayName = document.querySelector("#displayName");

saveBtn.addEventListener("click", function () {
  localStorage.setItem("name", nameInput.value);
});
window.onload = function () {
  if (localStorage.getItem("name")) {
    displayName.textContent = localStorage.getItem("name");
  }
};
