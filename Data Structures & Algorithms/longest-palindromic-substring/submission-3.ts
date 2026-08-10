class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        const n = s.length;
        let longestLen:number = 0, longestPal:string = "";
        function helper(l:number,r:number){
            while(l>=0 && r<n && s[l]===s[r]){
                if(longestLen<=r-l){
                    longestLen = r-l
                    longestPal = s.slice(l,r+1)
                }
                l--
                r++
            }
        }
        for(let i=0;i<n;i++){
            helper(i,i)
            helper(i,i+1)
        }
        return longestPal;
    }
}
