class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left=0, right=height.length-1;
        let maxVal=0;
        let leftMax=-Infinity, rightMax=-Infinity;
        while(left<=right){
            if(height[left]<=height[right]){
                if(height[left]>=leftMax){
                leftMax=height[left];
                } else{
                maxVal += leftMax-height[left];
                }
                left++;
            } else{
                if(height[right]>=rightMax){
                    rightMax = height[right];
                }
                else{
                    maxVal+=rightMax-height[right];
                }
                right--;
            }
            
        }
        return maxVal;
    }
}
