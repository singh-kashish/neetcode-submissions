class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        const n = nums.length;
        if(n==1)return nums[0];
        let best = nums[0];
        let current = nums[0];
        for(let i=1;i<n;i++){
            current = Math.max(nums[i],nums[i]+current);
            best = Math.max(current,best);
        }
        return best;
    }
}
