class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let minPile = 1, maxPile = 1;
        for(const x of piles){
            maxPile = Math.max(maxPile,x)
        }
        function timeAtK(k:number):number{
            let time = 0;
            for(const x of piles){
                time+=Math.ceil(x/k)
            }
            return time
        }
        while(minPile<=maxPile){
            const k = minPile+Math.floor((maxPile-minPile+1)/2);
            const time = timeAtK(k);
            if(time>h){
                minPile = k+1
            } else if(time<=h){
                maxPile = k-1
            }
        }
        return minPile
    }
}
