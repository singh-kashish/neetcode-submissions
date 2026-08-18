class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const dp = new Map<number,number>()
        const n = cost.length
        function rec(i:number):number{
            if(i==0 || i==1)return 0;
            const currCost = Math.min(((dp.has(i-1)?dp.get(i-1):rec(i-1))+cost[i-1]),
             ((dp.has(i-2)?dp.get(i-2):rec(i-2))+cost[i-2]))
            dp.set(i,currCost)
            console.log(i,currCost)
            return currCost
        }
        console.log(dp.entries())
        return rec(n)

    }
}
