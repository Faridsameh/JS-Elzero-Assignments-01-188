// Create a parent grid container
let gridContainer = document.createElement("div");
gridContainer.className = "product-container"; // Class for the grid layout
document.body.appendChild(gridContainer); // Append the grid to the body

// Loop to create 100 product elements
for (let i = 0; i < 100; i++) {
  let divContainer = document.createElement("div"); // Create product container
  let myH = document.createElement("h2");
  let myP = document.createElement("p");

  // Create and add text nodes for title and description
  let myHText = document.createTextNode("Product Title " + (i + 1));
  let myPtext = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

  myH.appendChild(myHText);
  myP.appendChild(myPtext);

  // Append heading and paragraph to container
  divContainer.appendChild(myH);
  divContainer.appendChild(myP);

  // Add class for styling
  divContainer.className = "product";

  // Append product container to grid
  gridContainer.appendChild(divContainer);
}
