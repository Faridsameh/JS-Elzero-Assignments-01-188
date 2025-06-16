// Assignment 1 //
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
const [y, , , , z] = myNumbers;

console.log(y * z); // 5

// Assignment 2 //
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here
const [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// Assigment 3
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Prepare a combined array so destructuring needs only one line
let combined = [arr3[1], arr3[2], arr1[0]];

let [r, s, t] = combined;

console.log(`My Best Friends: ${r}, ${s}, ${t}`);
// Output: My Best Friends: Shady, Mahmoud, Ahmed

// Assignment 4 //
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here

const {
  age: ag,
  working: wo,
  country: co,
  hobbies: [h1, , h3],
} = member;
console.log(`My Age Is ${ag} And Iam ${wo ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${co}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// Assignment 5 Challenge

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Destructuring
const {
  title: tit,
  developer: dev,
  releases: {
    "Oath In Felghana": [u, j],
    "Ark Of Napishtim": { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game;

const OIF = "Oath In Felghana";
const AON = "Ark Of Napishtim";

// Output
console.log(`My Favourite Games Style Is ${tit} Style`);
console.log(`And I Love ${dev} Games`);
console.log(`My Best Release Is ${OIF} It Released in ${u} & ${j}`);
console.log(`Although I Love ${AON}`);
console.log(`${AON} Price in USA Is ${u_price}`);
console.log(`${AON} Price in Japan Is ${j_price}`);
console.log(`Origin Price Is ${or}`);

// My Favourite Games Style Is YS Style
// And I Love Falcom Games
// My Best Release Is Oath In Felghana It Released in USA & Japan
// Although I Love Ark Of Napishtim
// Ark Of Napishtim Price in USA Is 20 USD
// Ark Of Napishtim Price in Japan Is 10 USD
// Origin Price Is 30 USD

// Assignment 6

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Destructuring
const {
  title,
  age,
  available,
  skills: [, lastSkill],
} = myFriends[chosen - 1];

console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(lastSkill);
