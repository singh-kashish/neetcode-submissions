class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice=Infinity, maxProfit=-Infinity;
        for(let i=0;i<prices.length;i++){
            minPrice = Math.min(minPrice,prices[i]);
            maxProfit = Math.max(maxProfit, prices[i]-minPrice);
        }
        return maxProfit;
    }
}
