//Assignment 1 is related to comments usage. // & /*  */
//Assignment 2
document.write("<h1>Elzero</h1>");
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.fontSize = '80px';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.fontWeight = 'bold';
document.querySelector('h1').style.fontFamily = 'Arial';
// Assignment 3 >> Write a phrase with syle in console.
console.log("%cElzero %cWeb %cSchool", "font-size:40px;color:red;", "font-size:40px;color:green; font-weight:bold;", "font-size:40px;color:blue;");
/* Assignment 4 >> console: group() method
reference: MDN >  https://developer.mozilla.org/en-US/docs/Web/API/console/group
*/
console.group("Group 1");
console.log("Message one");
console.log("Message Two");
console.group("Child Group");
console.log("Message one");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message one");
console.log("Message Two");
console.groupEnd("Group 1");
console.groupEnd("Child Group");
console.groupEnd("Grand Child Group");
console.group("Group 2");
console.log("Message one");
console.log("Message Two");
console.groupEnd("Group 2");

/* Assignment 5 console: table() method*/
console.table(["Ahmed", "Ashraf", "Zahra", "Farid", "Mariam"]);
// Assignment 6 Prevent code from running in 2 ways.

// Way 1

//console.log("Iam In Console");
//document.write("Iam In Page");

// Way 2

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/