/*
Write a JavaScript program that takes two numbers and an operator (+, -, *, /) from the user and performs the corresponding arithmetic operation.
If the operator is not one of the four specified, print an error message.
*/

let a = prompt("Enter the 1st number:");
a = Number(a);

let operator = prompt("Enter an operator (+, -, *, /):"); // String

let b = prompt("Enter the 2nd number:");
b = Number(b);

if (operator === "+") {
  console.log(a + b);
  document.write(a + b);
} else if (operator === "-") {
  console.log(a - b);
  document.write(a - b);

} else if (operator === "*") {
  console.log(a * b);
  document.write(a * b);

} else if (operator === "/") {
  console.log(a / b);
  document.write(a / b);

} else {
  console.log("Invalid Operator");
}
