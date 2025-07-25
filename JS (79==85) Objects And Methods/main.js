// // Assignment 1

// let member = {
//   name: "Elzero",
//   age: 38,
//   country: "Egypt",
// };
// member.fullDetails = function () {
//   return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
// };
// // Create Your Object Here

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt
// console.log("#################");

// // Assignment 2: قم بإنشاء Object جديد بأربع طرق مختلفة

// // Method One

// let objMethodOne = {
//   property: "Method One",
// };
// console.log(objMethodOne.property); // "Method One"

// //Method Two
// let objMethodTwo = new Object();
// objMethodTwo["property"] = "Method Two";
// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// const objMethodThree = Object.create({
//   property: "Method Three",
// });
// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// const objMethodFour = Object.assign({}, { property: "Method Four" });
// console.log(objMethodFour.property); // "Method Four"

// console.log("#################");
// // Assignment 3

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// finalObject = Object.assign({ a: a }, threeNums, twoNums);
// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */
// console.log("#################");

// Assignment Four _ Challenge

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  let gameName = Object.keys(myFavGames)[i];
  let gameInfo = myFavGames[gameName];

  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${gameInfo.publisher}`);
  console.log(`The Price Is ${gameInfo.price}`);

  // Check If Nested Object Has Property (bestThree)
  if ("bestThree" in gameInfo) {
    console.log("- Game Has Releases");
    console.log(`First => ${gameInfo.bestThree.one}`);
    console.log(`Second => ${gameInfo.bestThree.two}`);
    console.log(`Third => ${gameInfo.bestThree.three}`);
  }
  console.log("#".repeat(20));
}

/*
The Game Name Is Trinity Universe
The Publisher Is NIS America
The Price Is 40
####################
The Game Name Is Titan Quest
The Publisher Is THQ
The Price Is 50
- Game Has Releases
First => Immortal Throne
Second => Ragnarök
Third => Atlantis
####################
The Game Name Is YS
The Publisher Is Falcom
The Price Is 40
- Game Has Releases
First => Oath in Felghana
Second => Ark Of Napishtim
Third => origin
####################
*/
