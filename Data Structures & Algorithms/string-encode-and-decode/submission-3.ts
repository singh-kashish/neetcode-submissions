class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = "";
        for(const x of strs){
            const n = x.length;
            let curr = n+'#'+x
            res = res+curr
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res = [];
        let i=0, lenStr='';
        while(i<str.length){
            while('0'<=str[i] && str[i]<='9'){
                lenStr+=str[i];
                i++;
            }
            if(str[i]=='#'){
                const n:number = Number(lenStr);
                res.push(str.slice(i+1,i+1+n))
                i = i+1+n;
                lenStr=''
            }
        }
        return res;
    }
}
