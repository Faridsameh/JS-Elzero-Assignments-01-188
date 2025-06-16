// Assignment 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newArray = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");
console.log(newArray);

console.log("############");

// Assignment 2 Remove dubblicate letters and jion
let myString = "EElllzzzzzzzeroo";

let removedDup = myString
  .split("") // convert string to an array of char
  .filter(function (char, index, self) {
    return self.indexOf(char) === index; // Keep only the 1st occurence
  })
  .join(""); // jion the arr back  into a string
console.log(removedDup);
console.log("############");

// Assignment 3 || Array flatten - Never use Array.flat()
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flattened = [];
myArray.forEach(function (item) {
  if (Array.isArray(item)) {
    item.forEach(function (nestedItem) {
      flattened.push(nestedItem);
    });
  } else {
    flattened.push(item);
  }
});
console.log(flattened.join("")); // Elzero
console.log("############");

// Assignment 4 || Filter out non-numeric values

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let filtered = numsAndStrings.filter(function (ele) {
  return !isNaN(ele);
});
let finalr = filtered.map(function (ele) {
  return -ele;
});
console.log(finalr); // [-1, -10, 10, 20, -5, -3]
console.log("############");

// Assignment 5 let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function (acc, current) {
  if (current % 2 === 0) {
    // إذا كان الرقم زوجي نقوم بالضرب
    return acc * current;
  } else {
    // إذا كان الرقم فردي نقوم بالجمع
    return acc + current;
  }
}, 1); // Initial value هو 1

console.log(result); // 500

/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());