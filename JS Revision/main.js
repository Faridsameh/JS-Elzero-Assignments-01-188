document.querySelector("h1").style.color = "brown";
console.table(["Farid", "Foad", "Mario"]);
console.log(typeof null);

var user= "Farid";
var age= 25;

console.log(user);
console.log(age);

console.log(myP); // This is used to show an element in Console.
myP.innerHTML="Paragraph changed"; // to change the value of the paragraph via JS file.

/// Concatenation

let a = "We Love";
let b = "JavaScript"
document.write (a + " " + b); 

/// ///////////////

let title = "Farid";
let desc = "Elzero Web School";

let markup = `

<div class= "card">
    <div class= "child">
        <h2>${title} </h2>
        <p>${desc} </p>
        </div>
        </div> `
        ;
        document.write(markup);
//////////////////
        document.write("-----------------------------------------------");
//////////////////

let Title = "ELZERO", Description = "Elzero Web School", Date = "25 / 10 / 2024";

let result = `
<div>
    <h3>${Title}</h3>
    <p>${Description}</p>
    <span>${Date}</span>
</div
`; 
document.write(result.repeat(4));
//////////////////////

console.log(Number.MAX_VALUE);

console.log((100).toString()); // 100 as string 
console.log(100..toString()); // 100 as string 

console.log(10.82828.toFixed(2)); // 10.82 as string 

console.log(parseFloat("100.433 Farid Sameh")); // 100.433 num

console.log(Number.isInteger(100)); // true
console.log(Number.isInteger(100.23)); // false
console.log(Number.isNaN("Osama"/2)); // true

console.log(Math.round(10.2)); //10
console.log(Math.round(10.7)); //11


console.log(Math.ceil(10.2)); //11
console.log(Math.floor(10.7)); //11 Rounds down to the next smallest integer number/ -4.7 >> -5

console.log(Math.min (10, 2, 50, 4)); //2
console.log(Math.max (10, 2, 50, 4)); //50  

console.log(Math.pow(2, 5)); //32

console.log(Math.random()); // random number 
console.log(Math.floor(Math.random() * 11)); // random integer numbers from  0 - 10

console.log(Math.trunc(99.9)); // 99 removes any fload number regardless the sign. -4.5 >> -4


// With just one line, use MAX_SAFE_INTEGER to get the result number 16 without using any numbers.
console.log((Number.MAX_SAFE_INTEGER).toString().length); // 16


let myVar = "100.56789 Views";
console.log(parseInt("100.56789 Views")); // 100 num 
console.log(Number(parseFloat("100.56789 Views").toFixed(2))); // 100.57 num 

////////////////

// String////

let S = "sayed"; 
console.log(S.trim().charAt(0).toUpperCase()); // S
console.log(S.length); // 5


let Name = "  Ahmed  "; 
console.log(Name.trim().charAt(2).toUpperCase()); // M

//////////

let t = "Farid Sameh Farid";
// Include This Method In Your Solution [slice, charAt]
console.log(t.charAt(0).toUpperCase() + t.slice(1, 6)); // Farid
/////////////////

/* IF condition

 Test Case 1 | "009" إذا كان الرقم أصغر من 10 قم بطباعة الرقم وقبله صفرين*/
 
let num1 = 9; 

if(num1 < 10) {
    console.log(`00${num1}`);
}

// Test Case 2 | "020" إذا كان الرقم أكبر من 10 وأصغر من 100 قم بطباعة الرقم وقبله صفر
let num2 = 20; 

if(num2 > 10 && num2 < 100) {
    console.log(`0${num2}`);
}

// Test Case 3 |  "110" إذا كان الرقم أكبر من أو يساوي 100 قم بطباعة الرقم كما هو
let num3 = 110; 
if(num3 >= 100) {
    console.log(num3);
}

// Write a JavaScript program that takes a number from the user and determines whether it is odd or even.
let num = prompt("Enter a number:");
num = Number(num); 

if (num % 2 === 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
} 