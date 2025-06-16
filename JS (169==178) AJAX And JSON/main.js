// Assignment 2

/* let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
// console.log(myRequest);
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    setTimeout(() => {
      console.log("Data Loaded");
    }, 0);
  }
}; */
"====================================================";
// Assignment 3

/* let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = "All";
    }
    console.log(mainData);
    console.log(typeof mainData); // object 

    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
    console.log(typeof updatedData); // string
  }
};*/
"====================================================";

// Assignment 4 

// Create a new XMLHttpRequest object
let myRequest = new XMLHttpRequest();

// Set up a GET request to fetch the JSON file
myRequest.open("GET", "articles.json");

// Send the request
myRequest.send();

// When the request state changes...
myRequest.onreadystatechange = function () {
  // Check if request is done (readyState 4) and successful (status 200)
  if (this.readyState === 4 && this.status === 200) {
    // Parse the JSON response text into a JavaScript array
    let mainData = JSON.parse(this.responseText);

    // Create a main container <div> to hold all articles
    let div = document.createElement("div");
    div.id = "data"; // Give it an ID for possible styling or reference

    // Loop through each article in the JSON data
    for (let i = 0; i < mainData.length; i++) {
      // Create an <h2> for the title
      let title = document.createElement("h2");
      let titleText = document.createTextNode(mainData[i].title);
      title.appendChild(titleText); // Put the text inside the <h2>

      // Create a <p> for the body
      let body = document.createElement("p");
      let bodyText = document.createTextNode(mainData[i].body);
      body.appendChild(bodyText); // Put the text inside the <p>

      // Create a <p> for the author
      let author = document.createElement("p");
      let authorText = document.createTextNode(`Author: ${mainData[i].author}`);
      author.appendChild(authorText); // Put the text inside the <p>

      // Create a <p> for the category
      let category = document.createElement("p");
      let categoryText = document.createTextNode(
        `Category: ${mainData[i].category}`
      );
      category.appendChild(categoryText); // Put the text inside the <p>

      // Create a container <div> for this article
      let data = document.createElement("div");

      // Adds space below each article
      data.style.marginBottom = "30px";
      data.style.borderBottom = "2px solid #ccc";
      data.style.paddingBottom = "10px";

      // Append all elements (title, body, author, category) to the article container
      data.appendChild(title); // Add <h2> to article <div>
      data.appendChild(body); // Add body <p>
      data.appendChild(author); // Add author <p>
      data.appendChild(category); // Add category <p>

      // Append this article container to the main container
      div.appendChild(data);
    }

    // Finally, add the full container with all articles to the <body> of the page
    document.body.appendChild(div);
  }
};
