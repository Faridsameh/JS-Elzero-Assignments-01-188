//     Assignment 1       //

// 1. By ID
document.getElementById("elzero");

// 2. By class name
document.getElementsByClassName("element")[0];

// 3. By tag name
document.getElementsByTagName("div")[0];

// 4. querySelector by ID
document.querySelector("#elzero");

// 5. querySelector by class
document.querySelector(".element");

// 6. querySelector by attribute
document.querySelector('[name="js"]');

// 7. querySelectorAll and index
document.querySelectorAll(".element")[0];

// 8. querySelectorAll by ID
document.querySelectorAll("#elzero")[0];

// 9. Using `document.body.firstElementChild`
document.body.firstElementChild;

// 10. Using `document.body.children`
document.body.children[0];

// 11. Using `document.body.childNodes` (includes text nodes, so index carefully)
document.body.childNodes[1]; // may need to adjust index based on whitespace

// 12. Using `document.all`
document.all.namedItem("elzero"); // Works like getElementById

// 13. Using `document.getElementsByName`
document.getElementsByName("js")[0];

// 14. Using `document.querySelectorAll` with attribute selector
document.querySelectorAll('[name="js"]')[0];

// ############################################################## //

//     Assignment 2      //
// let myLogo = document.images;
// for (let i = 0; i < myLogo.length; i++) {
//   myLogo[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   myLogo[i].alt = "Elzero Logo";
//   myLogo[i].style = "background: black; margin-bottom:10px; padding: 30px;";
// }
// ############################################################## //

//     Assignment 3       //
let input = document.querySelector("input");
let result = document.querySelector(".result");

input.oninput = function () {
  result.innerHTML = `${input.value} USD Dollar = ${(
    input.value * 50.99
  ).toFixed(2)} Egyptian Pound`;
};
// ############################################################## //

//     Assignment 4    //
let elOne = document.querySelector(".one");
let elTwo = document.querySelector(".two");

elOne.title = elOne.className;
elTwo.title = elTwo.className;
elOne.textContent = elOne.className;
elTwo.textContent = `${elTwo.className} ${elTwo.attributes.length}`;
// ############################################################## //

//     Assignment 5      //
let images = document.images;
for (let i = 0; i < images.length; i++) {
  if (images[i].hasAttribute("alt")) {
    images[i].alt = "old";
  } else {
    images[i].alt = "Elzero New";
  }
}
// ############################################################## //

//     Assignment 6      //
