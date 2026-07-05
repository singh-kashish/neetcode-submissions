class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length;
        if(n==0)return 0;
        if(n==1)return nums[0];
        // n-1 and 0 can't
        function robLinear(start:number,arr:number[]):number{
            const m = arr.length;
            let memo:Array<number|undefined> = new Array(arr.length).fill(undefined)
            function dfs(i:number){
                if(i>=arr.length)return 0;
                if(memo[i]!=undefined)return memo[i];
                memo[i] = Math.max(arr[i]+dfs(i+2),dfs(i+1));
                return memo[i];
            }
            return dfs(start);
        }
        
        return Math.max(robLinear(0,nums.slice(0,nums.length-1)),robLinear(0,nums.slice(1,nums.length)))
    }
}
