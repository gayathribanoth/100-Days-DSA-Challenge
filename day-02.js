// 🚨 Day-2 DSA Challenge is LIVE! 💻🔥

// 🧾 1. Generate Invoice Report 
// Problem:
// You're building an invoice generator. For each item, calculate total = qty * price. 
// let items = [
//   { name: "Pen", qty: 3, price: 10 },
//   { name: "Notebook", qty: 2, price: 50 },
//   { name: "Bag", qty: 1, price: 400 }
// ];

// ✅ Expected Output:

// [
//   { name: "Pen", total: 30 },
//   { name: "Notebook", total: 100 },
//   { name: "Bag", total: 400 }
// ]

// Hint : Use Map & Reduce

//sol:

let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];

let invoiceGenerator = items.map(item => {
  return {
    name: item.name,
    total: item.qty * item.price
  };
});

console.log(invoiceGenerator);





// 🧠 2. Detect Duplicate Entries 
// Problem:
// You’re validating a user list. Some users are accidentally added more than once. Extract the duplicate names only.

// let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];

// ✅ Expected Output:

// ['Ali', 'Sara']

// 💡 Hint: Compare indexOf and lastIndexOf.

let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];

let duplicate = users.filter((name, index) => {
  return users.indexOf(name) !== index;
});
let uniqueDuplicates = [...new Set(duplicate)];

console.log(uniqueDuplicates);




// 📈 3. Find Most Sold Product
// Problem:
// You're analyzing orders. Find the product with the highest quantity sold.

// let orders = [
//   { product: 'Pen', qty: 10 },
//   { product: 'Notebook', qty: 5 },
//   { product: 'Pen', qty: 15 },
//   { product: 'Bag', qty: 1 },
//   { product: 'Notebook', qty: 10 }
// ];

// ✅ Expected Output:
// 'Pen'
// 💡 Hint: First create a frequency map using reduce, then extract the max.

let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];

let productMap = orders.reduce((acc, curr) => {
  acc[curr.product] = (acc[curr.product] || 0) + curr.qty;
  return acc;
}, {});

let mostSold = '';
let maxQty = 0;

for (let product in productMap) {
  if (productMap[product] > maxQty) {
    maxQty = productMap[product];
    mostSold = product;
  }
}

console.log(mostSold);
