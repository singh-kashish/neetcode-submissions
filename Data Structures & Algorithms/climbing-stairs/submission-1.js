class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n<=1)return 1;
        let t = new Array(n+1);
        t[0]=1;
        t[1]=1;
        for(let i=2;i<n+1;i++){
            t[i]=t[i-1]+t[i-2];
        }
        return t[n];
    }
}
