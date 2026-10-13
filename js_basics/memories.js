// javascript mein Memory automatically manage hoti hai: engine (jaise Chrome/Node ka V8) khud memory deta hai aur Garbage Collector (GC) khud saaf karta hai.
//Two types of memory-: Stack and Heap
//Stack memory is used for Primitive Datatypes and heap memory is used for Non-Primitive datatypes.

let myYouTubename = "ashutoshrai"
let anothername = myYouTubename
anothername = "chaiaurcode"
console.log(anothername);
console.log(myYouTubename);

let userOne = {
    email: "ashutoshrai@gmail.com",
    upi: "user@ybl"
};

let userTwo = userOne

userTwo.email = "ashu@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);




