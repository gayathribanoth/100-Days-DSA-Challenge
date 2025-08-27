// 🚀 Day 18 - DSA Challenge

// Topic: Arrays - Sliding Window (Optimized Approach)

// Problem:
// "Longest Subarray with Sum ≤ K"
// Given an integer array nums and an integer k, return the length of the longest subarray whose sum is less than or equal to k.

// Input:  nums = [4, 2, 1, 7, 8, 1, 2, 8, 1], k = 8  
// Output: 3  
// Explanation:  
// Possible subarrays with sum ≤ 8:  
// [4, 2, 1] → sum = 7 → length = 3  
// [2, 1, 5] → sum = 8 → length = 3  
// No subarray with length > 3 has sum ≤ 8.  

// Task:
// Solve this using the optimized Sliding Window technique. Avoid brute force.

// Expected Time Complexity:
// O(n)

function longestSubarray(nums, k) {
    let left = 0, sum = 0, maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; 
        while (sum > k) {
            sum -= nums[left];
            left++;
        }


        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}


const nums = [4, 2, 1, 7, 8, 1, 2, 8, 1];
const k = 8;
console.log(longestSubarray(nums, k)); //  Output: 3
