// Assignment 1: Open a link if it has the class "open" and contains "Elzero"
let links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  if (
    links[i].classList.contains("open") && 
    links[i].textContent.includes("Elzero")
  ) {
    window.open(links[i].href);
  }
}

// Assignment 3: Insert elements before and after the target div, and remove the first <p> element
let element = document.getElementsByClassName("our-element")[0];

// Create and insert the "Start" element before
let PreElement = document.createElement("div");
PreElement.textContent = "Start";
PreElement.className = "start";
PreElement.title = "Start Element";
PreElement.setAttribute("data-value", "Start");
element.before(PreElement);

// Create and insert the "End" element after
let PostElement = document.createElement("div");
PostElement.textContent = "End";
PostElement.className = "end";
PostElement.title = "End Element";
PostElement.setAttribute("data-value", "End");
element.after(PostElement);

// Remove the first <p> element on the page
let myP = document.querySelector("p");
if (myP) myP.remove();
