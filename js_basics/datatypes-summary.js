//types of datatypes on the basis of how to store data in memory and how to access it are of two types i.e.
// PRIMITIVE DATATYPES
//All the primitive datatypes are call by value types. It means whenever we copy data from one place to another place then the reference of memory of original data is not provided. Whatever changes we do in copy data, then there is no changes in original data.
// Primitives are immutable. It means whatever changes are there, it doesn't changed in original memory
// there are 7 types of primitive datatypes i.e.
// String
// Number
// Boolean
// NULL
// Undefined
// Symbol(It is used to make values unique)
// BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userName;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

const bigNumber = 2353776383837394475n ;



//Note-: JavaScript is a dynamically typed language, which means variable types are determined at runtime (while the code is executing), not at compile time. The same variable can hold different types of values throughout its lifetime, without any explicit type declaration.


// NON PRIMITIVE DATATYPES(Reference type)-> Non Primitive datatypes are mutable datatypes. It means whatever we try to change, it directly changed into original referenced memory.
//Types of Non primitive datatypes
//Array
//Objects
//Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Ashu",
    age: 24,
}


const myFunction = function(){
    console.log("Hello World");
    
}

//to find the datatype we use a built in function i.e. typeof
console.log(typeof(myFunction));

// https://262.ecma-international.org/5.1/#sec-11.4.3
