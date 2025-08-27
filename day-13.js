// 📢 DSA Day - 13 Challenge: Longest Productive Streak (Brute Force Edition) 💥💻
// Hey Team!
// Before we master optimized techniques, it's crucial to struggle with brute-force because it builds the foundation for understanding why we optimize in the first place 💡

// ✅ Challenge: Longest Productive Streak (Real-World Sliding Window Scenario)
// 📈 Problem Statement:
// You’re building a productivity tracker app. The user’s daily productivity over the past few weeks is stored in an array:

// 1 (productive day)

// 0 (unproductive day)

// You are allowed to flip up to k unproductive (0) days into productive days.
// Your task is to find the maximum length of a productive streak possible after at most k flips.

// 📥 Input Example:
// days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0]  
// k = 2
// 📤 Expected Output:
// 7

// 📌 Explanation:
// By flipping two 0’s (at indices 4 and 5), you get a streak of 7 continuous 1’s.

// 🧠 Your Task for Today:
// ✅ Solve this using the brute-force approach only
// Try all possible subarrays and count how many 0’s can be flipped.
// No shortcuts today. No sliding window.

function longestProductiveStreak(days, k) {
    let n = days.length;
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
        let zeroCount = 0;
        for (let j = i; j < n; j++) {
            if (days[j] === 0) zeroCount++;
            if (zeroCount <= k) {
                maxLen = Math.max(maxLen, j - i + 1);
            } else {
                break; // further extension will have even more 0’s
            }
        }
    }
    return maxLen;
}


const days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
const k = 2;
console.log(longestProductiveStreak(days, k)); // ✅ Output: 7
