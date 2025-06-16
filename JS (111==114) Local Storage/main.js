// Assignment one
// Get elements
const fontSelector = document.getElementById("fontSelector");
const colorSelector = document.getElementById("colorSelector");
const fontSizeSelector = document.getElementById("fontSizeSelector");

// Apply saved settings on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedFont = localStorage.getItem("selectedFont");
  const savedColor = localStorage.getItem("selectedColor");
  const savedFontSize = localStorage.getItem("selectedFontSize");

  if (savedFont) {
    document.body.style.fontFamily = savedFont;
    fontSelector.value = savedFont.trim(); // Set the value without quotes
  }

  if (savedColor) {
    document.body.style.color = savedColor;
    colorSelector.value = savedColor;
  }

  if (savedFontSize) {
    document.body.style.fontSize = savedFontSize + "px";
    fontSizeSelector.value = savedFontSize;
  }
});

// Font selector logic
fontSelector.addEventListener("change", function () {
  const selectedFont = this.value;
  document.body.style.fontFamily = selectedFont;
  localStorage.setItem("selectedFont", selectedFont);
});

// Color selector logic
colorSelector.addEventListener("change", function () {
  const selectedColor = this.value;
  document.body.style.color = selectedColor;
  localStorage.setItem("selectedColor", selectedColor);
});

// Font size selector logic
fontSizeSelector.addEventListener("change", function () {
  const selectedSize = this.value;
  document.body.style.fontSize = selectedSize + "px";
  localStorage.setItem("selectedFontSize", selectedSize);
});

// Assignment two

// Get elements
var inputText = document.querySelector(".inputText");
var inputNum = document.querySelector(".inputNum");
var inputPass = document.querySelector(".inputPass");
var selectBox = document.getElementById("selectBox");

// Save input field values in sessionStorage on input
inputText.addEventListener("input", function () {
  sessionStorage.setItem("inputText", inputText.value);
});

inputNum.addEventListener("input", function () {
  sessionStorage.setItem("inputNum", inputNum.value);
});

inputPass.addEventListener("input", function () {
  sessionStorage.setItem("inputPass", inputPass.value);
});

// Save selected option in select box
selectBox.addEventListener("change", function () {
  sessionStorage.setItem("selectedOption", selectBox.value);
});

// Load saved values from sessionStorage when page is loaded
window.addEventListener("DOMContentLoaded", function () {
  var savedText = sessionStorage.getItem("inputText");
  var savedNum = sessionStorage.getItem("inputNum");
  var savedPass = sessionStorage.getItem("inputPass");
  var savedOption = sessionStorage.getItem("selectedOption");

  // Load the values into the form fields if they exist
  if (savedText) {
    inputText.value = savedText;
  }

  if (savedNum) {
    inputNum.value = savedNum;
  }

  if (savedPass) {
    inputPass.value = savedPass;
  }

  if (savedOption) {
    selectBox.value = savedOption; // Ensure the selected option is applied
  }
});

// sessionStorage automatically clears when the tab or browser is closed
