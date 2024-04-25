---
title: 'LeetCode 1. Two Sums'
description: 'A TypeScript solution to the Two Sums problem, an efficient algorithm using a hashmap that runs in O(N) time'
pubDate: 'April 26 2024'
heroImage: '/blog/leetcode-1-two-sums.webp'
tags: ['LeetCode', 'DSA', 'TypeScript', 'Education']
---

# LeetCode 1. Two Sums

If you prefer a visual explanation, please check out [my video here](https://youtu.be/4oPGx3ROuHo?si=vZsFc3WNTT56egjW), although bare in mind this is the first video I've recorded so the mic settings weren't great so it might be easier for you to read the solution here.

### TLDR

[Source code for my O(N) TypeScript solution using a hashmap](https://github.com/AidanLDev/code-challenges/blob/main/leetcode/type-script/1_two-sums.ts)

### The problem

We have two params, an array of numbers and a target.

The goal here is to find which two numbers in the array sum up to the target and output their indexes.

An example here:

```JavaScript
let nums = [2, 7, 13, 5, 8, 11, 1, 4];
let target = 10;

// Output [0, 4]
nums[0] + nums[4] === 10 // 2 + 8 = 10
```

### Brute force solution

The easiest way to solve this would be to loop through our nums array and for every number, check if that number + any other number in the array matches our target.

Here's a [draw up of our algorithm](https://excalidraw.com/#json=U9lbEfVZYEEkqBdvjNfiC,DPTh4879LfPy8uq5J2aClQ)

If it does, return the two indexes that made up our sum.

```JavaScript
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            // Can't use the same idx twice
            if (i === j) {
                continue
            }
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
```

### Efficiency

This solution runs in `O(N^2)` as it runs through our input twice.

### Hash Table Solution

We can store the result of each sum in a hash table and check if the hash table includes the sum of the current array number in our iteration - the target.

If it is, that means we can reach the target with the number in our hash table and the current number we're iterating through.

[A draw up of the solution](https://excalidraw.com/#json=XKVwB54_kNbTYyQUo34Li,CMeuEoRlzOeCiQZlJQSvHA)

```JavaScript
function twoSum(nums: number[], target: number): number[] {
    const sumResults = {}; // Our hash table
    for (let i = 0; i < nums.length; i++) {
        let tempSum = target - nums[i];
        if (sumResults.hasOwnProperty(target - tempSum)) {
            return [sumResults[target - tempSum], i]
        }
        sumResults[tempSum] = i;
    }

};
```

### Efficiency

This solution will run in `O(N)` time complexity as we only iterate through our number's array once.
It does also have an `O(N)` space complexity too as we're creating a hash table that can in the worst case store our entire input too
