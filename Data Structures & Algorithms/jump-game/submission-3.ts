class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        const n = nums.length
        if(nums[0]==0 && n!=1)return false
        function goBackToCheck(x:number):boolean{
            if(x<=0)return true;
            for(let i=x-1;i>=0;i--){
                if(nums[i]+i>=x)return goBackToCheck(i)
            }
            return false
        }
        return goBackToCheck(n-1);
    }
}
