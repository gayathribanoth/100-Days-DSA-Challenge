// 🚀 Day 19 - DSA Challenge

// Topic: Arrays / Strings – Sliding Window (Optimized Approach)

// 🧠 Problem Statement:
// You're analyzing user browsing behavior. You are given a list of webpages (as strings), visited in order, and a window size k. You need to determine if any window of k consecutive pages contains all unique pages (no repeats).

// If such a window exists, return true. Otherwise, return false.

// 📥 Input:
// pages[ ] = ["home", "about", "products", "home", "cart", "checkout"]  
// k = 3

// 📤 Output: true

// Explanation:
// The window ["about", "products", "home"] contains all unique entries.

// ⚡ Your Task:
// ▫ Solve this using an optimized sliding window approach.
// ▫ Avoid using brute force (O(n*k))  aim for O(n) time complexity.


function uniqueWebPage(arr,k){
    let left=0;
    let freq={};
    for(let i=0;i<arr.length;i++){
    freq[arr[i]]=(freq[arr[i]] || 0)+1;
    
    if(i-left+1 > k){
        freq[arr[left]]--;
        if(freq[arr[left]]===0) {delete freq[arr[left]]};
        left++;
    }
    if(i-left+1===k && Object.keys(freq).length===k){
        return true;
    }
}
    return false;
}
console.log(uniqueWebPage(["home", "about", "products", "home", "cart", "checkout"],3))