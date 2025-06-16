//Assi 1 Without using numbers, show from 10 to 100 and exclude  40; use for loop

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i);
}
console.log("========");

////////////////////////////////

//Assi 2
let inizio = 10;
let fine = 0;
let stop = 3;

for (let j = inizio; j > fine; j--) {
  if (j < inizio) {
    console.log(`0${j}`);
  } else {
    console.log(j);
  }
  if (j === stop) break;
}
console.log("========");
////////////////////////////////

//Assi 4

let index = 10;
let jump = 2;
let i = index;

for (;;) {
  console.log(i);
  i -= 2;
  if (i === jump) break;
}
console.log("========");

/////////////////////

// Assignment 5

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

//num = letter.length;

for (let i = letter.length; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) continue;
  console.log(`"${num} => ${friends[i]}" `);
  num++;
}

console.log("========");

//Assi 6

let strt = 0;
let swappedName = "elZerO";
let newName = "";

for (let i = strt; i < swappedName.length; i++) {
  let char = swappedName[i];
  if (char === char.toUpperCase()) {
    newName += char.toLowerCase();
  } else {
    newName += char.toUpperCase();
  }
}
console.log(newName); // ELzERo

console.log("========");

//Assi 7

let srt = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = srt; i < mix.length; i += 1) {
  if (typeof mix[i] === "string") {
    continue;
  }
  if (i === 0) continue; // skip the 1st iteration 0
  console.log(mix[i]);
  /*
  2
  3
  4
  */
}
console.log("========");
