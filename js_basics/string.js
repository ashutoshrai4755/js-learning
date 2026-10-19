// "" or '' used for string
const name = "Ashu"  // behind the scene it also invoke the object 
const repoCount = 50
//console.log(name + repoCount + "Value");   //outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);       //string interpolation -: String interpolation means inserting variables or expressions directly into a string using ${} inside backticks, like `Hello ${name}`.
//It replaces the old + concatenation and makes strings easier to read.

// Another way to declare the string is-:
const gameName = new String('AshuRai-Btech')
// String is an object type in jS with key value pair in console
// To access key value pair-:
console.log(gameName[0]);

//We can also access prototypes i.e.
console.log(gameName.__proto__); // we get an empty object but it is not empty. It contains many value.

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,3); //last index is not included
console.log(newString);


const anotherString = gameName.slice(-6,5)
console.log(anotherString);

const newStringOne = '   AshuRai   '
console.log(newStringOne);
console.log(newStringOne.trim());
let s1 = "\n\t  Hi  \n";
console.log(s1.trim());   // "Hi"
let s = "   Hello   ";
console.log(s.trimStart());  // "Hello   "  (sirf aage se)
console.log(s.trimEnd());    // "   Hello"  (sirf peeche se)


const url = "https://ashurai.com/ashu%20rai"
console.log(url.replace('%20', '--'));
console.log(url.includes('sundar'));
console.log(gameName.split(''));






