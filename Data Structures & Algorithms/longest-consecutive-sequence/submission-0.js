class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let t=new Set();
        for(const x of nums){
            t.add(x);
        }
        let res=0;
        for(const x of nums){
            if(!t.has(x-1)){
                let curr=x,currLen=1;
                while(t.has(curr+1)){
                    curr++;
                    currLen++;
                    }
                res=Math.max(currLen,res);
            }
        }
        return res;
    }
}
