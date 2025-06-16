// Assignment 1: Print number 100000 in 13 different ways. Operators can be used only once.

console.log(100000);
console.log(100_000);
console.log(5e4 + 5e4);
console.log(100000.0);
console.log(10 ** 5);
console.log(1e5);
console.log(10 * 10 * 10 * 10 * 10);
console.log(Math.round(100000.4));
console.log(Math.ceil(99999.1));
console.log(Math.pow(10, 5));
console.log(Math.trunc(100000.999));
console.log(Number.parseInt("100000 Farid"));
console.log(Math.min(100000, 88452184512, 10 * 10000));
console.log(Math.max(100, 2000, 100000, 20514));
console.log(Number(100000.4.toFixed(0)));

// =================== END =========================

// Assingment 2: Use "MIN_SAFE_INTEGER" to get 9007199254740991

console.log(-(Number.MIN_SAFE_INTEGER)); // 9007199254740991

// =================== END =========================

// Assignment 3: With just one line, use MAX_SAFE_INTEGER to get the result number 16 without using any numbers.

console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16
console.log((Number.MAX_SAFE_INTEGER).toString().length); // 16

console.log(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER + true + true + true + true
    + true + true + true + true + true + true + true + true + true + true + true); // 16
// =================== END =========================

/*Assignment 4:  
You have the following variable its value "100.56789 Views"
In the first line we want to print only the number 100 of the variable and make sure that its type is Number.
In the second line we want to print only the number 100.57 from the variable and make sure that its type is Number */

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// =================== END =========================

/* Assignment 5: 

- The following variable contains the number 10
- You must use isInteger to get result 2
- It is not allowed to write any numbers yourself, and you must use the previous feature to produce the desired result
*/

let num = 10;

console.log(Number.isInteger(num)+ true); // 2

// =================== END =========================

/* Assigment 6: 

* Use the following variable to get the result 10 in 5 different ways
* You must use only the variable and not write any numbers manually
* You must not repeat any of the solutions
*/ 
let flt = 10.4; 

console.log(Math.round(flt));
console.log(Math.floor(flt));
console.log(Math.trunc(flt));
console.log(Number(flt.toFixed(0)));
console.log(parseInt(flt));

// =================== END =========================

// Assignment7: Generate random number between 0 - 4 

console.log(Math.trunc(Math.random() * 5)); 
console.log(Math.floor(Math.random() * 5)); 

// =================== END =========================

//Challange lesson 26 

let a = 1_00;
let b = 2_00.5; 
let c = 1e2;
let d = 2.4; 

// 1) Find the smallest number in all variables and return integer 
console.log(Math.trunc(Math.min((a, b, c, d)))); // 2


// 2) Use variable a &  d only one time to get 10000 

console.log(Math.pow(a, Math.round(d))); // 1000

// 3) Get integer 2 from variable "d" using 5 Methds ) 

console.log(parseInt(d)); 
console.log(Number(d.toFixed())); 
console.log(Math.floor(d)); 
console.log(Math.trunc(d)); 
console.log(Math.round(d)); 


// 4) Use variables b & d to get these values. 

console.log(((Math.floor(b) / Math.ceil(d)).toFixed(2)));
console.log(Math.ceil((Math.floor(b) / Math.ceil(d)).toFixed(2)));
// =================== END =========================