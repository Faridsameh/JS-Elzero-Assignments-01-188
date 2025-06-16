//          Assignment 4          //
let text = document.querySelector("div");
console.log("Assignment 4: " + text.lastChild.textContent.trim()); // Elzero

//          Assignment 5          //
// Assignment 5: Display the tag name of the clicked element
let elements = document.querySelectorAll("div, span, p, article, section");

elements.forEach(function (element) {
  element.addEventListener("click", function () {
    console.log(`Assignment 5: This is a ${this.tagName}`);
  });
});
