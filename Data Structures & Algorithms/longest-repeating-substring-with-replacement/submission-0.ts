class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxLen = 0, n = s.length, l = 0, r = 0;
        const dict = new Map<string,number>();
        function isValid(x,y){
            let maxFreq=0
            for(const z of dict.values()){
                maxFreq = Math.max(maxFreq,z)
            }
            return y-x+1-maxFreq<=k;
        }
        for(let r=0;r<n;r++){
            const x = s[r]
            dict.set(x,(dict.get(x)??0)+1)
            while(l<=r && !isValid(l,r)){
                dict.set(s[l],(dict.get(s[l])??0)-1)
                l++;
            }
            maxLen = Math.max(maxLen,r-l+1)
        }
        return maxLen
    }
}
