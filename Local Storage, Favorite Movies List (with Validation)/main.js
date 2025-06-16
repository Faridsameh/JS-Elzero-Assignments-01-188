let inputMovie = document.querySelector("#inputMovie");
let submitBtn = document.querySelector("#submitBtn");
let myList = document.querySelector("#myList");
let errMsg = document.querySelector("#errMsg");

function displayItems() {
  //   localStorage.clear();
  let items = JSON.parse(localStorage.getItem("movies")) || [];
  myList.innerHTML = "";
  items.forEach((movieName) => {
    let li = document.createElement("li");
    li.textContent = movieName;
    myList.appendChild(li);
  });
}

submitBtn.addEventListener("click", function () {
  let newMovie = inputMovie.value.trim();

  if (newMovie === "") {
    errMsg.textContent = "⚠️YOU DIDN'T ADD ANY MOVIE NAME!";

    inputMovie.addEventListener(
      "focus",
      function () {
        errMsg.textContent = "";
      },
      { once: true }
    );
  } else {
    let items = JSON.parse(localStorage.getItem("movies")) || [];

    // Check for duplicate before pushing
    if (items.includes(newMovie)) {
      errMsg.textContent = "⚠️This movie is already in your list!";
      inputMovie.addEventListener("focus", function () {
        errMsg.textContent = "";
      });
    } else {
      items.push(newMovie);
      localStorage.setItem("movies", JSON.stringify(items));
      inputMovie.value = "";
      errMsg.textContent = "";
    }
  }
  displayItems();
});