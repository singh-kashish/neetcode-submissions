class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const n = candidates.length;
        const res = [];
        candidates.sort((a,b)=>a-b)
        function backtrack(start:number,sum:number,arr:Number[]):void{
            if(sum==0){
                res.push([...arr]);
                return;
            }
            if(start>=n || sum<0)return;
            for(let i=start;i<n;i++){
                const currVal = candidates[i]
                if(currVal>sum)break;
                if(i>start && currVal==candidates[i-1])continue;
                arr.push(currVal);
                backtrack(i+1,sum-currVal,arr);
                arr.pop();
            } 
        }
        backtrack(0,target,[]);
        return res;
    }
}
