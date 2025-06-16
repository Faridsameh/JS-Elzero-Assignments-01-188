/* Assignment 1 

- You have a variable containing String
- The first letter of the String is required
- The solution must be implemented in 6 different ways
- No solution must be repeated and only the variable must be used
- You must make sure that the letter is small
- One of the solutions, make sure that it repeats the taken letter 3 times
*/

let userName = "Elzero";

console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
console.log(userName.substr(0, 1).toLocaleLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.slice(-6, -5).toLocaleLowerCase().repeat(3)); // eee

// ================= END ========================

/* Assignment 2 
You have some variables that are a word and a group of letters
In the first line make sure that the letter Z is inside the word and the result that will be output is true
In the second line make sure that the word begins with the letter E and the result that will be output is true
In the third line make sure that the word ends with the letter o and the result that will be output is true
Note the case of the letters Capital And Small
It is not allowed to manipulate variables
*/

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLocaleLowerCase())); // True

// ================= END ========================

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Farid Sameh Farid";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a[13].toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 6) + " " + "School"); // Elzero School
console.log(`${a.substr(0, 6)} ${a.substr(-6)}`); // ["Elzero"]

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase() + a.slice(1, length-1).toUpperCase() + a.substr(-1).toLowerCase());

// ================= END ========================
  