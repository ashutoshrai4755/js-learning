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

