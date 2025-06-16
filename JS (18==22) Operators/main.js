/*https://elzero.org/javascript-bootcamp-assignments-lesson-from-018-to-022/

/ Assignment > 1 
Replace ? With Arithmetic Operators

*/
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0

// ================== End ============= // 

//Assignment 2 , we have to print the result 6 in six different ways. 

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(num + num++); // 6

// Soultion Four
console.log(++num + true) ; // 6

// Solution Five
console.log(--num + --num - true); // 6

// Solution Six
console.log(num + --num + true); // 6

// ================== End ============= // 

// Assignment 3 

let numm = "10";

// Solution One
console.log(+numm + +numm); // 20

// Solution Two
console.log(+numm + --numm + true); // 20

// Solution Three
console.log(--numm + ++numm + ++num); // 20

// ================== End ============= // 


// Assignment 4 

let points = 10;

// Write Your Code Here

console.log(points + true + true + true); // 13

// Write Your Code Here

console.log(points - true - true); // 8;