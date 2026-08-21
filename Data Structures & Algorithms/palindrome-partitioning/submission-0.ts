class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const n = s.length
        const res = new Array<string[]>()
        function isPalindrome(l,r):boolean{
            while(l<=r){
                if(s[l]!=s[r])return false;
                l++
                r--
            }
            return true;
        }
        function backtrack(i,arr){
            if(i>=n){
                res.push([...arr])
                return
            }
            for(let end=i;end<n;end++){
                if(isPalindrome(i,end)){
                    arr.push(s.slice(i,end+1))
                    backtrack(end+1,arr);
                    arr.pop();
                }
            }
        }
        backtrack(0,[])
        return res;
    }
}
