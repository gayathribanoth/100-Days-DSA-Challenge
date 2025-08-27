// 📢 DSA Day - 9 Challenge: Real-World Two Pointers (EZ-Medium) 💻🚀
// Hey Devs!
// It’s Day 9 and you all are doing great. Today we continue exploring the magic of Two Pointers 

// ✅ Q1. Remove Duplicate Emails (Like Gmail cleanup)
// 📧 Problem:
// You're building an email cleanup feature. Given a sorted list of email IDs, remove all duplicates in-place and return the list of unique emails.

// 📝 Input:
// emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]
// 📤 Output:
// ["ali@gmail.com", "sara@gmail.com", "zayn@gmail.com"]

//SOLUTIONS//

let emails = [
  "ali@gmail.com",
  "ali@gmail.com",
  "sara@gmail.com",
  "sara@gmail.com",
  "zayn@gmail.com"
];

function removeDuplicates(emails) {
  if (emails.length === 0) return [];

  let uniqueIndex = 0;

  for (let i = 1; i < emails.length; i++) {
    if (emails[i] !== emails[uniqueIndex]) {
      uniqueIndex++;
      emails[uniqueIndex] = emails[i];
    }
  }

  // Slice to return only unique part
  return emails.slice(0, uniqueIndex + 1);
}

console.log(removeDuplicates(emails));



// ✅ Q2. Playlist Duration Matcher (Music App Feature)
// 🎵 Problem:
// You’re building a music app. Users want to create a 2-song playlist that exactly matches their commute time.

// You're given an array of song durations (in minutes), and a targetDuration.
// Find one pair of songs (different songs) that exactly add up to the target.

// 📝 Input:

// songs = [3, 5, 8, 2, 7, 4]  
// targetDuration = 10

// 📤 Output:

// [2, 8] // or [3, 7], any valid pair

// 🧠 Hint:

// Sort the array

// Use two pointers — one from the start, one from the end


let songs = [3, 5, 8, 2, 7, 4];
let targetDuration = 10;

function findPair(songs, target) {
  songs.sort((a, b) => a - b); // Step 1: Sort
  let left = 0;
  let right = songs.length - 1;

  while (left < right) {
    let sum = songs[left] + songs[right];
    if (sum === target) {
      return [songs[left], songs[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

console.log(findPair(songs, targetDuration));
