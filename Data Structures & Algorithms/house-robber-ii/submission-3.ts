class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return nums[0];
        function helper(start:number,end:number):number{
           let prev1=0,prev2=0;
           for(let i=start;i<end;i++){
                const take = prev2+nums[i];
                const skip = prev1;
                const curr = Math.max(take,skip);
                prev2=prev1;
                prev1=curr;
           }
           return prev1; 
        }
        const case1 = helper(0,n-1);
        const case2 = helper(1,n)    
        return Math.max(case1,case2)
    }
}
