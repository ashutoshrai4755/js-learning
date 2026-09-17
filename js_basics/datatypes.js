"use strict"; // treat all JS code as newer version
// "use strict" ka matlab hai — JS engine ko bolna: "mujhe strict/careful mode mein chalao, jahan galtiyan jo pehle silently ignore hoti thi, ab error ban jaayengi."
//"Newer version" ka matlab hota — naye features milna (jaise let, const, arrow functions, classes waghera — ye sab ES6+ ki cheezein hain).

//alert(3+3) // we are using nodejs, not browser. It means alert is a feature which is given by browser and node js is not a browser. its a runtime environment.
console.log(3+3); console.log("Ashu") //readability is not there

console.log(3
    +
    3) // code readability should be high

console.log("Ashu")


//DATA TYPES

let name = "Ashu"
let age = 21
let isLoggedIn = true
let state

//PRIMITIVE DATATYPES=> immutable

//number => range is 2 to power of 53
//bigint => to store values beyond number. oftenly we don't use it. it used in mainly trading related, in big websites etc;
//string => used ""/''
//boolean => true/false
//null => standalone value
//undefined => just declared
//symbol => unique


//NON PRIMITIVE DATATYPES => mutable
//object

console.log(typeof null); //undefined
console.log(typeof undefined); //object