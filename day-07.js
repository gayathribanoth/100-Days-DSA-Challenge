// Today’s challenge is all about real-world problem-solving using Insertion, Deletion, and the classic Two Pointers technique.

// 🧠 Get ready to think like a developer and solve problems that feel close to real-life use cases!

// 🔹 1. Insert New Delivery Order
// 📦 Problem:
// You are managing a food delivery dashboard. Orders are stored in an array sorted by delivery time. A new order comes in, and you need to insert it in the correct position to keep the array sorted by delivery time.

// 📝 Input: An array of objects like
// [
//   { orderId: 1, deliveryTime: "12:00" },
//   { orderId: 2, deliveryTime: "12:30" }
// ]
// and a new order:

// { orderId: 3, deliveryTime: "12:15" }

// 🧩 Task: Insert the new order at the correct position.

let orders = [
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
];

let newOrder = { orderId: 3, deliveryTime: "12:15" };

// Insert in right position
for (let i = 0; i < orders.length; i++) {
  if (newOrder.deliveryTime < orders[i].deliveryTime) {
    orders.splice(i, 0, newOrder);
    break;
  }
}

// If not inserted, push at the end
if (!orders.includes(newOrder)) {
  orders.push(newOrder);
}

console.log(orders);






// 🔹 2. Remove Inactive Users 
// 👥 Problem:
// You are building a social media cleanup tool. Given an array of user accounts with an isActive boolean flag, remove all users who are inactive.

// 📝 Input:

// [
//   { username: "ali", isActive: true },
//   { username: "sara", isActive: false },
//   { username: "john", isActive: true }
// ]

// 🧩 Task: Return a new array without the inactive users.

let users = [
  { username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }
];

let activeUsers = users.filter(user => user.isActive);

console.log(activeUsers);


// 🔹 3. Movie Pair Watch Time 
// 🎬 Problem:
// You and your friend have exactly targetTime minutes to watch two movies. You're given an array of movie durations. Find if there are two different movies you can watch back-to-back within the exact targetTime.

// 📝 Input:

// movieDurations = [90, 85, 75, 60, 120, 150, 125]  
// targetTime = 250

// 🧩 Task: Return the pair of movie durations that exactly sum up to targetTime. Use two pointers approach efficiently.

let movieDurations = [90, 85, 75, 60, 120, 150, 125];
let targetTime = 250;

// Sort the array first
movieDurations.sort((a, b) => a - b);

let left = 0;
let right = movieDurations.length - 1;
let result = null;

while (left < right) {
  let sum = movieDurations[left] + movieDurations[right];

  if (sum === targetTime) {
    result = [movieDurations[left], movieDurations[right]];
    break;
  } else if (sum < targetTime) {
    left++;
  } else {
    right--;
  }
}

console.log(result || "No pair found");
