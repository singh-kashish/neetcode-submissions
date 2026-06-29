class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length;
        if(n<=1)return 0;
        let maxWater = 0;
        let left=0, right = n-1;
        while(left<right){
            const width = right-left;
            const h = Math.min(heights[left],heights[right]);
            maxWater = Math.max(width*h,maxWater);
            if(heights[left]>heights[right]){
                right--;
            } else{
                left++;
            }
        }
        return maxWater;
    }
}
