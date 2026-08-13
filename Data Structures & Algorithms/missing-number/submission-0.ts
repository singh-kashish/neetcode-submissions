class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let res = 0;
        for(const x of nums){
            res^=x;
        }
        for(let i=0;i<=nums.length;i++){
            res^=i
        }
        return res;
    }
}
