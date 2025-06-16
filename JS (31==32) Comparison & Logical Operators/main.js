/* Assignment 1 :  Put the appropriate OPERATOR you learned instead of the question mark to make the result "True"
*/
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 || 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 != +"-40"); // true
console.log(! 10 !== -"-40"); // true
console.log(! "10" <= 10); // true
console.log(! 20 === false); // true

// ======================== END ======================

/* Assignment 2 

You have two variables with two different numbers and you are required to use the Operators you learned with the variables to display the result True:

1) It is forbidden to use any numbers at all
2) The variable must be used only once in each solution
3) The Operator must not be repeated and is used once in one of the solutions
4) The minimum number of solutions is 6 solutions
*/

let num1 = 10;
let num2 = 20;

console.log(num1 != num2); // true
console.log(num1 < num2); // true
console.log(!(num1 > num2)); // true
console.log(num1 !== num2); // true
console.log(num2 >= num1); // true
console.log(!(num1 === num2)); // true

// ======================== END ======================

/* Assignment 3:

You have three variables with different numbers and 
you need to use the Operators you learned instead of 
the question mark to get the result True. 
*/

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
console.log(a < b || a < c); // true
console.log(!(a > b) && !(a == b) && !(a === c) && !(a < c)); // true

// ======================== END ======================
