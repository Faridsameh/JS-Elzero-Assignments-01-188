/* Assignment 1 / 

- If num is < 10 , print number and before it 00 >> 009 example
- If  10 < num < 100, print num and before it only 0 >> 020 example
- If num >= 100 , print it as it is. 
*/

let num = 101; // "009"

if (num < 10) {
  console.log(`00${num}`);
} else if (num > 10 && num < 100) {
  console.log(`0${num}`);
} else {
  console.log(num);
}
//=============================== END =======================

/* Assignment 2

let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num1 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
} */
//=============================== END =======================

// Assignment 3

/* Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

let num1 = 10;
let num2 = 30;
let num3 = "30";

if (
  num3 > num1 &&
  num3 !== num2 &&
  num3 > num1 &&
  num3 == num2 &&
  num3 !== num2 &&
  num3 !== num1 &&
  num3 !== num2
) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number" +
      "\n" +
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" +
      "\n" +
      "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}*/

//=============================== END =======================

/* Assignment 4 

Change the content of the variables to what is appropriate 
so that all the results of the Conditions are True and never 
modify the If Condition itself. 

// Edit What You Want Here

let num1 = 10;
let num2 = 5;
let num3 = 10;
let num4 = 36;


  Do Not Edit Below This Line
  Needed Output
  True 7 Times


// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7
// 30 - 20 + 5
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}*/
//=============================== END =======================

// If Condition Challenge

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
// Write Previous Condition With Ternary If Syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

//W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (st.replace("Elzero Web School", "number") === "number") {
  console.log("Good");
} // other solution
if (typeof st.length === "number") {
  console.log("Good");
}

if (st.replace("Elzero Web School", "ElzeroElzero") === "ElzeroElzero") {
  console.log("Good");
} // other solution
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

