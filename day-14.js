// 🧠 DSA Day 14 Challenge

// Topic: Sliding Window Technique
// Difficulty: Medium
// Approach Required: Brute-force Only ❌ No optimized solution allowed today!

// 🔍 Problem Statement:
// You are working on a website analytics dashboard. You receive hourly visitor counts for a website as an array visitors[], where each element represents the number of users visiting the site in that hour.

// Your task is to find the minimum number of visitors in any k consecutive hours.

// 📥 Input:

// ▫ visitors[]: an array of integers representing visitor counts

// ▫ k: an integer (number of consecutive hours)

// 📤 Output:
// An integer representing the minimum total visitors in any k-hour window

// 🧪 Example:
// Input: visitors = [120, 80, 100, 90, 150, 110, 70], k = 3  
// Output: 270

function minVisitors(visitors, k) {
    let n = visitors.length;
    let minSum = Infinity;

    for (let i = 0; i <= n - k; i++) {
        let windowSum = 0;
        for (let j = i; j < i + k; j++) {
            windowSum += visitors[j];
        }
        minSum = Math.min(minSum, windowSum);
    }

    return minSum;
}


const visitors = [120, 80, 100, 90, 150, 110, 70];
const k = 3;

console.log(minVisitors(visitors, k)); //  Output: 270
