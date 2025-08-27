// 🚀 Day 15 DSA Challenge: Sliding Window
// Problem Name: "Detect Suspicious Browsing Pattern"

// 🧠 Problem Statement:
// You're analyzing user browsing behavior. You are given a list of webpages (as strings), visited in order, and a window size k. You need to find if any window of k consecutive pages contains all unique pages (i.e., no page is repeated).

// If such a window exists, return true. Else, return false.

// 📥 Input:

// pages[] = ["home", "about", "products", "home", "cart", "checkout"]

// k = 3

// 📤 Output:
// true
// Explanation: The window ["about", "products", "home"] has all unique entries.

// 📌 Instructions:
// You must solve this using a brute-force approach first (nested loops).


function hasUniqueWindow(pages, k) {
    for (let i = 0; i <= pages.length - k; i++) {
        let set = new Set();
        for (let j = i; j < i + k; j++) {
            set.add(pages[j]);
        }
        if (set.size === k) {
            return true; // found a unique window
        }
    }
    return false; // no unique window
}

// Example
const pages = ["home", "about", "products", "home", "cart", "checkout"];
const k = 3;

console.log(hasUniqueWindow(pages, k)); // ✅ Output: true
