class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length
        if(n==1)return nums[0]
        const t = new Map<number,number>()
        function rec(i:number):number{
            if(i<0)return 0
            if(i==0)return nums[0]
            if(t.has(i))return t.get(i)
            const robCurrent = nums[i]+rec(i-2);
            const bestBeforeCurrent = rec(i-1)
            const x = Math.max(robCurrent,bestBeforeCurrent)
            t.set(i,x)
            return x;
        }
        rec(n-1)
        return t.get(n-1)
    }
}
