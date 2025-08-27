// ✅ Day 24 Challenge: Longest Substring Without Repeating Characters

// 💼 Problem Statement:
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"  
// Output: 3  
// Explanation: The answer is "abc", with length 3.

// Example 2:
// Input: s = "bbbbb"  
// Output: 1  
// Explanation: The answer is "b", with length 1.

function longestSubstring(s) {
    let seen = new Set();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}


console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb"));    // 1
console.log(longestSubstring("pwwkew"));   // 3
