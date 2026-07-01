class Solution {
    
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res:number[][] = [];
        const n = nums.length;
        function createSubset(currIndex:number, currSubset:number[]):void{
            if(currIndex==n){
                res.push([...currSubset]);
                return;
            }
            // Exclude this currIndex number from subset and create a subset
            createSubset(currIndex+1,currSubset);
            // Include current number and create a subset
            currSubset.push(nums[currIndex]);
            createSubset(currIndex+1,currSubset);
            //Backtrack
            currSubset.pop();
        }
        createSubset(0,[]);
        return res;
    }
}
