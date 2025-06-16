// Promises

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };
    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("./text.json")
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      let div = document.createElement("div");

      let title = document.createElement("h3");
      let titleText = document.createTextNode(result[i].title);
      title.appendChild(titleText);

      let description = document.createElement("p");
      let descriptionText = document.createTextNode(result[i].description);
      description.appendChild(descriptionText);

      div.appendChild(title);
      div.appendChild(description);

      document.body.appendChild(div);
    }
  })
  .catch((rej) => {
    return rej;
  });

("=============================================================");

// Fetch API

// Declare an async function to fetch and display data
async function fetchData() {
  try {
    // 🔹 Fetch data from a local JSON file (asynchronously)
    let myData = await fetch("./text.json");

    // 🔹 Convert the raw response into a usable JavaScript object/array
    let data = await myData.json();

    // 🔹 Limit the data to only 5 items
    data.length = 5;

    for (let i = 0; i < data.length; i++) {
      // 🔹 Create a <div> element to hold the article
      let div = document.createElement("div");

      // 🔹 Create an <h3> element for the article title
      let title = document.createElement("h3");
      let titleText = document.createTextNode(data[i].title);
      title.appendChild(titleText); // Add the text to the <h3>

      // 🔹 Create a <p> element for the article description
      let description = document.createElement("p");
      let descriptionText = document.createTextNode(data[i].description);
      description.appendChild(descriptionText); // Add text to the <p>

      // 🔹 Append title and description to the <div>
      div.appendChild(title);
      div.appendChild(description);

      document.body.appendChild(div);
    }
  } catch (error) {
    console.log("No Data Found");
  }
}

// 📞 Call the function to start the process
fetchData();
