class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res = new Array<number[]>();
        const n = nums.length;
        nums.sort((a,b)=>a-b)
        function backtrack(i,subset){
            //Base case
            if(i==n){
                res.push([...subset])
                return;
            }
            // Option 1 - Include curr Value
            subset.push(nums[i]);
            backtrack(i+1,subset);
            subset.pop()

            //Option 2 - Exclude curr value and skip duplicates
            while(i+1<n && nums[i]==nums[i+1])i++
            backtrack(i+1,subset)
        }
        backtrack(0,[]);
        return res;
    }   
}
