// ✅ Exercise 1: Match All Lowercase Letters
let str1 = "Hello World!";
let lowerCaseLetters = /[a-z]/g;
console.log(str1.match(lowerCaseLetters));

console.log("\n".repeat(3));

// ✅ Exercise 2: Match All Digits
let str2 = "Room 123, Floor 4, Building 56B";
let numsOnly = /\d/g;
console.log(str2.match(numsOnly));

console.log("\n".repeat(3));

// ✅ Exercise 3: Match Words Ending with ing
let str3 = "I'm learning regex while building and testing everything.";
let endWithIng = /\w+ing\b/g;
console.log(str3.match(endWithIng));

console.log("\n".repeat(3));

// ✅ Exercise 4: Match Valid Email Addresses
let str4 =
  "Contact us at support@company.com or sales@shop.net. Invalid: test@wrong, @nope.com";
let validEmail = /\w+@\w+\.(com|net)/g;
// let validEmail = /\w+@\w+\.\w+/g;
console.log(str4.match(validEmail)); // ["support@company.com", "sales@shop.net"]

console.log("\n".repeat(3));

// ✅ Exercise 5: Match Dates in dd-mm-yyyy Format
let str5 =
  "The event is scheduled for 14-05-2025, and the deadline is 01-06-2025.";

let dateFormat = /\d{2}-\d{2}-\d{4}/g;
console.log(str5.match(dateFormat)); // ["14-05-2025", "01-06-2025"]

console.log("\n".repeat(3));

// ✅ Exercise 6: Match URLs with http or https

let str6 =
  "Visit our website at http://example.com or https://secure-site.net.";
let reqLink = /https?:\/\/\w+(-\w+)?\.\w+/g;
console.log(str6.match(reqLink));
//["http://example.com", "https://secure-site.net"]

/*🔍 Breakdown:
https? → Matches http or https
:\/\/ → Escaped ://
\w+ → Matches the domain name (e.g., example, secure)
(-\w+)? → Optionally matches a hyphenated word (like secure-site)
\.\w+ → Matches the top-level domain like .com or .net
*/

console.log("\n".repeat(3));

// ✅ Exercise 7: Match Hashtags
let str7 =
  "Loving the new features in #JavaScript! Also check out #Regex and #100DaysOfCode.";
let hashed = /#\w+/g;
console.log(str7.match(hashed));
//["#JavaScript", "#Regex", "#100DaysOfCode"]

console.log("\n".repeat(3));

// ✅ Exercise 8: Match HTML Tags

let str8 = "<div>Hello</div><span>World</span><br>";
let matchedHTMLTags = /<\/?\w+>/g;
console.log(str8.match(matchedHTMLTags));
["<div>", "</div>", "<span>", "</span>", "<br>"];

console.log("\n".repeat(3));

// التكليف 01

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipPattern = /([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/gi;
console.log(ipPattern.test(ip)); // true

/*
Step 1: Understand the IP structure
IPv6 IP has 8 groups separated by colons :

Each group contains 1 to 4 hex digits

Hex digits = 0-9, a-f, A-F

Step 2: Write regex for one group
One group: [0-9a-fA-F]{1,4}
(1 to 4 characters from hex digits)

Step 3: Add the colon separator
Groups are separated by :

So for 7 groups followed by ::
([0-9a-fA-F]{1,4}:){7}
means 7 times a group + colon

Step 4: Match the 8th group without colon
The last group has no colon after it:
[0-9a-fA-F]{1,4}

Step 5: Combine everything with anchors
Add start ^ and end $ anchors to match the whole string exactly:
^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$
*/

console.log("\n".repeat(3));

// التكليف 02

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialReg = /\bos+o?\d?\d?\d?o\b/gi;
// let specialReg = /\bos+o?\d{0,3}o\b/gi;
console.log(specialNames.match(specialReg));
// ['Os10O', 'OsO', 'Os100O']

console.log("\n".repeat(3));

// التكليف 03

let phone = "+(995)-123 (4567)";
let phoneReg = /\+\(\d{3}\)-\d{3} \(\d{4}\)/g;
console.log(phoneReg.test(phone)); // true
console.log(phone.match(phoneReg)); // ['+(995)-123 (4567)']

console.log("\n".repeat(3));

// التكليف 05

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}\s*[/\-\s]\s*\d{2}\s*[/\-\s]\s*\d{2,4}/g;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

/*
Explanation:

\d{2} — matches two digits (day or month)
\s* — allows optional spaces before/after the separator
[/\-\s] — matches one separator which can be / or - or a space
\d{2,4} — matches year with 2 or 4 digits

*/
console.log("\n".repeat(3));

// التكليف 06 challenge

// المطلوب عمل Pattern واحد فقط يقوم بعمل Match لجميع هذه الروابط

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let regex =
  /(https?:\/\/)?(www\.)?[\w\-]+(\.[\w\-]+)+(:\d+)?(\/[\w\-\.]+)?(\?[^\s]*)?/g;

console.log(url1.match(regex));
console.log(url2.match(regex));
console.log(url3.match(regex));
console.log(url4.match(regex));
console.log(url5.match(regex));

/*
Explanation of added parts:

(https?:\/\/)? — optional http:// or https://
(www\.)? — optional www.
[\w\-]+ — domain name parts (letters, digits, dashes)
(\.[\w\-]+)+ — at least one dot and domain extension(s) (like .org, .co.uk)
(:\d+)? — optional port like :8080
(\/[\w\-\.]+)? — optional path (e.g. /articles.php)
(\?[^\s]*)? — optional query parameters starting with ?
*/
