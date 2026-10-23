const score = 400
const balance = new Number(100) //number object // eplicitly defining number object
console.log(balance);
console.log(typeof balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // used foer precision value
const otherName = 123.3946;
console.log(otherName.toPrecision(4));
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


//******************MATHS******************************

console.log(Math); //math is also a default in js same as number 
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // Math.random() ek random decimal number deta hai jo 0 (included) se 1 (excluded) ke beech hota hai. 
console.log((Math.random()*10)+1); //+1 for to avoid 0.0889... to become 0
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));
 

