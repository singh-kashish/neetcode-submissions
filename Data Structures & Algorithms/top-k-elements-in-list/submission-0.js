class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map();
        for(const i of nums){
            freq.set(i,(freq.get(i)||0)+1);
        }
        // Convert to array of [num, count] and sort by count desc
    const entries = Array.from(freq.entries());
    entries.sort((a, b) => b[1] - a[1]);
    // Take first k keys
    const res = [];
    for (let i = 0; i < k; i++) {
      res.push(entries[i][0]);
    }
    return res;      
}}
