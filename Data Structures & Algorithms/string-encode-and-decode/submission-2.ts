class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = "";
        for(const x of strs)res = res+x+"breakForNextString"
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res = [];
        res = str.split("breakForNextString")
        res.pop()
        return res;
    }
}
