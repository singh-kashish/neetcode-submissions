class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        // function recursion(i:number):number{
        //     if(i==0)return 1;
        //     if(i<0)return 0;
        //     return recursion(i-1)+recursion(i-2);
        // }
        // return recursion(n);
        let t = new Array(n+1).fill(0);
        t[0]=1;
        t[1]=1;
        for(let i=2;i<=n;i++){
            t[i]=t[i-1]+t[i-2]
        }
        return t[n]
    }
}
