// 🚀 Day 5 DSA Challenge is LIVE! 🎯
// Get ready to level up with real-world problems using JS Array Built-in Methods 💥


// 🔎 Problem 1: Separate Phone Numbers

// Problem:
// You are given an array of phone numbers. Some are Indian numbers (+91 format) and others are US numbers (+1 format). Write a function to separate them into two different arrays.

// const phoneNumbers = [
//   "+919876543210",
//   "+14085551234",
//   "+918888777666",
//   "+12345678901",
//   "+917654321098"
// ];

// ✅ Output:

// {
//   indianNumbers: ["+919876543210", "+918888777666", "+917654321098"],
//   usNumbers: ["+14085551234", "+12345678901"]
// }

// 🧠 Hint: Use .filter() method and check string patterns using .startsWith().
//SOLUTIONS//

const phoneNumbers = [
  "+919876543210",
  "+14085551234",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];

const result = {
  indianNumbers: phoneNumbers.filter(num => num.startsWith("+91")),
  usNumbers: phoneNumbers.filter(num => num.startsWith("+1"))
};

console.log(result);







// ✨ Problem 2: Insert Product in Cart

// Problem:
// You're building a shopping cart. Given an array of product IDs in the cart, write a function that inserts a new product at the second position (index 1).

// let cart = [101, 102, 104];
// let newProduct = 103;

// ✅ Output:

// [101, 103, 102, 104]

// 🧠 Hint: Use .splice() method to insert.

//SOLUTIONS//

let cart = [101, 102, 104];
let newProduct = 103;

cart.splice(1, 0, newProduct);

console.log(cart);






// 💼 Problem 3: Insert Student in Waiting List

// Problem:
// You are managing a waiting list of students for an event. Add a new student at the end of the list using a built-in method.

// let waitingList = ["Ali", "John", "Sara"];
// let newStudent = "Aarav";

// ✅ Output:

// ["Ali", "John", "Sara", "Aarav"]

// 🧠 Hint: Think .push()


//SOLUTIONS//

let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";

waitingList.push(newStudent);

console.log(waitingList);