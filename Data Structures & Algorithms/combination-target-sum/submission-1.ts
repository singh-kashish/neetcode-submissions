class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = new Array<number[]>(), n =nums.length;
        function backtrack(i,sum,arr){
            if(i>=n || sum<0)return;
            if(sum==0){
                res.push([...arr])
                return;
            }
            arr.push(nums[i]);
            backtrack(i,sum-nums[i],arr)
            arr.pop();
            backtrack(i+1,sum,arr)
        }
        backtrack(0,target,[]);
        return res;
    }
}
