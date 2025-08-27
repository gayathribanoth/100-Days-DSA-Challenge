// 📢 DSA Day - 11 Challenge: Advanced Two Pointers 🧠🔥
// Hey Students!
// You’ve now got the hang of basic and medium-level problems. Today, let’s push your thinking with a hard-level problem that demands both logic and optimization using the Two Pointers technique.

// 🔥 Challenge: Find All Unique Triplets That Sum to Zero
// Problem Statement:
// You’re building a feature for a finance dashboard that analyzes daily profit/loss patterns. You're given an array of integers representing daily net changes.
// Your task is to find all unique triplets (i, j, k) such that:
// arr[i] + arr[j] + arr[k] == 0  and i != j != k

// 📝 Input Example:
// arr = [-1, 0, 1, 2, -1, -4]

// 📤 Expected Output:
// [[-1, -1, 2], [-1, 0, 1]]

// 🔧 Constraints:

// The output must not contain duplicate triplets.

// You must solve this in better than O(n³) — try to get it down to O(n²) using Two Pointers.

// 🧠 Hint:

// Sort the array.

// Fix one element and use two pointers to scan for the other two.

// Skip duplicates carefully.

function threeSum(arr) {
    arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // skip duplicates for i

        let left = i + 1, right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;

                // skip duplicates
                while (left < right && arr[left] === arr[left - 1]) left++;
                while (left < right && arr[right] === arr[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// ✅ Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
