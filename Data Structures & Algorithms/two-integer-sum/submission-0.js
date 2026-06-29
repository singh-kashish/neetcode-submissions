class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0;i<nums.length;i++){
            let left = target-nums[i];
            for(let j=i+1;j<nums.length;j++){
                if(left==nums[j])return [i,j];
            } 
        }
    }
}
