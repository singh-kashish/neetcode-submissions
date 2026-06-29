class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;
        const returnArr = [];
        if(n<3)return returnArr;
        nums.sort((a,b)=>a-b);
        for(let i=0;i<n-2;i++){
            if(i>0 && nums[i]===nums[i-1])continue;
            let left=i+1,right=n-1;
            const target = -nums[i];
            while(left<right){
                let sum = nums[left]+nums[right];
                if(sum===target){
                    returnArr.push([nums[i],nums[left],nums[right]]);
                    left++;
                    right--;    
                    while(left<right && nums[left]===nums[left-1])left++;
                    while(left<right && nums[right]===nums[right+1])right--;
                } else if(sum<target)left++;
                else right--;
            }
        }
        return returnArr;
    }
}
