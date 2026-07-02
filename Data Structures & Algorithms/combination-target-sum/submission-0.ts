class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res:number[][] = [];
        function helper(index:number,sum:number,arr:Array<number>){
            if(sum==0){
                res.push([...arr]);
                return;
            } else if(sum<0 || index>=nums.length)return;
            arr.push(nums[index]);
            helper(index,sum-nums[index],arr);
            arr.pop();
            helper(index+1,sum,arr);
        }
        helper(0,target,[]);
        return res;
    }
}
