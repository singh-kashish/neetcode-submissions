class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        // const dp = new Map<number,number>()
        const n = cost.length
        // function rec(i:number):number{
        //     if(i==0 || i==1)return 0;
        //     const currCost = Math.min(((dp.has(i-1)?dp.get(i-1):rec(i-1))+cost[i-1]),
        //      ((dp.has(i-2)?dp.get(i-2):rec(i-2))+cost[i-2]))
        //     dp.set(i,currCost)
        //     console.log(i,currCost)
        //     return currCost
        // }
        // return rec(n)
        let t = new Array(n+1)
        t[0]=0,t[1]=0
        for(let i=2;i<=n;i++){
            t[i]=Math.min((t[i-1]+cost[i-1]),(cost[i-2]+t[i-2]))
        }
        console.log(t)
        return t[n]
    }
}
