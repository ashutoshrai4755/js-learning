// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); // "Agar ek side null hai aur doosri side undefined hai, toh true hai."
//"Agar ek side null hai aur doosri side kuch aur hai (number, string, boolean, object — kuch bhi except undefined), toh JS koi type conversion nahi karega — seedha false de dega."
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// strict check(===, !==) -> It doesn't only check the value but it also checks the datatypes very strictly.

//console.log("2" == 2); it returns true because it checks only value. It means there is conversion in same datatypes with the help of abstract operation.
//Loose Equality value check karta hai, type ignore karta hai

//console.log("2" === 2); there is no conversion of datatypes. it checks value as well as datatypes. 





