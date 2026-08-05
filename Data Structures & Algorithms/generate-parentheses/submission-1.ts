class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        // add to result array if openCount == closeCount == n
        // add '(' if open<n
        // add ')' if open>close
        const stack = new Array<string>();
        const res = new Array<string>();
        function backtrack(open,close){
            if(open==close && open==n){
                res.push(`${[...stack].join('')}`)
                return
            }

            if(open<n){
                stack.push('(')
                backtrack(open+1,close)
                stack.pop()
            }

            if(open>close){
                stack.push(')')
                backtrack(open,close+1)
                stack.pop();
            }
        }
        backtrack(0,0)
        return res;
    }
}
