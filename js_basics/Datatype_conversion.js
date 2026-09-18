let score = "33abc"
let score1 = null
let score2 = undefined
let score3 = true
let score4 = "Ashu"
console.log(typeof score);
console.log(typeof (score))

let valueInNumber = Number(score4)
console.log(typeof valueInNumber);

console.log(valueInNumber)


//conversion-:

// "33" => 33
//"33abc" => NaN(Not a Number) but typeof is number
// null => 0
//undefined => NaN
// true => 1; false => 0;
// "Ashu" => NaN

let isLoggedIn = 1
let isLoggedIn1 = ""
let isLoggedIn2 = "Ashu"
let booleanisLoggedIn = Boolean(isLoggedIn2)
console.log(booleanisLoggedIn);

//conversion-:

// 1 => true; 0 => false
// "" => false
//"Ashu" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ******************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

//Arithmetic operation
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);


// INCREMENT/DECREMENT OPERATOR
//let x = 5;
//x++;  // x = 6 (increment)
//x--;  // x = 5 (decrement)


//ASSIGNMENT OPERATOR
//let x = 10;

//x += 5;  // x = x + 5  → 15
//x -= 3;  // x = x - 3  → 12
//x *= 2;  // x = x * 2  → 24
//x /= 4;  // x = x / 4  → 6
//x %= 4;  // x = x % 4  → 2


//COMPARISION OPERATOR
//let a = 5, b = "5";

//console.log(a == b);   // true  → Value compare (type ignore)
//console.log(a === b);  // false → Value + Type dono compare
//console.log(a != b);   // false
//console.log(a !== b);  // true
//console.log(a > 3);    // true
//console.log(a < 3);    // false
//console.log(a >= 5);   // true
//console.log(a <= 4);   // false


//LOGICAL OPERATOR
// let a = true, b = false;

//console.log(a && b);  // false → AND (dono true hone chahiye)
//console.log(a || b);  // true  → OR (koi ek true ho toh chalega)
//console.log(!a);      // false → NOT (opposite kar deta hai)

//STRING OPERATOR

let str1 = "hello"
let str2 = "Ashu"

let str3 = str1 + " " + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");   // JavaScript + operator ko left se right evaluate karta hai, do values ek time pe combine karke.

console.log(3+4*5%3);

console.log(+true);    //Unary + ka kaam hi yehi hota hai — "jo value do, usse Number banao" (ye internally ToNumber abstract operation trigger karta hai)
console.log(+"");   

let num1, num2, num3

num1 = num2 = num3 = num3 = 2+2


//PREFIX AND POSTFIX INCREMENT
let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//link to study

//https://tc39.es/ecma262/multipage/abstract-opertions.html#sec-type-conversion






