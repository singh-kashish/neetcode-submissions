class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        let res = new Array<string>();
        const n=digits.length
        const obj :Record<string,string[]> = {
            2:['a','b','c'],
            3:['d','e','f'],
            4:['g','h','i'],
            5:['j','k','l'],
            6:['m','n','o'],
            7:['p','q','r','s'],
            8:['t','u','v'],
            9:['w','x','y','z']
        }
        if(n==0)return[]
        function backtrack(i,str):void{
            if(i>=n){
                res.push(str)
                return
            }
            for(const x of obj[digits[i]]){
                backtrack(i+1,str+x)

            }
        }
        backtrack(0,"")
        return res;
    }
}
