class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let s = new Set();
        let res=false;
        nums.forEach((i)=>{
            if(s.has(i))res=true;
            s.add(i);
        })
        return res===true?true:false;
    }
}
