class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i=0;i<numbers.length;i++){
            let left = i+1, right = numbers.length-1;
            while(left<=right){
                let mid = Math.floor(left+(right-left+1)/2);
                const sum = numbers[mid]+numbers[i];
                if(sum>target)right=mid-1;
                else if(sum<target)left=mid+1;
                else{
                    return [i+1,mid+1];
                }
            }
        }
    }
}
