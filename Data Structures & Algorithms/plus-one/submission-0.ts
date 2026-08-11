class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let res:number[] = [];
        let i=digits.length-1;
        let currSum=1;
        while(i>=0){
            currSum+=digits[i];
            res.unshift(Math.floor(currSum%10));
            currSum = Math.floor(currSum/10)
            i--;
        }
        if(currSum>0)res.unshift(currSum)
        return res;
    }
}
