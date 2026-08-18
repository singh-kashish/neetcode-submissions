class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length
        if(n==1)return nums[0]
        // const t = new Map<number,number>()
        // function rec(i:number):number{
        //     if(i<0)return 0
        //     if(i==0)return nums[0]
        //     if(t.has(i))return t.get(i)
        //     const robCurrent = nums[i]+rec(i-2);
        //     const bestBeforeCurrent = rec(i-1)
        //     const x = Math.max(robCurrent,bestBeforeCurrent)
        //     t.set(i,x)
        //     return x;
        // }
        // rec(n-1)
        // return t.get(n-1)
        const t = new Array(n+1);
        t[0]=nums[0];
        t[1]=Math.max(nums[1],t[0])
        for(let i=2;i<n;i++){
            t[i]=Math.max(nums[i]+t[i-2],t[i-1])
        }
        return t[n-1]
    }
}
