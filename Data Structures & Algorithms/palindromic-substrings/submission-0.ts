class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        const n = s.length
        function check(l,r){
            if(l<0 || r>=n || s[l]!=s[r])return 0;
            return 1+check(l-1,r+1)
        }
        let total = 0;
        for(let y=0;y<n;y++){
            total+=check(y,y)
            total+=check(y,y+1)
        }
        return total
    }
}
