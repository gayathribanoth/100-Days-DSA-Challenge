// 🚀 Day 16 - DSA Challenge is LIVE!
// Hey champs! 🔥
// Let’s level up our Sliding Window skills with a new twist. No sum this time it’s all about counting! 🧠💪
// 👉 Solve this using only the Brute Force Approach for now no optimized logic yet.

// 🧩 Challenge: Count Occurrences of Anagrams
// Given a string txt and a pattern string pat, your task is to count how many times an anagram of pat appears in txt as a substring.

// 📌 Example:
// Input: txt = "forxxorfxdofr", pat = "for"
// Output: 3
// Explanation: Anagrams of "for" => "for", "orf", "rfo", etc.


function countAnagrams(txt, pat) {
    let n = txt.length;
    let m = pat.length;
    let count = 0;

    // helper: check if two strings are anagrams
    function isAnagram(s1, s2) {
        return s1.split("").sort().join("") === s2.split("").sort().join("");
    }

    // check all substrings of length m
    for (let i = 0; i <= n - m; i++) {
        let sub = txt.substring(i, i + m);
        if (isAnagram(sub, pat)) {
            count++;
        }
    }

    return count;
}


const txt = "forxxorfxdofr";
const pat = "for";
console.log(countAnagrams(txt, pat)); //  Output: 3
