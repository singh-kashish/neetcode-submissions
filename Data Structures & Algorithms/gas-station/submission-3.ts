class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        const n = gas.length
        let runningSum = 0,result=0,totalGas=0,totalCost=0;
        for(let i=0;i<n;i++){
            totalGas+=gas[i];
            totalCost+=cost[i];
        }
        if(totalGas<totalCost)return -1;
        for(let i=0;i<n;i++){
            runningSum+=gas[i]-cost[i];
            if(runningSum<0){
                runningSum=0;
                result=i+1;    
            }
        }
        return result;
    }
}
