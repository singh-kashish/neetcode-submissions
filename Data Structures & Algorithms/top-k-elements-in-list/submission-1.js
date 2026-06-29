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
     // Create buckets of count -> Array of entry
     const buckets =  Array.from({length:nums.length+1},()=>[]);
     for(const [x,y] of freq.entries()){
        buckets[y].push(x)
     }
     // Take out k elements form bucket's end and return;
     let res = [];
     for(let i=buckets.length-1;i>=0 && res.length<k;i--){
        let j=0;
        while(res.length<k && j<buckets[i].length){
            res.push(buckets[i][j++])
        }
     }
     return res;
}}
