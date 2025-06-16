
// Assignment 1 ,  print [ "Ahmed", "Elham", "Osama" ] in  2 ways without using numbers

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// 1
myFriends.pop();
console.log(myFriends);

// 2
myFriends.length = num;
console.log(myFriends);

console.log("===========================================");

// Assignment 2  Write in Console  ["Eman", "Osama"] without using numbers

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

console.log("===========================================");

// Assignment 3  ["Z", "X", "D", "C", "B", "A"] in one line  of code

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); 

console.log("===========================================");

// Assignment 4 We  Can use only num 0. We have to write only one line code in console to get ZERO

let  website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].toUpperCase().substr(2)); // ZERO
console.log(words[website.length][website.length - website.length].toUpperCase().slice(2)); // ZERO   other solution
console.log(words[website.length][0].toUpperCase().substr(2)); // ZERO   other solution

console.log("===========================================");

// Assignment 5 : Check if the value of needle exists in array haystack and if found, write "Found" with 3 solutions

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Your code here

if (haystack.includes(needle)) {
    console.log("Found");
}

if (haystack.indexOf(needle)) {
    console.log("Found");
}

if (needle === haystack[1]) {
    console.log("Found");
}