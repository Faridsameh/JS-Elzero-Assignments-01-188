//https://elzero.org/javascript-bootcamp-assignments-lesson-from-010-to-017/

//Assignment 1 

let numOne = 10;
let numTwo = 20;

console.log(numOne + "" + numTwo); // Normal Concatenate => 1020
console.log(typeof (numOne + "" + numTwo)); // Normal Concatenate => String
console.log(`${numOne}${numTwo}`); // Template Literals Way => 1020
console.log(typeof (`${numOne}${numTwo}`)); // Template Literals Way => String

console.log(numTwo + "\n" + numOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numTwo}
${numOne}`);
/*
  Template Literals Way
  20
  10
*/

// Assignment 2

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// Assignment 3


/* Print the folling using normal concatenate 

`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``  

*/
let a = "I'm In";
let b = "Love";
let c = "With";
let d = "JavaScrip";

console.log("`" + a + "\n" + "\\" + "\\" + "\n" + b +
    " \\" + "\\ " + "\"\"" + "\"" + ' \'\'' + "'" + "\n" + "++ " + c + " ++" + "\n" +
    "\\" + "\"\"" + "\"" + "\\" + "\"\"" + "\"" + "\n" + "\"\"" + d + "\"\"" + "``");
// End Assignment 3

/* Assignment 4 

قم بإستعمال المتغيرات لتخرج بالنتيجة الموجودة في ال *
Code
لا يمكن تكرار المتغير أكثر من مرة *
لا يمكن كتابة اي ارقام بيدك وتستعمل فقط قيم المتغيرات *
*/

let f = 21;
let m = 20;
let symb = "_"

 // _21_2021_2021_2021_20_

 console.log(`${symb}${f}${symb}${m}${f}${symb}${m}${f}${symb}${m}${f}${symb}${m}${symb}`);
 console.log("_"+(f+"_"+m).repeat(4)+"_");