// 🔥 DSA Day 6 Challenge is HERE! 🔥
// Today we dive deeper into JS Arrays  insert, delete, traverse & conquer! 💪
// Built-in methods are your weapons use them smartly! 🧠⚔️

// 🛒 Q1. Add Product to Cart

// You’re working on an e-commerce site. Insert a new product ID 105 at the end of the cart array.

// let cart = [101, 102, 103, 104];
// // Insert 105 at the end

// ✅ Expected Output:

// [101, 102, 103, 104, 105]

// 🧠 Hint: Use .push().

//SOLUTIONS//
// let cart = [101, 102, 103, 104];
// cart.push(105); // Adds 105 at the end

// console.log(cart);




// 🧼 Q2. Remove Sold Out Item

// Given a cart with product IDs, remove the product 103 from it.

// let cart = [101, 102, 103, 104];
// // Remove 103

// ✅ Expected Output:

// [101, 102, 104]

// 🧠 Hint: Use .filter() or .indexOf() with .splice().

//SOLUTIONS//


let cart = [101, 102, 103, 104];
cart = cart.filter(item => item !== 103);

console.log(cart);




// 📍 Q3. Insert at Specific Position

// Insert "banana" at the 2nd index in this fruits array:

// let fruits = ["apple", "orange", "grapes"];

// ✅ Expected Output:

// ["apple", "orange", "banana", "grapes"]

// 🧠 Hint: Use .splice(index, 0, item).

//SOLUTIONS//

let fruits = ["apple", "orange", "grapes"];
fruits.splice(2, 0, "banana"); // Insert "banana" at index 2

console.log(fruits);


// 🔁 Q4. Print All Students

// Traverse the students array and print a message like:
// 📢 “Hello, <studentName>!” for each name.

// let students = ["Ali", "Zara", "John"];

// ✅ Expected Output:

// Hello, Ali!
// Hello, Zara!
// Hello, John!

// 🧠 Hint: Use .forEach() or a for loop.

//SOLUTIONS//

let students = ["Ali", "Zara", "John"];

students.forEach(name => {
  console.log(`Hello, ${name}!`);
});


// 📦 Q5. Delete First Item from Queue

// You are simulating a queue. Remove the first item from this list of orders:

// let orders = ["order1", "order2", "order3"];

// ✅ Expected Output:

// ["order2", "order3"]

// 🧠 Hint: Use .shift().

//SOLUTIONS//
let orders = ["order1", "order2", "order3"];
orders.shift(); // Removes the first item

console.log(orders);
