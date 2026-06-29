class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left=0,right=0, n=s.length;
        if(n==1)return 1;
        else if(n==0)return 0;
        else{
            let t = new Set();
            let res=1;
            while(right<n){
                    while(t.has(s[right])){
                        t.delete(s[left]);
                        left++;
                    }
                    res = Math.max(right-left+1,res);
                    t.add(s[right]);
                    right++;
            }
            return res;
        }
    }
}
