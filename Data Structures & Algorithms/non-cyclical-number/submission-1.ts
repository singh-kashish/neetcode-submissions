class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
        function nextValue(x:number){
            let sum = 0;
            while(x>0){
                let digit = x  % 10
                digit = digit*digit;
                sum+=digit;
                x = Math.floor(x/10)
            }
            return sum;
        }
        let slow=n,fast=nextValue(n)
        while(fast!=1 && slow !=fast)
        {
            slow = nextValue(slow)
            fast = nextValue(nextValue(fast));
        }
        return fast===1;
    }
}
